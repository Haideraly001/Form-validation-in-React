import userModal from "../model/user-model.js";
import jwt from 'jsonwebtoken'

const jwtToken = function (id) {
  const token = jwt.sign({ id: id }, "34YT-h5R0-34B2", {
    expiresIn: "5m"
  });
  return token
}



const signupUser = async (req, res) => {
  try {
    const userCreate = await userModal.create(req.body)
    console.log(userCreate);
    const token = jwtToken(userCreate._id)
    res.status(201).json({
      status: "success",
      user: userCreate,
      token: token
    })
  } catch (err) {
    res.status(401).json({
      "status": "fail",
      "err": err.message
    })
  }
}

const loginUser = async (req, res) => {
  try {
    const user = await userModal.findOne({ email: req.body.email }).select("+password")
    // const verify = await bcrypt.compare(req.body.password, user.password)
    const verify = user.passwordMatch(req.body.password, user.password)

    if (!verify) {
      res.status(401).json({
        "status": "fail",
        "err": "password did't match please try again"
      })
    }

    user.password = undefined

    const token = jwtToken(user._id)

    res.status(201).json({
      status: "successful login",
      user: user,
      token: token
    })
  } catch (err) {
    res.status(401).json({
      "status": "fail",
      "err": err.message
    })
  }
}

const protectedRoute = async (req, res, next) => {
  try {
    const gettoken = req.headers.authorization
    const token = gettoken.split(" ")[1];

    console.log(token);


    // verify token 
    const isVerify = jwt.verify(token, "34YT-h5R0-34B2")
    if (!isVerify) {
      console.log("false");

      res.status(401).json({
        status: "fail",
        err: "token is not valid"
      })
    }
    console.log(isVerify);
    console.log(new Date(isVerify.exp * 1000).toLocaleString());


    const userCheck = await userModal.findOne({ _id: isVerify.id })

    if (!userCheck) {
      console.log("user is exist");
      res.status(401).json({
        status: "fail",
        err: "user is exist"
      })
    }
    console.log(userCheck);
    req.user = userCheck

    next()
  } catch (err) {
    res.status(401).json({
      message: err.message
    })
  }
}

export {
  signupUser,
  loginUser,
  protectedRoute

}
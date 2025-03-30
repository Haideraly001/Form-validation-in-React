import seriesModal from "../model/series-modal.js"

const getAllSeries = async (req, res) => {

  let query = { ...req.query }
  try {
    // 1st 
    // const allseries = await seriesModal.find()

    // 2nd
    // const allseries = await seriesModal.find()
    //   .where("rating")
    //   .equals(8.7)

    // 3rd 
    // const allseries = await seriesModal.find({ rating: 9.2, price: 9 })

    // 4th 
    // const allseries = await seriesModal.find(query)

    // 5th 
    const exclusiveData = ["field", "sort", "page", "limit"]

    exclusiveData.forEach((el) => {
      delete query[el]
    })

    // 6th
    // const allseries = await seriesModal.find({ rating: { $gte: req.query.rating } })

    // 7th

    query = JSON.stringify(query)
    query = query.replace(/(gte|gt|lte|lt)/g, (match) => `$${match}`)
    query = JSON.parse(query)
    console.log("query", query);

    const { sort, field, limit, page, ...filters } = query
    // const allseries = await seriesModal.find(filters)
    const allseries = seriesModal.find(filters)


    if (req.quer.sort) {

    }




    // if (allseries.length === 0) {
    //   res.status(401).json({
    //     status: "fail",
    //     err: "not find the data"
    //   })
    // }

    res.status(200).json({
      status: "success",
      length: allseries.length,
      series: allseries
    })
  }
  catch (err) {
    res.status(401).json({
      status: "fail",
      err: err.message
    })
  }
}

const addSeries = async (req, res) => {
  try {
    const createSeries = await seriesModal.create(req.body)

    res.status(200).json({
      status: "success",
      season: createSeries
    })
  } catch (err) {
    res.status(401).json({
      status: "fail",
      err: err.message
    })
  }

}

const getOneSeries = async (req, res) => {
  console.log(req.params);

  try {
    const getOneSeries = await seriesModal.find({ _id: req.params.id })

    res.status(200).json({
      status: "success",
      season: getOneSeries
    })
  } catch (err) {
    res.status(401).json({
      status: "fail",
      err: err.message
    })
  }

}

const updateSeries = async (req, res) => {
  try {
    const id = req.params.id
    console.log(req.body);

    console.log(id);

    const updatedSeries = await seriesModal.findByIdAndUpdate(id, req.body, { runValidators: true, new: true })

    if (!updatedSeries) {
      return res.status(404).json({
        status: "fail",
        message: "Series not found"
      });
    }

    console.log("akldjfk", updatedSeries);


    res.status(200).json({
      status: "success",
      season: updatedSeries
    })
  } catch (err) {
    res.status(401).json({
      status: "fail",
      err: err.message
    })
  }

}

export {
  getAllSeries,
  addSeries,
  updateSeries,
  getOneSeries
}
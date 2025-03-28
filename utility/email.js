import nodemailer from "nodemailer"


const emailSender = async (option) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      secure: false,
      auth: {
        user: "88554b773b0dec",
        pass: "eecd8ae41fab47",
      },
    });


    const info = await transporter.sendMail({
      from: "haideralymughal01@gmail.com",
      to: option.sendEmail,
      subject: "Password reset Notification ",
      text: option.text,
      // html: "<b>follow the text</b>",
    });

    console.log("success");
  } catch (err) {
    console.log("err-->", err.message);

  }

}

export {
  emailSender
}
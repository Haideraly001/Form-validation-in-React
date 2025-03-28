import nodemailer from "nodemailer"


const emailSender = async (option) => {
  try {
    // mailTrap
    // const transporter = nodemailer.createTransport({
    //   host: "sandbox.smtp.mailtrap.io",
    //   port: 2525,
    //   secure: false,
    //   auth: {
    //     user: "88554b773b0dec",
    //     pass: "eecd8ae41fab47",
    //   },
    // });

    // brevo 
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: "890eec001@smtp-brevo.com",
        pass: "kDrmK3OaCLt7P5wN",
      },
    });


    await transporter.sendMail({
      from: "haideralymughal@gmail.com",
      to: option.sendEmail,
      subject: "Password reset Notification ",
      text: option.text,
      // html: "<b>follow the text</b>",
    });

    console.log("success email send");
  } catch (err) {
    console.log("err-->", err.message);

  }

}

export {
  emailSender
}
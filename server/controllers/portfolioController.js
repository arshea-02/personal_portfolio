const sendEmail = (req, res) => {
  try {
    return res
      .status(200)
      .json({ status: true, message: "Email Sent Successfully." });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "Send Email API Error", error });
  }
};

export default sendEmail;


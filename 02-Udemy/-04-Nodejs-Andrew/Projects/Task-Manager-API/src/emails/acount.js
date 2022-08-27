const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// sgMail.send({
//   to: "trrbader123@gmail.com",
//   from: "hplaptop3011@gmail.com",
//   subject: "This is my first creation!",
//   text: "I hope this one actually get to you.",
// });

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "hplaptop3011@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welocme to the app , ${name}. Let me know how uoy get alonw eith the app.`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "hplaptop3011@gmail.com",
    subject: "Sorry to see you go!",
    text: `Goodbye ,${name}. I hope to see you back sometime soon.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
});

// const taskOne = new Task({ description: "Learn Next.js", complete: false });

// taskOne
//   .save()
//   .then(() => {
//     console.log(taskOne);
//   })
//   .catch((error) => {
//     console.log("Error! " + error);
//   });

// MONGODB_URL=mongodb://127.0.0.1:27017/task-manager-api

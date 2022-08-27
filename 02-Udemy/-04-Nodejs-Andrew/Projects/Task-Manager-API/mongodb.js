// // CRUD create read update delete

// // const mongodb = require("mongodb");
// // const MongoClient = mongodb.MongoClient;
// // const ObjectID = mongodb.ObjectID;

// const { MongoClient, ObjectID } = require("mongodb");

// const connectionURL = "mongodb://127.0.0.1:27017";
// const databaseName = "task-manager";

// // const id = new ObjectID();
// // console.log(id.id.length);
// // console.log(id.toHexString().length);
// // console.log(id.getTimestamp());

// MongoClient.connect(
//   connectionURL,
//   { useNewUrlParser: true },
//   (error, client) => {
//     if (error) {
//       return console.log("Unable to connet to database!");
//     }

//     const db = client.db(databaseName);

//     // db.collection("users")
//     //   .deleteMany({
//     //     age: 18,
//     //   })
//     //   .then((res) => {
//     //     console.log(res);
//     //   })
//     //   .catch((error) => {
//     //     console.log(error);
//     //   });

//     db.collection("tasks")
//       .deleteOne({ description: "Learn Next.js" })
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// );

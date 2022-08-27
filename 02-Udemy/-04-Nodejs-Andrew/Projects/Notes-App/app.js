// const validator = require("validator");
const chalk = require("chalk");
const { demandOption } = require("yargs");
const yargs = require("yargs");
const notes = require("./notes.js");

// Customize yargs version
yargs.version("1.1.0");

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//Create Remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Create List command
yargs.command({
  command: "list",
  describe: "List your notes",

  handler() {
    notes.listNotes();
  },
});
// Create Read command
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

// add , remove , read , list

// console.log(yargs.argv);
yargs.parse();

/////////////////////////////////////////////////////
// // const add = require("./utils");
// // const sum = add(4, -2);
// // console.log(sum);

// const msg = note();

// console.log(msg);

// // console.log(validator.isEmail("trr@test.com"));
// // console.log(validator.isURL("trr/com"));

// // Challenge 3
// console.log(chalk.green.inverse.bold("Success!"));

// console.log(process.argv[2]);

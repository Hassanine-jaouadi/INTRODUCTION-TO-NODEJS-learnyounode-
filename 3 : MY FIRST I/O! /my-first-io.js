/* Create a file named my-first-io.js.  
   
  Write a program that uses a single synchronous filesystem operation to  
  read a file and print the number of newlines (\n) it contains to the  
  console (stdout), similar to running cat file | wc -l.  
   
  The full path to the file to read will be provided as the first  
  command-line argument (i.e., process.argv[2]). You do not need to make  
  your own test file.   */

//  How to accept arguments in a Node.js program passed from the command line
//The way you retrieve it is using the "process" object built into Node.
//It exposes an argv property, which is an array that contains all the command line invocation arguments.

const fs = require("fs");
const fileName = process.argv[2];

const str =
  fs
    .readFileSync(fileName)
    .toString()
    .split("\n").length - 1;
console.log(str);
// process.stdout.write("hello world")

/* Write a program that uses a single asynchronous filesystem operation to  
  read a file and print the number of newlines it contains to the console  
  (stdout), similar to running cat file | wc -l.  
   
  The full path to the file to read will be provided as the first  
  command-line argument.  
   
 ─────────────────────────────────────────────────────────────────────────────  
   
 # HINTS  
   
  The solution to this problem is almost the same as the previous problem  
  except you must now do it the Node.js way: asynchronous.  
   
  Instead of fs.readFileSync() you will want to use fs.readFile() and  
  instead of using the return value of this method you need to collect the  
  value from a callback function that you pass in as the second argument. */

//Remember that idiomatic Node.js callbacks normally have the signature:
//function callback (err, data) { /* ... */ }

const fs = require("fs");
const fileName = process.argv[2];

fs.readFile(fileName, function(err, data) {
  let lines = data.toString().split("\n").length - 1;

  console.log(lines);
});

/* const fs = require('fs')
const file = process.argv[2]

fs.readFile(file, function (err, contents) {
  if (err) {
    return console.log(err)
  }
  // fs.readFile(file, 'utf8', callback) can also be used
  const lines = contents.toString().split('\n').length - 1
  console.log(lines)
}) */

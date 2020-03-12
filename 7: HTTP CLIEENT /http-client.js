/* For this lesson we need to write a program that preforms an HTTP GET request to a URL, 
and writes the response data to the console. 
 GET requests are one of the request methods allowed in Hypertext Transfer Protocol (HTTP).  
 GET request only retrieve data from the specified resource (determined by the URL the request is used on).  */

const http = require("http"); // Load the http module into a variable called http, using require().

const url = process.argv[2]; // Load the url into a variable called url

http.get(url, function(response) {
  // Pass url as the first argument, and a callback  (function(response)  )as the second
  response.setEncoding("utf8"); //  automatically decodes input bytes into string
  response.on("data", console.log); // Respond to the receipt of data by outputting it to the console
  response.on("error", console.error); // Respond to errors, outputting them to the console by passing console.error
});

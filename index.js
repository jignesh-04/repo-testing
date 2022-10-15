// use Nodejs ----------------------
var http = require("http");
var fs = require("fs");
http
  .createServer((req, res) => {
    console.log("this is testing")
    console.log("this is testing - 2")

    if (req.method === "POST") {
      let body = "";
      req.on("data", (chunk) => {
          console.log("first-->",body += chunk.toString());
      });
      req.on("end", () => {
        res.end(body);
      });
    } else {
      res.end(`
        <div>
        <h2>Forms</h2>
        <form action="/" method="POST">
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="fname"><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname"><br><br>
        <input type="submit" value="Submit">
        </form>
        </div>
        `);
    }
  })
  .listen(8080);



// use Express ----------------------
// const express = require("express");
// const app = express();
// app.use(express.urlencoded());
// app.get("/", (req, res) => {
//   res.send(`
//         <div>
//         <h2>Forms</h2>
//         <form method="POST" action="/">
//         <label for="fname">First name:</label><br>
//         <input type="text" id="fname" name="fname"><br>
//         <label for="lname">Last name:</label><br>
//         <input type="text" id="lname" name="lname"><br><br>
//         <input type="submit" value="Add">
//         </form>
//         </div>
//     `);
// });
// app.post('/', (req, res)=>{
// 	res.send(req.body);
// });
// app.listen(8080);

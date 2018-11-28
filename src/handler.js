const fs = require('fs');
const path = require('path');
// const request = require('request');

const handlerHome = (req, res) => {
  const filePath = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(filePath, (err, file) =>{
    if(err) {
      console.log(err)
      res.writeHead(500, {"Content-Type" : "text/htnl"})
      res.end("<h1>We've hit an error 500</h1>")
    } else {
      res.writeHead(200, {"Content-Type" : "text/html"})
      res.end(file)
    }
  })

}



module.exports = handlerHome;

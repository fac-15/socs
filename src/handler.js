const fs = require("fs");
const path = require("path");
const request = require("request");


const handlerApi = (req, res) => {
  console.log("my api is working");
  request("https://www.coops.tech/wp-json/wp/v2/types", {json: true}, (err, response, body) => {
    if (err) {
      return console.log(err);
    } 
      console.log("this is the body", body);
      res.end(body);
  });
}

const handlerHome = (req, res) => {
  const filePath = path.join(__dirname, "..", "public", "index.html");
  fs.readFile(filePath, (err, file) => {
    if (err) {
      console.log(err);
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("<h1>We've hit an error 500</h1>");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(file);
      handlerApi(req, res);
    }
  });
};

const handlerPublic = (req, res, url) => {
  console.log("im inside pulic handler");
  console.log(url);
  const ext = url.split(".")[1];
  const extType = {
    html: "text/html",
    css: "text/css",
    js: "application/javascript",
    ico: "image/x-ico",
    jpg: "image/jpeg",
    png: "image/png"
  };

  const filePath = path.join(__dirname, "..", url);

  fs.readFile(filePath, (err, file) => {
    if (err) {
      console.log(err);
      res.writeHead(500, { "Content-Type": "text/html" });
      res.end("<h1>We've hit an error 500</h1>");
    } else {
      res.writeHead(200, `Content-Type : ${extType[ext]}`);
      res.end(file);
      handlerApi(req, res);
    }
  });
};



module.exports = {
  handlerApi,
  handlerHome,
  handlerPublic
};
//handlerHome;

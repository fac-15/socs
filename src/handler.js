const fs = require("fs");
const path = require("path");
const request = require("request");
const queryString = require("query-string");


const handlerApi = (req, res) => {
  console.log("my api is working");
  request("https://www.coops.tech/wp-json/wp/v2/co_op", {json: true}, (err, response, body) => {
    if (err) {
      return console.log(err);
    } else {
      console.log("this is the body", body[0].id);
      console.log("this is the body", body[1].id);
      console.log("this is the body", body[2].id);
      console.log("this is the body", body[3].id);
      console.log("this is the body", body[4].id);

      const searchInput = queryString.parse(req.url)["/search"];
      let filteredObj = body.filter(bodyParts => {
      return bodyParts.slug.includes(searchInput);
      })
      res.writeHead(200, {"Content-Type" : "application/json"});
      res.end(JSON.stringify(filteredObj));
    }

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
      handlerApi(req, res);
      res.end(file);

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
      handlerApi(req, res);
      res.end(file);
    }
  });
};



module.exports = {
  handlerApi,
  handlerHome,
  handlerPublic
};
//handlerHome;

const handler = require("./handler.js");

const router = (req, res) => {
  const url = req.url;
  if (url === "/") {
    handler.handlerHome(req, res);
  } else if (url.indexOf("public") !== -1) {
    handler.handlerPublic(req, res, url);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1> 404 not found error </h1>");
  }
};

module.exports = router;

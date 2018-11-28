const handler = require("./handler");
const router = (req, res) => {
  const url = req.url;
  if (url === "/") {
    handler.handlerHome(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1> 404 not found error </h1>");
  }
};

module.exports = router;

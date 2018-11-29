const handler = require("./handler.js");

let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let xhr = new XMLHttpRequest();

function fetchData(cb) {
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            JSON.parse(xhr.response);
        }
    };
    xhr.open("GET", "/", true);
    xhr.send();
};

module.exports = fetchData; 
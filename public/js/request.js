function fetchData() {
  let xhr = new XMLHttpRequest();
  //call fetch data with no params
  //print to the console
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let coTech = JSON.parse(xhr.responseText);

             console.log(coTech);
             console.log('******THIS IS THE XHR API WORKING******')
        }
    };
    xhr.open("GET", "/data", true);
    xhr.send();
};
fetchData();

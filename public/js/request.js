function fetchData(inputValue) {
  let xhr = new XMLHttpRequest();
  //call fetch data with no params
  //print to the console
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let coTech = JSON.parse(xhr.responseText);
      // return coTech;
      // console.log(coTech);
      // console.log("******THIS IS THE XHR API WORKING******");
    }
  };
  xhr.open("GET", `/search=${inputValue}`, true);
  xhr.send();
}
fetchData();

document.getElementById("search").addEventListener("keyup", function(e) {
  // e.preventDefault();
  if (e.keyCode == 13) {
  } else {
    let inputValue = document.getElementById("search").value;

    fetchData(inputValue);
    //console.log(filteredObj);
    let dataList = document.getElementById("dataList");

    let dataEntry = document.createElement("OPTION");
    dataEntry.setAttribute("value", e.name);
    dataList.appendChild(dataEntry);
  }
});

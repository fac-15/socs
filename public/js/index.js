document.getElementById("search").addEventListener("keyup", function(e) {
  // e.preventDefault();
  if (e.keyCode == 13) {
  } else {
    let inputValue = document.getElementById("search").value;

    fetchData(inputValue, newDataCallback);
    //console.log(filteredObj);
    // let dataList = document.getElementById("dataList");
    //
    // let dataEntry = document.createElement("OPTION");
    // dataEntry.setAttribute("value", e.name);
    // dataList.appendChild(dataEntry);
  }

  // if (e.target.value)
});

const newDataCallback = (coTech) => {
// document.getElementById('test').innerHTML = coTech.slug;
console.log('CoTech full list', coTech);
  coTech.forEach(function(coop) {
    let dataList = document.getElementById("datalist");

    while(dataList.firstChild) {
      dataList.removeChild(dataList.firstChild);
    }

    let dataEntry = document.createElement("OPTION");
    dataEntry.setAttribute("value", coop.title.rendered);
    dataList.appendChild(dataEntry);
  })

}

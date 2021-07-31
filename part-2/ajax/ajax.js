console.log("hello Ajax.js");
//fetch button functions
let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickedHandler);

function buttonClickedHandler() {
  console.log("fetch button clicked");
  //instantiate an xhr object
  const xhr = new XMLHttpRequest();
  //open the object
  //   xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);

  //post request
  xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true);

  xhr.getResponseHeader("Content-type", "application/json");

  //what to do on progress
  xhr.onprogress = function () {
    console.log("on progress");
  };

  //when progree complete
  xhr.onload = function () {
    if (this.status == 200) {
      console.log(this.responseText);
    } else {
      console.error("some error");
    }
  };

  data = `{"name":"t gjhewt","salary":"123","age":"23"}`;

  xhr.send(data);
}

//populate button functions
let populateButton = document.getElementById("populateButton");
populateButton.addEventListener("click", popHandler);

function popHandler() {
  console.log("populate button clicked");
  //instantiate an xhr object
  const xhr = new XMLHttpRequest();
  //open the object
  xhr.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true);

  //what to do on progress
  xhr.onprogress = function () {
    console.log("on progress");
  };

  //when progree complete
  xhr.onload = function () {
    if (this.status == 200) {
      let data = JSON.parse(this.responseText);
      console.log(data);
      let list = document.getElementById("list");
      str = "";
      for (key in data) {
        console.log(key);
        str += `<li>${data[key]}</li>`;
      }
      list.innerHTML = str;
    } else {
      console.error("some error");
    }
  };

  //send request
  xhr.send();
  console.log("we are done fetching employee");
}

console.log("hello Fetch");

// get fetch
url = "https://jsonplaceholder.typicode.com/todos/1";
function getdata() {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch(() => {
      console.log("some error");
    });
}

getdata();

// post fetch
posturl = "http://dummy.restapiexample.com/api/v1/create";

data = { name: "rajeevdnshdf", salary: "123", age: "23" };

params = {
  method: "POST",
  //   headers: {
  //     "content-type": "apllication/json",
  //   },
  data: JSON.stringify(data),
};

function postdata() {
  fetch(posturl, params)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch(() => {
      console.log("some error");
    });
}

postdata();

console.log("hello Async & Await");

async function rajeev() {
  const response = await fetch(
    "http://dummy.restapiexample.com/api/v1/employees"
  );
  const data = await response.json();
  return data;
}

a = rajeev();
a.then((data) => console.log(data));

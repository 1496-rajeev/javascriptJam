console.log("hello Error Handling");

//server response
let a = "rajeev";
a = undefined;

if (a != undefined) {
  throw new Error("this is not undefine");
} else {
  console.log("a is undefine");
}

//try & catch & finally
try {
  console.log("inside try block");
  sdhbvf();
} catch (error) {
  console.log(error);
} finally {
  console.log("finally block always run");
}

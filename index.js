// setTimeout is a standard JS timer, this one will delay for 5 seconds (5000 ms)

setTimeout(() => {
  console.log("Timer Done");
}, 5000);
console.log("Logged");
// the console prints "Logged" before "Timer Done" :O

// `setTimeout` lets the code after it execute before executing its callback
// `() => console.log("Timer Done")` is the *callback*, a function set to execute
// by `setTimeout` after the 5 secs is completed

// *** This is an example of Asynchronous programming ***
// Async is common when you deal with downloading external data (images) for websites
// There are different ways to "program" Asynchronously

// === Promises ===
// Promises in JS are what their name suggests: they're objects that "promise" a result
// in the future when called. Some functions return promises, so they're Async functions.

// Pretend that you want to download an image from the internet using JS:
fetch("https://cats.com/pretty_cat.jpg"); // * fetch is a standard JS async function *

// Follow the function with a `.then()` to deal with the result
fetch("https://cats.com/pretty_cat.jpg").then((img) => {
  console.log(img);
}); // logs the image

// you can chain `.then()` multiple times for multiple async functions
fetch("https://cats.com/link_to_pretty_cat.txt")
  .then((link) => {
    fetch(link);
  })
  .then((img) => {
    console.log(img);
  }); // log image after getting the link online

// finally, you can catch potential errors (e.g. it downloaded incorrectly) with `.catch()`
fetch("https://cats.com/pretty_cat.jpg")
  .then((img) => {
    console.log(img);
  })
  .catch((err) => {
    console.error(err);
  }); // logs a potential error

// === Async/Await ===
// Recently, JS allows you to program asynchronously similar to normal JS
// to do this, you precede an async function with the keyword `await`
// and wrap that in a function definition with `async`

async function getCatImage() {
  const image = await fetch("https://cats.com/pretty_cat.jpg");
  console.log(image);
}
getCatImage();

// instead of using `.catch()`, use try/catch syntax
async function getCatImage() {
  try {
    const image = await fetch("https://cats.com/pretty_cat.jpg");
    console.log(image);
  } catch (error) {
    console.error(error);
  }
}
getCatImage();

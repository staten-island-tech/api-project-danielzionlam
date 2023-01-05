function greet(name) {
  const greetPromise = new Promise(function (revolve, reject) {
    resolve(`Hello ${name}`);
  });
  return greetPromise;
}

const suzie = greet("suzie");

suzie.then((hello) => {
  console.log(hello);
});

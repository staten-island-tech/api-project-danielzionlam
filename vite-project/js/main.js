import "../styles/style.css";
let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let url = "https://www.balldontlie.io/api/v1/players";
let inp = document.getElementById("inp").value;
fetch(url + "Ike")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

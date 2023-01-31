import "../styles/style.css";
let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let url = "https://www.balldontlie.io/api/v1/teams";
// fetch(url + "")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     const team = data.filter((e) => e.full_name.includes(inp));
//     console.log(team);
//   });
async function search(event) {
  let inp = document.getElementById("inp").value;
  console.log(inp);
  event.preventDefault();
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  const team = data.data.filter((e) => e.full_name.includes(inp));
  console.log(team);
}
searchBtn.addEventListener("click", search);

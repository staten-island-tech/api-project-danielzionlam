import "../styles/style.css";
let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let url = "https://www.balldontlie.io/api/v1/teams";

async function search(teams) {
  let inp = document.getElementById("inp").value;
  console.log(inp);
  teams.preventDefault();
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  const team = data.data.filter((e) => e.full_name.includes(inp));
  console.log(team);
}
searchBtn.addEventListener("click", search);

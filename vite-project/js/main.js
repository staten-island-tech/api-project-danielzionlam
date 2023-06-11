import "../styles/style.css";
let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let url = "https://www.balldontlie.io/api/v1/teams";

async function search(teams) {
  var dict = {
    ATL: "https://www.nicepng.com/png/detail/37-370608_atlanta-hawks-logo-pacman-atlanta-hawks-logo-jpg.png",
    BOS: "https://cdn.freebiesupply.com/images/large/2x/boston-celtics-logo-transparent.png",
    BKN: "https://assets.stickpng.com/images/58419c7ba6515b1e0ad75a62.png",
    CHA: "https://cdn.freebiesupply.com/images/large/2x/charlotte-hornets-logo-transparent.png",
    CHI: "https://logos-world.net/wp-content/uploads/2020/05/Chicago-Bulls-Symbol.png",
    CLE: "https://assets.stickpng.com/images/58419c8da6515b1e0ad75a63.png",
    DAL: "https://assets.stickpng.com/images/58419cd6a6515b1e0ad75a68.png",
    DEN: "https://logos-world.net/wp-content/uploads/2020/05/Denver-Nuggets-Logo.png",
    DET: "https://cdn.freebiesupply.com/images/large/2x/detroit-pistons-logo-transparent.png",
    GSW: "https://assets.stickpng.com/images/58419ce2a6515b1e0ad75a69.png",
    HOU: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Houston-Rockets-logo.png",
    IND: "https://cdn.freebiesupply.com/images/large/2x/indiana-pacers-logo-transparent.png",
    LAC: "https://logos-download.com/wp-content/uploads/2016/04/LA_Clippers_logo_logotype_emblem.png",
    LAL: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Los_Angeles_Lakers_logo.svg/1280px-Los_Angeles_Lakers_logo.svg.png",
    MEM: "https://logos-world.net/wp-content/uploads/2020/05/Memphis-Grizzlies-Emblem.png",
    MIA: "https://logos-world.net/wp-content/uploads/2020/05/Miami-Heat-Logo-2000-Present.png",
    MIL: "https://cdn.freebiesupply.com/images/large/2x/milwaukee-bucks-logo-transparent.png",
    MIN: "https://cdn.freebiesupply.com/images/large/2x/minnesota-timberwolves-logo-transparent.png",
    NOP: "https://cdn.freebiesupply.com/images/large/2x/new-orleans-pelicans-logo-transparent.png",
    NYK: "https://cdn.freebiesupply.com/images/large/2x/new-york-knicks-logo-transparent.png",
    OKC: "https://logodownload.org/wp-content/uploads/2021/07/oklahoma-city-thunder-logo.png",
    ORL: "https://assets.stickpng.com/images/58419b7da6515b1e0ad75a51.png",
    PHI: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Philadelphia-76ers-Logo-1977-1996.png",
    PHX: "https://vm-storage.nyc3.digitaloceanspaces.com/2021/10/phoenix-suns-02.png",
    POR: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Portland-Trail-Blazers-Logo-2002.png/691px-Portland-Trail-Blazers-Logo-2002.png",
    SAC: "https://cdn.freebiesupply.com/images/large/2x/sacramento-kings-logo-transparent.png",
    SAS: "https://assets.stickpng.com/images/58419cbca6515b1e0ad75a66.png",
    TOR: "https://cdn.freebiesupply.com/images/large/2x/toronto-raptors-logo-transparent.png",
    UTA: "https://assets.stickpng.com/images/58419bb6a6515b1e0ad75a55.png",
    WAS: "https://assets.stickpng.com/images/58419c12a6515b1e0ad75a5b.png",
  };
  try {
    let inp = document.getElementById("inp").value;
    console.log(inp);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    let teams = data.data.filter(
      (e) =>
        e.full_name.includes(inp) ||
        e.division.includes(inp) ||
        e.conference.includes(inp)
    );
    // teams.preventDefault();
    if (inp.length === 0 || teams.length === 0) {
      throw new Error(
        "Invalid Input. Try capitalizing the first letter. ex:Celtics"
      );
      return;
    }
    console.log("team");
    // console.log(teams);
    result.innerText = "";
    teams.forEach((team) =>
      result.insertAdjacentHTML(
        "afterbegin",
        `<div class="card">
      <img class="card-pic" src="${dict[team.abbreviation]}">
      <div class="card-text">
        <h4 class="card-title">${team.full_name}</h4>
        <h4 class="card-title">City: ${team.city}</h4>
        <h4 class="card-title">Division: ${team.division}</h4>
        <h4 class="card-title">Conference: ${team.conference}</h4>
      </div>
    </div>`
      )
    );
  } catch (error) {
    alert(error);
  }
}
searchBtn.addEventListener("click", search);

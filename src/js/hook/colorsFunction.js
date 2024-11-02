const bgGreen = "bg_green";
const bgYellow = "bg_yellow";
const tirOneWith = 1;
const tirOneTo = 8;
const tirTwoWith = 9;
const tirTwoTo = 24;

function addClassList(elements, id, bg) {
  elements.forEach((el) => {
    if (el.getAttribute("data-id") == id) {
      el.classList.add(bg);
    }
  });
}

function colors({ data }, userPred, league) {
  let predIconBlock = document.querySelectorAll(".pred__icon-block");
  let icon = document.querySelectorAll(".team__icon");
  let team = document.querySelectorAll(".team__name");

  const dtUser = userPred[league];
  const dt = data[league];

  for (let i = 0; i < dtUser.length; i++) {
    for (let k = 0; k < dt.length; k++) {
      if (dtUser[i].id === dt[k].id) {
        // 3 point
        if (dtUser[i].position === dt[k].position) {
          addClassList(predIconBlock, dtUser[i].id, bgGreen);
          addClassList(icon, dtUser[i].id, bgGreen);
          addClassList(team, dtUser[i].id, bgGreen);
        }
        // 1 point
        if (dtUser[i].position !== dt[k].position) {
          if (
            dtUser[i].position >= tirOneWith &&
            dtUser[i].position <= tirOneTo &&
            dt[k].position >= tirOneWith &&
            dt[k].position <= tirOneTo
          ) {
            addClassList(predIconBlock, dtUser[i].id, bgYellow);
            addClassList(icon, dtUser[i].id, bgYellow);
            addClassList(team, dtUser[i].id, bgYellow);
          }
          if (
            dtUser[i].position >= tirTwoWith &&
            dtUser[i].position <= tirTwoTo &&
            dt[k].position >= tirTwoWith &&
            dt[k].position <= tirTwoTo
          ) {
            addClassList(predIconBlock, dtUser[i].id, bgYellow);
            addClassList(icon, dtUser[i].id, bgYellow);
            addClassList(team, dtUser[i].id, bgYellow);
          }
        }
      }
    }
  }
}

function clearColors() {
  let predIconBlock = document.querySelectorAll(".pred__icon-block");
  let icon = document.querySelectorAll(".team__icon");
  let team = document.querySelectorAll(".team__name");

  predIconBlock.forEach((el) => {
    el.classList.remove(bgGreen);
    el.classList.remove(bgYellow);
  });
  icon.forEach((el) => {
    el.classList.remove(bgGreen);
    el.classList.remove(bgYellow);
  });
  team.forEach((el) => {
    el.classList.remove(bgGreen);
    el.classList.remove(bgYellow);
  });
}

const bgGreen = "bg_green";
const bgYellow = "bg_yellow";
const tirOneWith = 1;
const tirOneTo = 8;
const tirTwoWith = 9;
const tirTwoTo = 24;

function addClassFromId(elements, id, bg) {
  elements.forEach((el) => {
    if (el.getAttribute("data-id") == id) {
      el.classList.add(bg);
    }
  });
}
function removeClass(elements, bg) {
  elements.forEach((el) => {
    el.classList.remove(bg);
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
          addClassFromId(predIconBlock, dtUser[i].id, bgGreen);
          addClassFromId(icon, dtUser[i].id, bgGreen);
          addClassFromId(team, dtUser[i].id, bgGreen);
        }
        // 1 point
        if (dtUser[i].position !== dt[k].position) {
          if (
            dtUser[i].position >= tirOneWith &&
            dtUser[i].position <= tirOneTo &&
            dt[k].position >= tirOneWith &&
            dt[k].position <= tirOneTo
          ) {
            addClassFromId(predIconBlock, dtUser[i].id, bgYellow);
            addClassFromId(icon, dtUser[i].id, bgYellow);
            addClassFromId(team, dtUser[i].id, bgYellow);
          }
          if (
            dtUser[i].position >= tirTwoWith &&
            dtUser[i].position <= tirTwoTo &&
            dt[k].position >= tirTwoWith &&
            dt[k].position <= tirTwoTo
          ) {
            addClassFromId(predIconBlock, dtUser[i].id, bgYellow);
            addClassFromId(icon, dtUser[i].id, bgYellow);
            addClassFromId(team, dtUser[i].id, bgYellow);
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

  removeClass(predIconBlock, bgGreen);
  removeClass(predIconBlock, bgYellow);
  removeClass(icon, bgGreen);
  removeClass(icon, bgYellow);
  removeClass(team, bgGreen);
  removeClass(team, bgYellow);
}

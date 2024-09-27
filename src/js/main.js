const srcUefaIcon = `https://img.uefa.com/imgml/favicon/apple-touch-icon-57x57.png`;
// const slmkhPrediction = newObjectCbSort(SLMKH_LCH, objSortPosition);
// const milanskihPrediction = newObjectCbSort(MILANSKIH_LCH, objSortPosition);
const dataSorted = newObjectCbSort(DATA, objSortPosition);

const usersPrediction = newObjectCbSort(USERS__PRED, objSortPosition);

const tableTeam = document.querySelector(".table__team");
const selectLeague = document.querySelector(".select__league");
const selectUser = document.querySelector(".select__user");

function createTableData(dataTable, league = "lch") {
  let arrHTML = [];
  for (let i = 0; i < dataTable.data[league].length; i++) {
    const { id, name, position, played, points, icon, lost, won, drawn } =
      dataTable.data[league][i];
    let out = `<div class="table__items">
                      <div class="item pred__icon">
                        <img
                          src="${srcUefaIcon}"
                          alt="UEFA icon"
                        />
                      </div>
                      <div class="item position">${position}</div>
                      <div id=${id} class="item team__icon">
                        <img
                          src="${icon}"
                          alt="${name}"
                        />
                      </div>
                      <div class="item team__name">${name}</div>
                      <div class="item team__games">${played}</div>
                      <div class="item team__win">${won}</div>
                      <div class="item team__draw">${drawn}</div>
                      <div class="item team__lose">${lost}</div>
                      <div class="item team__point">${points}</div>
                      <div class="item team__strick"></div>
                    </div>`;
    arrHTML.push(out);

    if (i == 7 || i == 23) {
      arrHTML.push(`<hr />`);
    }
  }
  tableTeam.innerHTML = arrHTML.join("");
}
createTableData(dataSorted);
// // // // //

function addPredIcon(data, league = "le") {
  let predIconImg = document.querySelectorAll(".pred__icon img");

  const arrData = [...data[league]];
  for (let i = 0; i < arrData.length; i++) {
    predIconImg[i].attributes[0].value = `${arrData[i].icon}`;
    predIconImg[i].attributes[1].value = `${arrData[i].name}`;
  }
}

//
selectLeague.addEventListener("change", () => {
  createTableData(dataSorted, selectLeague.value);
  user();
});
//
selectUser.onchange = user;

function user() {
  let user = selectUser.value;
  for (const key in usersPrediction) {
    if (key == user) {
      addPredIcon(usersPrediction[key], selectLeague.value);
    }
  }
  if (user === "clear") {
    clearPredIcon();
  }
}

function clearPredIcon() {
  let predIconImg = document.querySelectorAll(".pred__icon img");
  for (let i = 0; i < predIconImg.length; i++) {
    predIconImg[i].attributes[0].value = `${srcUefaIcon}`;
    predIconImg[i].attributes[1].value = `UEFA icon`;
  }
}

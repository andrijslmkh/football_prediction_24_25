const srcUefaIcon = `https://img.uefa.com/imgml/favicon/apple-touch-icon-57x57.png`;

const dataSorted = newObjectCbSort(DATA, objSortPosition);

const usersPrediction = newObjectCbSort(USERS__PRED, objSortPosition);

const tableTeam = document.querySelector(".table__team");
const selectLeague = document.querySelector(".select__league");
const selectUser = document.querySelector(".select__user");

//
const resultData = comparison(dataSorted, usersPrediction);

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
// /===========================

function addPredIcon(data, league = "lch") {
  let predIconImg = document.querySelectorAll(".pred__icon img");

  const arrData = [...data[league]];
  for (let i = 0; i < arrData.length; i++) {
    predIconImg[i].attributes[0].value = `${arrData[i].icon}`;
    predIconImg[i].attributes[1].value = `${arrData[i].name}`;
  }
}

//

function clearPredIcon() {
  let predIconImg = document.querySelectorAll(".pred__icon img");
  for (let i = 0; i < predIconImg.length; i++) {
    predIconImg[i].attributes[0].value = `${srcUefaIcon}`;
    predIconImg[i].attributes[1].value = `UEFA icon`;
  }
}

//
function result(resultData) {
  let arrHTML = [];

  for (const key in resultData) {
    const user = key.charAt(0).toUpperCase() + key.slice(1);
    const { lch, le, lc, total } = resultData[key];

    let out = `<div class="item user">${user}</div>
                <div class="item user__lch">${lch}</div>
                <div class="item user__le">${le}</div>
                <div class="item user__lc">${lc}</div>
                <div class="item user__total">${total}</div>
              `;
    arrHTML.push(out);
  }
  document.querySelector(".result__info").innerHTML = arrHTML.join("");
}
result(resultData);

document.querySelector(".btn-result").addEventListener("click", () => {
  document.querySelector(".table").style.display = "flex";
  document.querySelector(".result__table").style.display = "grid";
  document.querySelector(".table__block").style.display = "none";
  document.querySelector(".regulations").style.display = "none";
});

document.querySelector(".btn-regulations").addEventListener("click", () => {
  document.querySelector(".table").style.display = "none";
  document.querySelector(".regulations").style.display = "block";
});
document.querySelector(".btn-table").onclick = showTable;
function showTable() {
  document.querySelector(".table").style.display = "flex";
  document.querySelector(".result__table").style.display = "none";
  document.querySelector(".table__block").style.display = "block";
  document.querySelector(".regulations").style.display = "none";
}

selectLeague.addEventListener("change", () => {
  createTableData(dataSorted, selectLeague.value);
  user();

  showTable();
});

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
  showTable();
}
// TODO Add fun color

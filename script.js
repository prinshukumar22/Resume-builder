function addNewWeField() {
  //   console.log("Adding new field");

  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("wefield");
  newNode.classList.add("mt-3");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let weOb = document.getElementById("we");
  let weAddBtn = document.getElementById("weaddbutton");
  weOb.insertBefore(newNode, weAddBtn);
}

function addNewAqField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("aqfield");
  newNode.classList.add("mt-3");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter here");

  let aqOb = document.getElementById("aq");
  let aqAddBtn = document.getElementById("aqaddbutton");
  aqOb.insertBefore(newNode, aqAddBtn);
}

// generating CV
function generateCV() {
  // console.log("CV GENERATED");
  let namefield = document.getElementById("namefield").value;
  let nameT1 = document.getElementById("nameT1");
  nameT1.innerHTML = namefield;

  let nameT2 = document.getElementById("nameT2");
  nameT2.innerHTML = namefield;

  let contactfield = document.getElementById("contactfield").value;
  let contactT = document.getElementById("contactT");
  contactT.innerHTML = contactfield;

  let addressfield = document.getElementById("addressfield").value;
  let addressT = document.querySelector(".addressT");
  addressT.innerHTML = addressfield;

  let fbfield = document.getElementById("fbfield").value;
  let fbT = document.querySelector("#fbT");
  fbT.href = fbfield;

  let instafield = document.getElementById("instafield").value;
  let instaT = document.querySelector("#instaT");
  instaT.href = instafield;

  let linkedfield = document.getElementById("linkedfield").value;
  let linkedT = document.querySelector("#linkedT");
  linkedT.href = linkedfield;

  document.getElementById("objectiveT").innerHTML =
    document.getElementById("objectivefield").value;

  let wes = document.getElementsByClassName("wefield");
  let str = "";
  for (let e of wes) {
    str = str + `<li> ${e.value} </li>`;
  }

  document.getElementById("weT").innerHTML = str;
}

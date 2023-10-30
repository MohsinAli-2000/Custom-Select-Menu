let selectField = document.getElementsByClassName("select-field")[0];
let selectText = document.getElementById("select-text");
let options = document.getElementsByClassName("options");
let list = document.getElementById("list");
let arrowIcon = document.getElementById("arrowIcon");

selectField.onclick = function () {
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
};

for (option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent;
    list.classList.add("hide");
    arrowIcon.classList.toggle("rotate");
  };
}

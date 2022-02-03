// --Chips script-- //
const chips = document.querySelector(".chips");
const inputChip = document.querySelector(".input-chip");

inputChip.addEventListener("keyup", inputHandler);

function inputHandler(e) {
  if (e.key == "Enter") {
    if (inputChip.value.length > 0) {
      chips.innerHTML += `<div class="chip">
        <p>${inputChip.value}</p>
        <i class="fas fa-times-circle"></i>
      </div>`;
    }
    inputChip.value = "";
  }
}

// --SnakckBar script -- //

var snackBar = document.getElementById("snackbar");
var snackBarCenter = document.getElementById("snackbar-center");

function showMessage(msg) {
  snackBar.innerHTML = msg;
  snackBar.classList.add("show");

  setTimeout(function () {
    snackBar.classList.remove("show");
  }, 3000);
}

function showMessageCenter(msg) {
  snackBarCenter.innerHTML = msg;
  snackBarCenter.classList.add("showCenter");

  setTimeout(function () {
    snackBarCenter.classList.remove("showCenter");
  }, 3000);
}

function showMessageTop(msg) {
  snackBarCenter.innerHTML = msg;
  snackBarCenter.classList.add("showCenter");

  setTimeout(function () {
    snackBarCenter.classList.remove("showCenter");
  }, 3000);
}

// --Responsive Navigation Script --//
const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar-links");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

console.log(toggleButton);
console.log(navbarLinks);

// --Modal-popup script-- //
const openBtn = document.querySelector("#openModal");
const closeBtn = document.querySelector("#closeModal");
const modalContainer = document.querySelector("#modal_container");

openBtn.addEventListener("click", () => {
  modalContainer.classList.add("showModal");
});

closeBtn.addEventListener("click", () => {
  modalContainer.classList.remove("showModal");
});

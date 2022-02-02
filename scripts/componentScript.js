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

console.log("got the script");

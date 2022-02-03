const toggleSlideBtn = document.querySelector(".menu-logo");
const sideBar = document.querySelector(".docx-sidebar");
console.log(toggleSlideBtn);

toggleSlideBtn.addEventListener("click", () => {
  sideBar.classList.toggle("show");
});

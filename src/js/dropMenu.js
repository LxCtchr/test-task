const dropMenuButton = document.querySelector("[data-js-dropmenu-button]");
const dropMenu = document.querySelector("[data-js-dropmenu]");
const subDropMenuLink = document.querySelector("[data-js-sub-dropmenu-link]");
const subDropMenu = document.querySelector("[data-js-sub-dropmenu]");

let currentDropMenuHeight;

const handleDropMenu = (event) => {
  event.stopPropagation();

  if (!dropMenu.style.height || dropMenu.style.height === "0px") {
    dropMenu.style.height = dropMenu.scrollHeight + "px";
    currentDropMenuHeight = dropMenu.style.height;
  } else {
    dropMenu.style.height = "0px";
    subDropMenu.style.height = "0px";
  }
};

const handleSubDropMenu = (event) => {
  event.stopPropagation();

  if (!subDropMenu.style.height || subDropMenu.style.height === "0px") {
    subDropMenu.classList.toggle("open-sub-dropmenu");
    subDropMenu.style.height = subDropMenu.scrollHeight + "px";
    dropMenu.style.height =
      dropMenu.scrollHeight + subDropMenu.scrollHeight + "px";
  } else {
    subDropMenu.style.height = "0px";
    dropMenu.style.height = currentDropMenuHeight;
    subDropMenu.classList.toggle("open-sub-dropmenu");
  }
};

function bindDropMenuEvents() {
  dropMenuButton.addEventListener("click", handleDropMenu);
  subDropMenuLink.addEventListener("click", handleSubDropMenu);
}

export default bindDropMenuEvents;

const infoBox = document.querySelector("[data-js-info-box]");
const infoBoxButton = document.querySelector("[data-js-info-box-button]");

const handleInfoBoxButtonClick = (event) => {
  event.stopPropagation();

  infoBox.classList.toggle("active");
};

function bindInfoBlockEvents() {
  infoBoxButton.addEventListener("click", handleInfoBoxButtonClick);
}

export default bindInfoBlockEvents;

const reservationModal = document.querySelector("[data-js-reservation-modal]");
const modalOverlay = document.querySelector(
  "[data-js-reservation-modal-overlay]"
);
const modalCloseButton = document.querySelector(
  "[data-js-reservation-modal-close-button]"
);
const modalOpenButton = document.querySelector(
  "[data-js-reservation-modal-open-button]"
);

const toggleModal = () => {
  reservationModal.classList.toggle("open");
  modalOverlay.classList.toggle("open");
  document.documentElement.classList.toggle("is-lock");
};

const handleToggleModal = (event) => {
  event.stopPropagation();

  toggleModal();
};

const handleToggleModalOnKeydown = (event) => {
  event.stopPropagation();

  if (event.key === "Escape" && reservationModal.classList.contains("open")) {
    toggleModal();
  }
};

function bindReservationModalEvents() {
  modalOpenButton.addEventListener("click", handleToggleModal);
  modalCloseButton.addEventListener("click", handleToggleModal);
  modalOverlay.addEventListener("click", handleToggleModal);
  document.addEventListener("keydown", handleToggleModalOnKeydown);
}

export default bindReservationModalEvents;

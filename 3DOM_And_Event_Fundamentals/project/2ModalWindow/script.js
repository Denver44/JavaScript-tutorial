'use strict';

const modal = document.querySelector('.modal');

const ModalOverlay = document.querySelector('.overlay');
// const showModalBtn = document.querySelector('.show-modal'); // It will select only first element if multiple element exist.

const showModalBtn = document.querySelectorAll('.show-modal'); // This will return an array of all the classes who has class show-modal

const closeModalBtn = document.querySelector('.close-modal');

const closeModal = () => {
  modal.classList.add('hidden');
  ModalOverlay.classList.add('hidden');
};

const openModal = () => {
  modal.classList.remove('hidden'); // We can add multiple class also by separated comma
  ModalOverlay.classList.remove('hidden');
};

showModalBtn.forEach((showModal) =>
  showModal.addEventListener('click', openModal)
);

closeModalBtn.addEventListener('click', closeModal);
ModalOverlay.addEventListener('click', closeModal); // We want to close modal only when we click on overlay no on click anywhere in screen

//document.addEventListener can listen any event as we have selected global document.
// For keyboard there are three event keydown, keypress and keyup
// keydown is trigger as soon as we press key and lift our finger
document.addEventListener('keydown', function (e) {
  console.log(e);

  e.key === 'Escape' && !modal.classList.contains('hidden')
    ? closeModal()
    : null;
});

'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const closeModal = function () {
  //or overlay.style.display = 'none';
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

const openModal = function () {
  //or overlay.style.display = 'none';
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//key press event
document.addEventListener('keydown', function (e) {
  //console.log(j.key); //shows what key was pressed

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal'); // we use all to open all the button
// function to remove hidden class and show the infromatiom
const closeModel = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
// function to close the hidden class
const openModel = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModel.length; i++)
  btnsOpenModel[i].addEventListener('click', openModel);

btnCloseModel.addEventListener('click', closeModel); // we put closeModel not closeMdoel() beacuse javs script called it imeditly but we need it to be called when the btn is click
overlay.addEventListener('click', closeModel);

// when we hit Esc the wnidow is closed
document.addEventListener('keydown', function (e) {
  // when hit a key in the keyborad
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModel();
});

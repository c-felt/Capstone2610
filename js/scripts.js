const btnElement = document.querySelector('#hamburgerBtn');
const navElement = document.querySelector('#primaryNav');

btnElement.addEventListener('click', () => {
    btnElement.classList.toggle('open');
    navElement.classList.toggle('open');
}); 

//Put current year in footer
const theYear = new Date();
document.querySelector('#year').textContent = theYear.getFullYear()
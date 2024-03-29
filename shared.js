var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var selectPlanButtons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');


for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function () {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        // modal.className = ' open'; //override
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}

backdrop.addEventListener('click', function () {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
});

if (modalNoButton) {
    modalNoButton.addEventListener('click', closeModal);

}


function closeModal() {
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    if(modal){
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', function () {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');

    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
})

// console.dir(backdrop);
// backdrop.style.display = 'block';
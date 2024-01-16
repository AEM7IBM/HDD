const companyIcons = document.querySelectorAll('.company-icons i');
let i = 1;

setInterval(() => {
    i++
    const companyIcon = document.querySelector('.company-icons .change');
    companyIcon.classList.remove('change');
    if(i > companyIcons.length) {
        companyIcons[0].classList.add('change');
        i = 1;
    } else {
        companyIcon.nextElementSibling.classList.add('change');
    }
}, 4000);
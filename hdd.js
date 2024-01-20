const companyIcons = document.querySelectorAll('.company-icons i');
const menuElement = document.querySelector('.menu')
let i = 1;

menuElement.addEventListener('click', () => {
    document.querySelectorAll('.target').forEach((item) => {
        item.classList.toggle("change");
    })
})

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
const firstNav = document.querySelectorAll('.first__nav');
const firstBlock = document.querySelector('.content_first-nav');
const arrow = document.querySelectorAll('.arrow__navbar');
const hbr = document.querySelector('.hamburger');
const hbrBar = document.querySelector('.bar');
const header_nav = document.querySelector('.nav__bar');
const nav = document.querySelector('content_first-nav');
const aLinks = document.querySelectorAll('.column-arrow__mobile');



// HAMBURGER 


hbr.addEventListener('click', () => {
    header_nav.classList.toggle('flex');
    hbrBar.classList.toggle('animate');
    hbrBar.classList.toggle('transparent');
})



aLinks.forEach(item => {
    item.addEventListener('click', (e) => {
        item.parentElement.children[1].classList.toggle('flex');
    })
})

let firstContents = new IntersectionObserver( (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {

            firstImg.style.animation = "slideRight 1s forwards";
            firstImg.style.opacity = "1";

            firstImg__mobile.animation = "slideRight 1s forwards";
            firstImg__mobile.opacity = "1";

            firstContent.style.animation ="slideLeft 1s forwards";
            firstContent.style.opacity = "1";

            headerH2.style.animation = "apparition 1s forwards";
            headerH2.style.opacity = "1";

        }
    })
}, {
    threshold: 0.3
});

let secondContents = new IntersectionObserver( (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            phoneImg.style.animation = "slideBottom 1s forwards";
            phoneImg.style.opacity = "1";

            secondText.style.animation ="slideRight 1s forwards";
            secondText.style.opacity = "1";
        }
    })
}, {
    threshold: 0.5
});

let thirdContent = new IntersectionObserver( (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            secondImg__content.style.animation = "slideLeft 1s forwards";
            secondImg__content.style.opacity = "1";

            thirdtext.style.animation = "slideRight 1s forwards";
            thirdtext.style.opacity = "1";
        }
    })
}, {
    threshold: 0.3
});

let footer = new IntersectionObserver( (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            footerContent.style.animation = "slideBottom 1s forwards";
            footerContent.style.opacity = "1";
        }
    })
}, {
    threshold: 0.2
});

// ALL ANIMATION \\

//TOP


//CONTENT

let firstImg = document.querySelector('.illustration__desktop');
let firstImg__mobile = document.querySelector('.illustration__mobile');
let firstContent = document.querySelector('.wrapper_content__first__article');
let headerH2 = document.querySelector('.first__article h2');

let phoneImg = document.querySelector('.phone img');
let secondText = document.querySelector('.second__text');

let secondImg__content = document.querySelector('.computer__desktop');
let thirdtext = document.querySelector('.third__content');
//FOOTER

let footerContent = document.querySelector('footer');

// ALL OBSERVER 
firstContents.observe(firstImg,firstImg__mobile,firstContent,headerH2);
secondContents.observe(phoneImg,secondText);
thirdContent.observe(secondImg__content,thirdtext);
footer.observe(footerContent);




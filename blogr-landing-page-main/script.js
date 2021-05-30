const firstNav = document.querySelectorAll('.first__nav');
const firstBlock = document.querySelector('.content_first-nav');
const arrow = document.querySelectorAll('.arrow__navbar');


firstNav.forEach(nav=>
    nav.addEventListener('click', event =>{

        if (nav.children[2].style.display === 'flex') {
            nav.children[2].style.display = 'none';
            nav.children[1].style.transform = "rotate(0deg)";
        } else {
            nav.children[2].style.display = 'flex';
            nav.children[1].style.transform = "rotate(180deg)";
        } 
    })
)



//firstNav.forEach(nav => {
//    nav.children[2].style.display = "none";
//    nav.children[1].style.transform = "rotate(0deg)";
//})



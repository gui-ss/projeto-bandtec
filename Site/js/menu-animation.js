let $ = document.querySelector.bind(document);

let navMenu = $("#nav-menu");
let navLinks = document.querySelectorAll(".menu-link");

let scroll = 0;

document.addEventListener("scroll", activeNavBar);
navLinks.forEach(linkElement => linkElement.addEventListener("click", smoothScroll));

function activeNavBar(){
    if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        navMenu.classList.add("scrolled");  
    }
    else {
        navMenu.classList.remove("scrolled");
    }

    scroll = document.scrollingElement.scrollTop;
    activeLinkAfterScoll();
}

//ativar o link no menu de acordo com a seção atual
function activeLinkAfterScoll() { 
    let sectionHome = document.getElementById('home').offsetTop - 50;
    let sectionAbout = document.getElementById('about-us').offsetTop - 50;
    let sectionProject = document.getElementById('our-project').offsetTop - 50;
    let sectionGallery = document.getElementById('gallery').offsetTop - 100;
    let sectionTeam = document.getElementById('our-team').offsetTop - 50;
    let sectionContact = document.getElementById('contact-us').offsetTop - 50;

    setTimeout(() => {
        if(scroll >= sectionHome && scroll < sectionAbout) {
            navLinks[0].classList.add('active');
            removeActiveClass(0);
            
        }
        else if(scroll >= sectionAbout && scroll < sectionProject) {
            navLinks[1].classList.add('active');
    
            removeActiveClass(1);
        }
        else if(scroll >= sectionProject  && scroll < sectionGallery) {
            navLinks[2].classList.add('active');
    
            removeActiveClass(2);
        }
        else if(scroll >= sectionGallery && scroll < sectionTeam) {
            navLinks[3].classList.add('active');
    
            removeActiveClass(3);
        }
        else if(scroll >= sectionTeam && scroll < sectionContact)  {
            navLinks[4].classList.add('active');
    
            removeActiveClass(4);
        }
        else if(scroll >= sectionContact)  {
            navLinks[5].classList.add('active');
    
            removeActiveClass(5);
        }
    }, 300);
}

function removeActiveClass(current) {
    let currentLink = navLinks[current];

    for(let i = 0; i < navLinks.length; i++) {
        if(navLinks[i] != currentLink) {
            navLinks[i].classList.remove('active');
        }
    }
}

//animação de scroll
function smoothScroll(event) {
    event.preventDefault();
    
    const targetId = event.currentTarget.getAttribute('href');

    window.scrollTo({
        top: targetId == '#gallery' ? $(targetId).offsetTop - 95 : $(targetId).offsetTop - 40,
        behavior: 'smooth'
    });
}
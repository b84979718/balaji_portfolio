let homeSectionEl = document.getElementById("homeSection");
let aboutSectionEl = document.getElementById("aboutSection");
let projectSectionEl = document.getElementById("projectSection");
let contactSectionEl = document.getElementById("contactSection");
let fixedSectionEl = document.getElementById("fixedSection");

let homeEl = document.getElementById("home");
let aboutEl = document.getElementById("about");
let projectsEl = document.getElementById("projects");
let contactEl = document.getElementById("contacts");

let is_greater = (fixedSectionEl, barIconEl) => {
    let width = window.innerWidth; //to read viewport width 
    if (width <= 768) {
        fixedSectionEl.classList.add("fixed-section1");
        barIconEl.classList.remove("dispaly-none");
    }
}


let barIconEl = document.getElementById("barIcon");
let barIcon1El = document.getElementById("barIcon1");
let barIcon2El = document.getElementById("barIcon2");
let barIcon3El = document.getElementById("barIcon3");
let crossIconEl = document.getElementById("crossIcon");

crossIconEl.addEventListener("click", function() {
    fixedSectionEl.classList.add("fixed-section1");
    barIconEl.classList.remove("dispaly-none");
    barIcon1El.classList.remove("dispaly-none");
    barIcon2El.classList.remove("dispaly-none");
    barIcon3El.classList.remove("dispaly-none");
});

barIconEl.addEventListener("click", function() {
    fixedSectionEl.classList.remove("fixed-section1");
    barIconEl.classList.add("dispaly-none");
    barIcon1El.classList.add("dispaly-none");
    barIcon2El.classList.add("dispaly-none");
    barIcon3El.classList.add("dispaly-none");
});



//section-link-color
//dispaly-none

homeEl.addEventListener("click", function() {
    is_greater(fixedSectionEl, barIconEl);
    aboutEl.classList.remove("section-link-color");
    projectsEl.classList.remove("section-link-color");
    contactEl.classList.remove("section-link-color");
    homeEl.classList.add("section-link-color");
    homeSectionEl.classList.remove("dispaly-none");
    aboutSectionEl.classList.add("dispaly-none");
    projectSectionEl.classList.add("dispaly-none");
    contactSectionEl.classList.add("dispaly-none");
});

aboutEl.addEventListener("click", function() {
    is_greater(fixedSectionEl, barIcon1El);
    homeEl.classList.remove("section-link-color");
    projectsEl.classList.remove("section-link-color");
    contactEl.classList.remove("section-link-color");
    aboutEl.classList.add("section-link-color");
    aboutSectionEl.classList.remove("dispaly-none");
    homeSectionEl.classList.add("dispaly-none");
    projectSectionEl.classList.add("dispaly-none");
    contactSectionEl.classList.add("dispaly-none");
});

projectsEl.addEventListener("click", function() {
    is_greater(fixedSectionEl, barIcon2El);
    aboutEl.classList.remove("section-link-color");
    homeEl.classList.remove("section-link-color");
    contactEl.classList.remove("section-link-color");
    projectsEl.classList.add("section-link-color");
    projectSectionEl.classList.remove("dispaly-none");
    aboutSectionEl.classList.add("dispaly-none");
    homeSectionEl.classList.add("dispaly-none");
    contactSectionEl.classList.add("dispaly-none");
});

contactEl.addEventListener("click", function() {
    is_greater(fixedSectionEl, barIcon3El);
    aboutEl.classList.remove("section-link-color");
    projectsEl.classList.remove("section-link-color");
    homeEl.classList.remove("section-link-color");
    contactEl.classList.add("section-link-color");
    contactSectionEl.classList.remove("dispaly-none");
    aboutSectionEl.classList.add("dispaly-none");
    homeSectionEl.classList.add("dispaly-none");
    projectSectionEl.classList.add("dispaly-none");
});


barIcon1El.addEventListener("click", function() {
    fixedSectionEl.classList.remove("fixed-section1");
    barIconEl.classList.add("dispaly-none");
    barIcon1El.classList.add("dispaly-none");
    barIcon2El.classList.add("dispaly-none");
    barIcon3El.classList.add("dispaly-none");
});

barIcon2El.addEventListener("click", function() {
    fixedSectionEl.classList.remove("fixed-section1");
    barIconEl.classList.add("dispaly-none");
    barIcon1El.classList.add("dispaly-none");
    barIcon2El.classList.add("dispaly-none");
    barIcon3El.classList.add("dispaly-none");
});

barIcon3El.addEventListener("click", function() {
    fixedSectionEl.classList.remove("fixed-section1");
    barIconEl.classList.add("dispaly-none");
    barIcon1El.classList.add("dispaly-none");
    barIcon2El.classList.add("dispaly-none");
    barIcon3El.classList.add("dispaly-none");
});
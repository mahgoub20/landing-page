/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure
/**
 * Define Global Variables
 * 
*/
//make Global variables
const list = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
const fragment = document.createDocumentFragment()
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav
// loop our sections and add links in "li"elments
for(const section of sections){
    const sectionId = section.id;
    const sectionTitle = section.dataset.nav
    const listItem = document.createElement("li");
    const linkItem = document.createElement("a")
    linkItem.href = `#${sectionId}`
    linkItem.textContent = sectionTitle;
    linkItem.classList.add("menu__link");
    linkItem.addEventListener("click",function(evt){
         evt.preventDefault(); 
        section.scrollIntoView({
            behavior:"smooth"//make scroll smooth
        })
    })
    listItem.appendChild(linkItem)//add link in "li"elment
    fragment.appendChild(listItem)
}
list.appendChild(fragment);
// Add class 'active' to section when near top of viewport
window.onscroll = function () {
    document.querySelectorAll("section").forEach(function (active){
        if(
            active.getBoundingClientRect().top >= -400 &&
            
            active.getBoundingClientRect().top  <= 150
        ){
            active.classList.add("your-active-class");
        } else{
            active.classList.remove("your-active-class")
        }
    })
}

// Scroll to anchor ID using scrollTO event

 /* End Main Funct * Begin Events */
 

// Build menu 

// Scroll to section on link click

// Set sections as active



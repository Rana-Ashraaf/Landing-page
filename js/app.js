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
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const mySections = document.querySelectorAll("section");
const myUl = document.querySelector("ul");



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// The callback function used in forEach(mainFunction) :

const addLink = function (element,index){

let link = document.createElement("a");
let listItem = document.createElement("li");
listItem.appendChild(link);
myUl.appendChild(listItem);

// adding the sections text to navbar elements :
let text = element.getAttribute("data-nav");
link.innerText = text;
link.classList.add("menu__link");

//smooth scroll
link.addEventListener("click",()=>{element.scrollIntoView({behavior: "smooth"});});
}



// scroll event listener callback function:
const activeSec = function (){

    mySections.forEach((element,index)=>{

    let rectObject = element.getBoundingClientRect();

    if (rectObject.top > 0 && rectObject.top < 300){

        if(element.classList.contains("your-active-class"))
        {
            element.classList.remove("your-active-class");
        }
        else if (element.classList.contains("your-active-class")==false)
        {
            element.classList.add("your-active-class");
        }
    }

    })   
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// The main function that will iterate through the nodelist and build the navbar :
function mainFunction(sections){
    sections.forEach(addLink);
}


// Calling out the main function : 
mainFunction(mySections);

// Add class 'active' to section when near top of viewport
window.addEventListener("scroll",activeSec);



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
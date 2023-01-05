/* check click window.addEventListener('contextmenu', (ev) => {
    ev.preventDefault();
    console.log('right clicked')
  }); */ 
/*   new fullScroll({
    mainElement: "main",
    displayDots: true,
    dotsPosition: "right",
    animateTime: 0.8,
    animateFunction: "ease",
  }); */
/*   slide = document.getElementById('main');
window.addEventListener('click',function(){
  if(index ==0){
    slide.

  }
}) */
/* $(function() {
  $.scrollify({
    section : "section",
    sectionName : "section-name",
    scrollSpeed: 800,
    easing: "easeOutExpo",
    offset : 0,
    standardScrollElements: ".section-two",
    standardScrollElements: ".section-three",
    standardScrollElements: ".section-four",
    touchScroll:true,
    updateHash: true,
  

  });
});  */




/*  window.addEventListener('scroll',reveal);
function reveal(){
  var reveals = document.querySelectorAll('.reveal');
  for(var i= 0; i< reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 100;
    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('show');
    }
    else{
      reveals[i].classList.remove('show');
    }
  }
}  */

// Declaring the cards
/*  const animation1 = document.querySelectorAll(".reveal")
// Intersection Observer function
const observer = new IntersectionObserver( 
  entries => {
    entries.forEach( a => {
      // When an entry enters the viewport, add the class "show":
      a.target.classList.toggle("show", a.isIntersecting)

      // To keep entries from fading out after, unobserve the entry with:
     if (a.isIntersecting) observer.unobserve(a.target)
    })
  }, 
  {
    // Threshold of 1 = 100% - entry needed to be in viewport before the class "show" is added
    threshold: [1],
 
    rootMargin: '10% 0px 90% 0px',
  }
     
       
)
animation1.forEach(card => { 
  observer.observe(card) 
}) ; */


// Intersection Observer to observe the cards

/* const text  = document.querySelector(".title");
window.addEventListener('scroll',() =>{
  const current  = window.scrollY;
if (current >=100){
  text.style.opacity = "0.5";
 
}if(current >=200){
  text.style.opacity = "1.0";
console.log(current)
}



}) */

/* window.addEventListener('scroll', handleScroll);

function handleScroll() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;  
    var scrolled = (winScroll / height) * 100;
  
    document.getElementById("progressBar").style.width = scrolled + "%";
} */
/* window.onscroll = function(){scrolldown()};
function scrolldown(){
  const current  = window.screenTop
  if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
    document.getElementById("titleshow").style.fontSize =`(${current})`

  }else{
    document.getElementById("titleshow").style.fontSize = "10px";
  }
} */
/* const currentYear = new Date().getFullYear();
const yearElement = document.getElementById('year');
yearElement.innerHTML = currentYear
console.log("movie") */
/* const options = {
  root: null, 
  //The root is the container which observes the scroll & element intersections.
  // "null" defaults to the browser viewport, so we're watching if elements enter the frame of browser window
  rootMargin: '0px', 
  //Add margin to frame that the intersection observer observes. Can be written as '0px 10px 30px 20px' for different margin side sizes.
  threshold: 0.5 
  //if 50% of the card is visible in the viewport, trigger the callback function (revealing the card)
}

const callback = (entries, observer) => {
  
  //look at all intersection observer event entries reported
  entries.forEach(entry => {
    
    //if the event entry is of a target element intersecting with the observer
    if (entry.isIntersecting){
      
      //animate that target as having entered the viewport
      Motion.animate( 
        entry.target, //the element we're animating
        { //the CSS styles we're changing
          opacity: 1, 
          transform: "translateY(0px)", 
        }, 
        { //Motion's animation parameters
          duration: 1,
          easing: "ease-out",
        }
      );
      
    }
  });
};

const observer = new IntersectionObserver(callback, options);

//Tell the intersection observer to watch all card elements, then trigger the callback when their intersection status changes.
const targets = document.querySelectorAll('.card');
targets.forEach((target) => {
  observer.observe(target);
});
 */
// Declaring the cards
const observerOptions = {
  root: null,
  threshold: 0,
  rootMargin: '0 0 -20px 0'
};
const cards = document.querySelectorAll(".card")


// Intersection Observer function
const observer = new IntersectionObserver( 
  entries => {
    entries.forEach(entry => {
      // When an entry enters the viewport, add the class "show":
      entry.target.classList.toggle("show", entry.isIntersecting)

      // To keep entries from fading out after, unobserve the entry with:
       if (entry.isIntersecting) observer.unobserve(entry.target)
    })
  }, 
  {
    // Threshold of 1 = 100% - entry needed to be in viewport before the class "show" is added
    observerOptions
  }        
)


// Intersection Observer to observe the cards
cards.forEach(card => { 
  observer.observe(card) 
})

/* const observerOptions = {
  root: null, // Null = based on viewport
  rootMargin: "0px", // Margin for root if desired
  threshold: 0.5 // Percentage of visibility needed to execute function
};
function observerCallback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Fade in observed elements that are in view
      entry.target.classList.replace('fadeOut', 'fadeIn');
    }
    else {
      // Fade out observed elements that are not in view
      entry.target.classList.replace('fadeIn', 'fadeOut');
    }
  });
}


// Grab all relevant elements from DOM
const fadeElms = document.querySelectorAll('.fade');

// Call function for each element
const observer = new IntersectionObserver(observerCallback, observerOptions);
fadeElms.forEach(el => observer.observe(el)); */

yearfooter();
let prevScrollPos = window.pageYOffset;

  window.addEventListener("scroll", function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      navbar.style.top= '0';
   
    } else {
   
      navbar.style.top='-80px';
    }

    prevScrollPos = currentScrollPos;
  });

 
  function yearfooter() {
var currentYearhome = new Date().getFullYear();
var yearElementhome = document.getElementById('year-home');
yearElementhome.innerHTML = currentYearhome


} 







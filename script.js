/* =========================
   FAQ ACCORDION
========================= */

const faqButtons =
document.querySelectorAll(".faq-btn");

faqButtons.forEach(button=>{

button.addEventListener("click",()=>{

const faq =
button.parentElement;

const content =
faq.querySelector(".faq-content");

document
.querySelectorAll(".faq-content")
.forEach(item=>{

if(item !== content){

item.style.maxHeight = null;

}

});

if(content.style.maxHeight){

content.style.maxHeight = null;

}else{

content.style.maxHeight =
content.scrollHeight + "px";

}

});

});

/* =========================
   SCROLL TO TOP
========================= */

const scrollBtn =
document.getElementById("scrollTop");

window.addEventListener(
"scroll",
()=>{

if(window.scrollY > 400){

scrollBtn.style.display =
"block";

}else{

scrollBtn.style.display =
"none";

}

});

scrollBtn.addEventListener(
"click",
()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* =========================
   COURSE SEARCH
========================= */

const searchInput =
document.getElementById("searchInput");

const courseCards =
document.querySelectorAll(".course-card");

if(searchInput){

searchInput.addEventListener(
"keyup",
()=>{

const value =
searchInput.value.toLowerCase();

courseCards.forEach(card=>{

const text =
card.innerText.toLowerCase();

if(text.includes(value)){

card.style.display =
"flex";

}else{

card.style.display =
"none";

}

});

});

}

/* =========================
   FADE IN ANIMATION
========================= */

const observer =
new IntersectionObserver(

entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"show"
);

}

});

},

{
threshold:0.1
}

);

document
.querySelectorAll(
".course-card,.feature-card,.testimonial-card,.about-section"
)
.forEach(el=>{

el.classList.add("hidden");

observer.observe(el);

});

/* =========================
   FLOATING BUTTON EFFECT
========================= */

if(scrollBtn){

setInterval(()=>{

scrollBtn.style.transform =
"translateY(-4px)";

setTimeout(()=>{

scrollBtn.style.transform =
"translateY(0px)";

},500);

},1500);

}

/* =========================
   LIVE VISITOR COUNTER
========================= */

const randomVisitors =
Math.floor(
Math.random() * 200
) + 50;

console.log(
"Live Visitors:",
randomVisitors
);

/* =========================
   NAVBAR ACTIVE LINK
========================= */

const navLinks =
document.querySelectorAll(
".nav-links a"
);

navLinks.forEach(link=>{

link.addEventListener(
"click",
()=>{

navLinks.forEach(item=>{

item.classList.remove(
"active"
);

});

link.classList.add(
"active"
);

});

});

/* =========================
   COURSE HOVER GLOW
========================= */

courseCards.forEach(card=>{

card.addEventListener(
"mousemove",
e=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

card.style.background =
`radial-gradient(circle at ${x}px ${y}px,
rgba(139,92,255,.20),
rgba(15,15,25,.85) 40%)`;

});

card.addEventListener(
"mouseleave",
()=>{

card.style.background =
"rgba(15,15,25,.75)";

});

});

/* =========================
   PRELOADER READY
========================= */

window.addEventListener(
"load",
()=>{

document.body.classList.add(
"loaded"
);

});

/* =========================
   END
========================= */
// =========================
// NAVBAR BACKGROUND ON SCROLL
// =========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    navbar.style.background = "rgba(5,15,30,0.98)";
    navbar.style.padding = "15px 7%";
    navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";

  } else {

    navbar.style.background = "rgba(5,15,30,0.92)";
    navbar.style.padding = "20px 7%";
    navbar.style.boxShadow = "none";

  }

});



// =========================
// FADE IN ANIMATION
// =========================

const fadeElements = document.querySelectorAll(
  ".service-card, .project-card, .about-card, .contact-box"
);

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }

  });

}, {
  threshold: 0.2
});

fadeElements.forEach((el) => {

  el.classList.add("hidden");
  observer.observe(el);

});



// =========================
// MOBILE NAVIGATION TOGGLE
// =========================

const navLinks = document.querySelector("nav");

const menuBtn = document.createElement("div");

menuBtn.classList.add("menu-btn");
menuBtn.innerHTML = "☰";

document.querySelector(".navbar").appendChild(menuBtn);

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});



// =========================
// CLOSE MOBILE MENU
// =========================

document.querySelectorAll("nav a").forEach((link) => {

  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });

});



// =========================
// ADD EXTRA CSS THROUGH JS
// =========================

const style = document.createElement("style");

style.innerHTML = `

.hidden{
  opacity:0;
  transform:translateY(40px);
  transition:all 0.8s ease;
}

.show{
  opacity:1;
  transform:translateY(0);
}

.menu-btn{
  display:none;
  font-size:2rem;
  color:white;
  cursor:pointer;
}

@media(max-width:991px){

  .menu-btn{
    display:block;
  }

  nav{
    position:absolute;
    top:100%;
    left:0;
    width:100%;
    background:#07111f;
    flex-direction:column;
    align-items:center;
    padding:30px 0;
    display:none;
  }

  nav.active{
    display:flex;
  }

}

`;

document.head.appendChild(style);



// =========================
// BUTTON HOVER EFFECT
// =========================

const buttons = document.querySelectorAll(
  ".btn-primary, .btn-secondary"
);

buttons.forEach((button) => {

  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-4px) scale(1.02)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0) scale(1)";
  });

});



// =========================
// HERO TEXT TYPING EFFECT
// =========================

const heroTitle = document.querySelector(".hero-content h1");

const originalText = heroTitle.innerHTML;

heroTitle.innerHTML = "";

let index = 0;

function typeEffect() {

  if(index < originalText.length){

    heroTitle.innerHTML += originalText.charAt(index);

    index++;

    setTimeout(typeEffect, 30);

  }

}

window.addEventListener("load", typeEffect);



// =========================
// SCROLL TO TOP ON REFRESH
// =========================

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

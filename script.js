let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}



let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
  
  let currentSectionIndex = 0;
  section.forEach((sec, index) => {
    const top = window.scrollY;
    const height = sec.offsetHeight;
    const offset = sec.offsetTop - 150;
    
    if (top >= offset && top < offset + height) {
      currentSectionIndex = index;
    }
  });
  
  navLinks.forEach(link => link.classList.remove('active'));
  navLinks[currentSectionIndex].classList.add('active');
};


var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });


  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop:true,
  });

  

   function loader() {
     document.querySelector('.loader-container').classList.add('fade-out');
   }
  
   function fadeOut() {
     setTimeout(() => {
       loader();
       // After the loader animation finishes, show the website content
       setTimeout(() => {
         document.querySelector('.loader-container').style.display = 'none';
         document.querySelector('body').style.overflow = 'auto';
       }, 2000); // Wait for 2 seconds after the loader animation
     }, 1000); // Wait for 1 second before starting the loader animation
   }
  
   window.onload = fadeOut;
  
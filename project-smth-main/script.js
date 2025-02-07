const menubtn = document.querySelector(".menu-btn");
const navlinks = document.querySelector(".nav-links");
menubtn.addEventListener("click", ()=>{
    navlinks.classList.toggle("mobile-menu")
})


const scrollbtn = document.getElementById('scrollbtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollbtn.classList.add('show');
  } else {
    scrollbtn.classList.remove('show');
  }
});

scrollbtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
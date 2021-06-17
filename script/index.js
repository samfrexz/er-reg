const menuBars = document.querySelector('.bars')
const navLinks = document.querySelector('.nav-container ul')
const nav = document.querySelector('nav')

menuBars.style.color = 'green'

// navLinks.style.maxHeight = navLinks.scrollHeight + "vh"

menuBars.addEventListener('click', showMenu=()=> {
  menuBars.classList.toggle('active');
  if (navLinks.style.maxHeight) {
    navLinks.style.maxHeight = null;
      }  else {
        navLinks.style.maxHeight = navLinks.scrollHeight + "vh"
      }
  // console.log(12)
})

document.querySelectorAll('#links').forEach(function(itemLink) {
  itemLink.addEventListener("click", function(e) {
    navLinks.style.maxHeight = null;
    menuBars.classList.toggle('active');
    console.log(11)
  })
})

document.body.addEventListener("click", function(e) {
  if(!e.path.includes(nav)) {
    navLinks.style.maxHeight = null;
    menuBars.classList.remove('active')
  }
  console.log(11)
});

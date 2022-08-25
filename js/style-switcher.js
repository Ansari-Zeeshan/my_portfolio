// toggle style switcher
const styleToggler = document.querySelector('.style-toggler'),
styleSwitcher = document.querySelector('.style-switcher');

styleToggler.addEventListener('click',()=>{
  styleSwitcher.classList.toggle('open');
})

// hide style-switcher on scroll
window.addEventListener('scroll',()=>{
  if(styleSwitcher.classList.contains('open')){
    styleSwitcher.classList.remove('open');
  }
})

//theme 
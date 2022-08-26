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

//theme colors
const alterStyle = document.querySelectorAll('.alternate-style');

function setActiveStyle(color){
  alterStyle.forEach((style)=>{
    if(color === style.getAttribute('title')){
      style.removeAttribute('disabled');
    }
    else{
      style.setAttribute('disabled','true');
    }
  })
}

// theme light and dark mode
const dayNight = document.querySelector('.day-night'),
  iElem = dayNight.querySelector('i');

  dayNight.addEventListener('click', ()=>{
    iElem.classList.toggle('fa-sun');
    iElem.classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
  })

window.addEventListener('load',()=>{
  if(document.body.classList.contains('dark')){
    iElem.classList.add('fa-sun');
  }
  else{
    iElem.classList.add('fa-moon');
  }
})
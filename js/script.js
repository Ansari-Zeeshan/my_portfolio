const effect2 = document.querySelector('.effect-2');
const effect5 = document.querySelector('.effect-5');

function appear() {
   for (let i = 0; i < 28; i++) {
      let spanchild = document.createElement('div');
      spanchild.setAttribute('class', 'span-child')
      effect2.appendChild(spanchild);
   }
   for (let i = 0; i < 10; i++) {
      let spanchild2 = document.createElement('div');
      spanchild2.setAttribute('class', 'span-child2')
      effect5.appendChild(spanchild2);
   }
}
appear();

(() => {
   const aboutsection = document.querySelector('.about-section');
   const tabscontainer = document.querySelector('.about-tabs');

   tabscontainer.addEventListener('click', (event) => {
      if (event.target.classList.contains('tab-item') && !event.target.classList.contains('active')) {
         let target = event.target.getAttribute('data-target');
         tabscontainer.querySelector('.active').classList.remove('outer-shadow', 'active');
         event.target.classList.add('outer-shadow', 'active');

         aboutsection.querySelector('.tab-content.active').classList.remove('active');
         aboutsection.querySelector(target).classList.add('active');
      }
   })
})();

function bodyScrollingToggle(){
   document.body.classList.toggle('hidden-scrolling');
}

// portfolio filter
(function abc()
{
   const filterCont = document.querySelector('.portfolio-filter'),
   portItemsCont = document.querySelector('.portfolio-items'),
   portItems = document.querySelectorAll('.portfolio-item'),
   popup = document.querySelector('.portfolio-popup'),
   prevBtn = popup.querySelector('.pp-prev'),
   nextBtn = popup.querySelector('.pp-next'),
   closeBtn = popup.querySelector('.pp-close'),
   projDetCont = popup.querySelector('.pp-details'),
   projDetBtn = popup.querySelector('.pp-project-details-btn');
   let itemIndex, slideIndex, screenshots;

   filterCont.addEventListener('click',(e)=>{
      if(e.target.classList.contains('filter-item')
      && !e.target.classList.contains('active')){
         filterCont.querySelector('.active').classList.remove('outer-shadow',
         'active');
         e.target.classList.add('active','outer-shadow');
         let target = e.target.getAttribute('data-target');

         portItems.forEach((item)=>{
            if(target === item.getAttribute('data-category') || target ==="all"){
               item.classList.remove('hide');
               item.classList.add('show');
            }
            else{
               item.classList.remove('show');
               item.classList.add('hide');
            }
         })
      }
   })

   portItemsCont.addEventListener('click',(e)=>{
      if(e.target.closest('.portfolio-item-inner')){
         let portfolioItem = e.target.closest('.portfolio-item-inner').parentElement;
         itemIndex = Array.from(portfolioItem.parentElement.children).
         indexOf(portfolioItem);
         screenshots = portItems[itemIndex].querySelector(
            '.portfolio-item-img img').getAttribute('data-screenshots');
         screenshots = screenshots.split(',');
         if(screenshots.length ===1){
            prevBtn.style.display="none";
            nextBtn.style.display="none";
         }
         else{
            prevBtn.style.display="block";
            nextBtn.style.display="block";
         }
         slideIndex = 0;
         popupToggle();
         popupSlideshow();
         popupDetails();
      }
   })

   closeBtn.addEventListener('click', ()=>{
      popupToggle();
      if(projDetCont.classList.contains('active')){
         popupDetailsToggle();
      }
   })

   function popupToggle(){
      popup.classList.toggle('open');
      bodyScrollingToggle();
   }
   
   function popupSlideshow(){
      let imgSrc = screenshots[slideIndex];
      let popupImg = popup.querySelector('.pp-img');
      popup.querySelector('.pp-loader').classList.add('active');
      popupImg.src = imgSrc;
      popupImg.onload = ()=>{
         popup.querySelector('.pp-loader').classList.remove('active');
      }
      popup.querySelector('.pp-counter').innerText = `${slideIndex+1} of ${screenshots.length}`;
   }

   nextBtn.addEventListener('click',()=>{
      if(slideIndex === screenshots.length-1){
         slideIndex = 0;
      }
      else{
         slideIndex++;
      }
      popupSlideshow();
   })

   prevBtn.addEventListener('click',()=>{
      if(slideIndex === 0){
         slideIndex = screenshots.length-1;
      }
      else{
         slideIndex--;
      }
      popupSlideshow();
   })

   function popupDetails(){
      if(!portItems[itemIndex].querySelector('.portfolio-item-details')){
         projDetBtn.style.display="none";
         return;
      }
      projDetBtn.style.display="block";
      let details = portItems[itemIndex].querySelector(
         '.portfolio-item-details').innerHTML;
      popup.querySelector('.pp-project-details').innerHTML = details; 
      let title = portItems[itemIndex].querySelector(
         '.portfolio-item-title').innerText;
         console.log(title);
      popup.querySelector('.pp-title h2').innerText = title;  
      let category = portItems[itemIndex].getAttribute('data-category');   
      popup.querySelector('.pp-project-category').innerHTML = category.split('-').join(' ');
   }

   projDetBtn.addEventListener('click', ()=>{
      popupDetailsToggle();
   })

   function popupDetailsToggle(){
      if(projDetCont.classList.contains('active')){
         projDetBtn.querySelector('i').classList.remove('fa-minus');
         projDetBtn.querySelector('i').classList.add('fa-plus');
         projDetCont.classList.remove('active');
         projDetCont.style.maxHeight = 0;
      }
      else{
         projDetBtn.querySelector('i').classList.remove('fa-plus');
         projDetBtn.querySelector('i').classList.add('fa-minus');
         projDetCont.classList.add('active');
         projDetCont.style.maxHeight = `${projDetCont.scrollHeight}px`;
         popup.scrollTo(0, projDetCont.offsetTop);
      }
   }

})();

// testimonial slider
(()=>{
   
   const sliderCont = document.querySelector('.testi-silder-container'),
   slides = sliderCont.querySelectorAll('.testi-item'),
   slideWidth = sliderCont.offsetWidth,
   prevBtn = document.querySelector('.testi-slider-nav .prev'),
   nextBtn = document.querySelector('.testi-slider-nav .next'),
   activeSlide = sliderCont.querySelector('.testi-item.active');
   let slideIndex = Array.from(activeSlide.parentElement.children).
   indexOf(activeSlide);

   slides.forEach((slide)=>{
      slide.style.width = `${slideWidth}px`
   })
   sliderCont.style.width = `${slideWidth * slides.length}px`;

   nextBtn.addEventListener('click',()=>{
      if(slideIndex === slides.length-1){
         slideIndex = 0;
      }
      else{
         slideIndex++;
      }
      slider();
   })

   prevBtn.addEventListener('click',()=>{
      if(slideIndex === 0){
         slideIndex = slides.length - 1;
      }
      else{
         slideIndex--;
      }
      slider();
   })

   function slider(){
      sliderCont.querySelector('.testi-item.active').classList.remove('active');
      slides[slideIndex].classList.add('active');
      sliderCont.style.marginLeft = `${-(slideWidth * slideIndex)}px`;
   }
   slider();

})();
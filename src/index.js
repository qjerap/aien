import AOS from 'aos'
import 'aos/dist/aos.css'

var waypoint = new Waypoint({
  element: document.getElementById('section'),
  handler: (direction) => {
    let nav = document.querySelectorAll('.nav__item');

    nav.forEach((item)=>{
      direction == 'down' && item.classList.add('black');
      direction == 'up' && item.classList.remove('black');   
    })   
  }
})

var waypoint2 = new Waypoint({
  element: document.getElementById('section'),
  handler: (direction) => {
    let header = document.querySelector('.header__hero');
    direction == 'down' && header.classList.add('header__logo-onScroll')
    direction == 'up' && header.classList.remove('header__logo-onScroll')
     
  },
  offset: 800
})

AOS.init();





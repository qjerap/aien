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

AOS.init();





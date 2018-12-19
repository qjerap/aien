// import mediumZoom from 'medium-zoom'
// mediumZoom(document.querySelector('#test'))


let scrollpos = window.scrollY

const header = document.querySelector(".header")
const header_height = header.offsetHeight
const navItems = document.querySelector(".nav__item")
const navItems_height = navItems.offsetHeight;
// console.log(navItems);



const add_class_on_scroll = () => console.log('KEK');


window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (navItems_height >= header_height) { add_class_on_scroll() }


//   else { remove_class_on_scroll() }
//   console.log(scrollpos)
})
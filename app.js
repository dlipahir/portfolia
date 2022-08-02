const select = (ele)=>document.querySelector(ele);
const selectAll = (ele)=>document.querySelectorAll(ele);

const close =select('.close');
const open = select('.menu');
const menu = select('#menu');
const pages = selectAll('.page')
const nav = select('.nav')
close.addEventListener('click',()=>{
    menu.style.left="-100%";
    })
pages.forEach((page)=>{
    page.addEventListener('click',()=>{
    menu.style.left="-100%";
    })
})


open.addEventListener("click",()=>{
    menu.style.left="0%"
})
document.addEventListener('scroll',()=>{
    
})


function roundText(el, str) {
      var element = document.querySelector(el);
      var text = str ? str : element.innerHTML;
      element.innerHTML = '';
      for (var i = 0; i < text.length; i++) {
        var letter = text[i];
        var span = document.createElement('span');
        var node = document.createTextNode(letter);
        var r = (360/text.length)*(i);
        var x = (Math.PI/text.length).toFixed(0) * (i);
        var y = (Math.PI/text.length).toFixed(0) * (i);
        span.appendChild(node);
        span.style.webkitTransform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
        span.style.transform = 'rotateZ('+r+'deg) translate3d('+x+'px,'+y+'px,0)';
        element.appendChild(span);
      }
    }
roundText('.scroller');

const scrl=select(".scroller")

window.addEventListener("scroll", function(){
    scrl.style.transform=`rotate(${window.scrollY * 0.15}deg)`
  })

  //gsap

  const tl = gsap.timeline();

  tl
  .from('.name-nav',{y:-100})
  .from('.menu',{y:-100},"-=0.3")
  .from('.tagline .sspan',{y:200,stagger:0.2,opacity:0,rotationX:-40,rotationY:-10,transformOrigin:'0% 0% 45'})
  .from('.work div',{y:600,stagger:0.2})
  .from('.name-main',{x:600},'-=0.3')






window.addEventListener("dblclick",()=>{
    if(menu.style.left=='0%')
    menu.style.left="-100%"
    else
        menu.style.left="0%"
  })

if(window.innerWidth>600){
const pc= select('.project-cont').offsetWidth-window.innerWidth+100;
const horizontalscrl =gsap.timeline().to('.project-cont',{x:-pc})
ScrollTrigger.create({
    trigger:'#projects',
    animation:horizontalscrl,
    markers:false,
    start:"center 50%",
    end:"4000 50%",
     scrub:0.2,
     pin:true
})

}
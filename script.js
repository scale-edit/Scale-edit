gsap.registerPlugin(ScrollTrigger)

/* LENIS */

const lenis = new Lenis({

duration:1.6,

smoothWheel:true

})

function raf(time){

lenis.raf(time)

requestAnimationFrame(raf)

}

requestAnimationFrame(raf)

lenis.on(
'scroll',
ScrollTrigger.update
)

gsap.ticker.add((time)=>{

lenis.raf(time*1000)

})

gsap.ticker.lagSmoothing(0)


/* reveal */

document
.querySelectorAll(".reveal")

.forEach((el,index)=>{

gsap.to(el,{

scrollTrigger:{

trigger:el,

start:"top 88%"

},

opacity:1,

y:0,

duration:1,

delay:index*.05,

ease:"power3.out"

})

})


/* FAQ */

document
.querySelectorAll(".faq-btn")

.forEach(btn=>{

btn.onclick=()=>{

const answer=
btn.nextElementSibling

answer.style.maxHeight=

answer.style.maxHeight

? null

: answer.scrollHeight+"px"

}

})


/* VIDEO CONTROLS */

/* VIDEO CONTROLS */


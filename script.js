var crsr=document.querySelector('#cursor')
var  bcrsr=document.querySelector('#cursor-blur')


document.addEventListener("mousemove",function(dets){
 crsr.style.left=dets.x+30+"px"
 crsr.style.top=dets.y+"px"
 bcrsr.style.left=dets.x -250+"px"
 bcrsr.style.top=dets.y- 250+"px"

})
var allh4=document.querySelectorAll("#nav h4")
allh4.forEach(function(el){
    el.addEventListener("mouseenter",function(){
        crsr.style.scale=3
        crsr.style.border="1px solid white"
        crsr.style.backgroundColor="transparent"
    })
    el.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px solid white"
        crsr.style.backgroundColor=rgba(120, 150, 20, 0.596);
    })
})





gsap.to("#nav",{
    backgroundColor:"#000",
    height :"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        //markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1

    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    duration:0.5,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markres:true,
        start :"top -25%",
        end:"top -75%",
        scrub:2   
    }
})
gsap.from("#about-us img,#about-us-in",{
    y:90,
     opacity:0,
     duration:1,
     stagger:0.4,
     scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        
        start:"top 70%",
        end:"top 65%",
        scrub:3
     }
})
gsap.from(".card",{
    scale:0.8,
     opacity:0,
     duration:1,
     
     scrollTrigger:{
        trigger:".card",
        scroller:"body",
        
        start:"top 70%",
        end:"top 65%",
        scrub:2
     }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#page4 h1",{
  y:50,
  scrollTrigger:{
    trigger:"#page4 h1",
    scroller:"body",
    start:"top 75%",
    end:"top 70%",
    scrub:5
}
})
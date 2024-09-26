function show(){
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, 
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();}
    
    show()

    options = {
      "outerStyle": "circle-basic",
      "hoverEffect": "pointer-blur",
      "hoverItemMove": false,
      "defaultCursor": true,
      "outerWidth": 30,
      "outerHeight": 30
    }
    magicMouse(options);

 
    gsap.to("#bottle", {
      rotate: -15,
      scrollTrigger: {
        trigger: "#bottle",
        scroller: "#main",
        start: "top 5%",
        end: "top -416%",
        scrub: true,
        pin: true

      }
    })

    gsap.to("#bottle", {
     scale: 0.5,
     scrollTrigger: {
      trigger: "#page5 h1",
      scroller: "#main",
      start: "top 430%",
      end: "top -430%",
      scrub: true,
      pin: true
    },

    })





    let t1 = gsap.timeline() ;

t1.from('#page1 h1',{
  opacity: 0,
y:200,
duration: 1,
ease: "power1.out",
stagger: .2


})

    t1.from("#main #page1_dog_image", {
      opacity: 0,
      duration: 1,
      scale: 0.1,
    })

    t1.from("#bottle", {
      opacity: 0,
      duration: 1,
      scale: 0.2,
    })

   
  


    gsap.from('#page2_part1 h1,#page2_part1 h3,#page2_part1 p,#page2_part1 button',{
      x:-400,
      opacity:0,
      ease:Power2,
      scrollTrigger: {
        trigger: '#page2',
        scroller: '#main',
        start: 'top 80%',
        end:"top 0%",
        scrub:true,
       
        },
        stagger:.2
    },"same")

    gsap.from('#page2_part2',{
      x:400,
      opacity:0,
      ease:Power2,
      scrollTrigger: {
        trigger: '#page2',
        scroller: '#main',
        start: 'top 80%',
        end:"top 0%",
        scrub:true
        },
    },"same")


gsap.from("#page3 h1",{
  opacity: 0,
  y:-400,
  duration: 1,
  ease: "power1.out",
  stagger: .2,
  scrollTrigger:{
    trigger: "#page3",
    scroller: "#main",
    start: "top 80%",
    end: "top 10%",
    scrub: true,

  }
  
})


gsap.from('#page3_text_part1 a img,#page3_text_part1 h5',{
  x:-400,
  opacity:0,
  ease:Power2,
  scrollTrigger: {
    trigger: '#page3',
    scroller: '#main',
    start: 'top 90%',
    end:"top 0%",
    scrub:true
    },
    stagger:.3
},"same")

gsap.from('#page3_text_part2 h5,#page3_text_part2 h2,#page3_text_part2 p',{
  x:400,
  opacity:0,
  ease:Power2,
  scrollTrigger: {
    trigger: '#page3',
    scroller: '#main',
    start: 'top 90%',
    end:"top 0%",
    scrub:true
    },
    stagger:.2
},"same")

gsap.from("#page4_color1 ,#page4_color2,#page4_color3,.jar",{
  opacity:0,
  scale:0,
  // y:400,
  scrollTrigger: {
    trigger: "#page4",
    scroller: "#main",
    start: "top 80%",
    end:"top 0%",
    scrub:true,
    },
    stagger:.4

})




    gsap.from('#page5_bottel',{
      y:-400,
      opacity:0,
      ease:Power2,
      scrollTrigger: {
        trigger: '#page5',
        scroller: '#main',
        start: 'top 80%',
        end:"top 0%",

        scrub:true
        },
    })

    gsap.from('#page6_part1',{
      x:-400,
      opacity:0,
      ease:Power2,
      scrollTrigger: {
        trigger: '#page6',
        scroller: '#main',
        start: 'top 100%',
        end:"top 0%",
      
        },
    },"same")

    gsap.from('#page6_part2 h1,#page6_part2 h5,#page6_part2 p,#page6_part2 button',{
      x:400,
      opacity:0,
      ease:Power2,
      scrollTrigger: {
        trigger: '#page6',
        scroller: '#main',
        start: 'top 100%',
        end:"top 0%",
        
        },
    },"same")


var menu = document.querySelector('.menu-bar');
var a=0;
menu.addEventListener("click",function(){

   if(a==0){
    gsap.to('.mobile-nav',{
      x:200+'%',
  duration:.5
    })
    menu.innerHTML=`<i class="ri-close-fill"></i>`;

    gsap.from(".mobile-nav-items h1",{
      x:-200,
      opacity:0,
      ease:"ease",
      stagger:.3
    
    })
    a=1;

   }
   else{

    gsap.to('.mobile-nav',{
      x:-200+'%',
      duration:.5
      })
      menu.innerHTML=`<i class="ri-menu-line"></i>`
      a=0;

   }

 
})


// var cursor = document.querySelector('.cursor')
//     mouseX = 0,
//     mouseY = 0


// gsap.to({}, 0.016 , {
//     repeat:-1,

//     oneRepeat: function() {
//         gsap.set(cursor, {
//             css:{
//                 left: mousex,
//                 top: mouseX
//             }
//         })
//     }
// });

// window.addEventListener("mousemove", function (e){
//     mouseX = e.clientX;
//     mouseY = e.clientY
// })



// var cursor = document.querySelector('.cursor');
// var cursorScale = document.querySelectorAll('.cursor-scale');
// var mouseX = 0;
// var mouseY = 0;

// gsap.to({}, 0.016 , {
//     repeat: -1,
//     onRepeat: function() {
//         gsap.set(cursor, {
//             css: {
//                 left:mouseX ,
//                 top: mouseY
//             }
//         });
//     }
// });

// window.addEventListener("mousemove", function (e) {
//     mouseX = e.clientX;
//     mouseY = e.clientY;
// });


// cursorScale.forEach(link => {
//     link.addEventListener('mouseleave', () => {
//         cursor.classList.remove('grow')
//     });
//     link.addEventListener('mousemove', () => {
//         cursor.classList.add('grow')
//     });
// });



//    cursor

gsap.set('.cursor',{xPercent:-50,ypercent:-50});

var cur = document.querySelector('.cursor');

var cursorScale = document.querySelectorAll('.cursor-scale')       //mouse lejanai pr size bara hou//

window.addEventListener('mousemove',e => {
    gsap.to(cur,0.2,{x:e.clientX,y:e.clientY});
})

cursorScale.forEach(link => {                           //mouse lejanai pr size bara hou//
    link.addEventListener('mouseleave', () => {
        cur.classList.remove('grow');
    });
    link.addEventListener('mousemove', () => {
        cur.classList.add('grow');
    });
})


    //   slide-Animation

var tl = gsap.timeline()

gsap.from(".mainhead .navlogo , .mainhead .navtext",{
    y:-100,
    duration:1,
    opacity:0,
    stagger:0.5
})
gsap.from('.videotext h1,.videotext p ,.videotext button',{
    y:200,
    duration:1,
    opacity:0,
    stagger:0.3
})


    //   scrolltrigger

gsap.from(".info .info-img",{
    x:-600,
    duration:2,
    opacity:0,
    scrollTrigger:{
        trigger:".info .info-img",
        scroller:"body",
        start:"top 55%",
        end:"top 30%"
    }
})    

gsap.from(".info .info-text",{
    x:-700,
    duration:2,
    opacity:0,
    scrollTrigger:{
        trigger:".info .info-text",
        scroller:"body",
        start:"top 55%",
        end:"top 30%"
    }
})  

gsap.from(".packagemain .pack-1",{
    y:100,
    duration:2,
    opacity:0,
    scrollTrigger:{
        trigger:".packagemain .pack-1",
        scroller:"body",
        start:"top 95%",
        end:"top 80%"
    }
}) 
gsap.from(".packagemain .pack-2",{
    y:100,
    duration:2,
    opacity:0,
    scrollTrigger:{
        trigger:".packagemain .pack-2",
        scroller:"body",
        start:"top 95%",
        end:"top 80%"
    }
}) 
gsap.from(".packagemain .pack-3",{
    y:100,
    duration:2,
    opacity:0,
    scrollTrigger:{
        trigger:".packagemain .pack-3",
        scroller:"body",
        start:"top 95%",
        end:"top 80%"
    }
}) 

const bar = document.querySelector(".progress-bar")
let temp;
window.addEventListener('scroll', function(){
    // console.log(window.pageXOffset); //deprecated
    // console.log(this.window.scrollY);
    // console.log(this.document.body.offsetHeight)
    // console.log(this.window.innerHeight);
    let width = (this.window.scrollY/(this.document.body.offsetHeight-this.window.innerHeight))*100;
    bar.style.width = width + "%";
});
const nav = document.querySelector('nav');
function navHandler(e) {
    if(temp!=null) {
        temp.style.backgroundColor = 'white';
        temp.style.color = 'black';
    }
    if(e.target!=e.currentTarget){
        e.target.style.backgroundColor = 'black';
        e.target.style.color= 'white';
        temp = e.target;
    }
}

nav.addEventListener('click', navHandler);
const section1 = document.querySelector('#main1');
const section2 = document.querySelector('#main2');
const section3 = document.querySelector('#main3');
let currentSection = section1;
// mouse wheel event
// window.addEventListener('wheel', function(e){
//     if(e.deltaY > 0) {
//         if(currentSection == section1) {
//             window.scrollTo({top: section2.offsetTop, behavior:'smooth'});
//             currentSection = section2;
//         } else {
//             window.scrollTo({top: section3.offsetTop})
//         }
//     } else {

//     }
// })

// scroll - animation 살짝~
window.addEventListener('scroll', function(){
    if(section2.getBoundingClientRect().top === 0){
        if(section2.children);
    };
})

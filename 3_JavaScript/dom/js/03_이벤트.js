// window.addEventListener('DOMContentLoaded', function(){
//     const h1 = document.querySelector('h1');
//     console.log(h1);
// })

// h1 = document.querySelector('h1');
// console.log(h1);

h1.addEventListener('mouseenter', function(){
    h1.style.backgroundColor = "skyblue";
})

const container = document.querySelector('.container');
function clickcontainer(e) {
    if(e.target!=container){
        e.target.style.visibility = 'hidden';
    }
    console.log(e.target);
}
container.addEventListener('click', clickcontainer);
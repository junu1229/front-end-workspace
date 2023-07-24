const bar = document.querySelector(".progress-bar")
window.addEventListener('scroll', function(){
    // console.log(window.pageXOffset); //deprecated
    // console.log(this.window.scrollY);
    console.log(this.document.body.offsetHeight)
    console.log(this.window.innerHeight);
    let width = (this.window.scrollY/(this.document.body.offsetHeight-this.window.innerHeight))*100;
    bar.style.width = width + "%";
});
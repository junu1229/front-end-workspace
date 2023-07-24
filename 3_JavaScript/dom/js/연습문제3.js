const images = document.querySelectorAll('.main-image img');
const click = document.querySelector('.click');
const clicknum = document.querySelector('.click span');
const mainResult = document.querySelector('.main-result');
const restart = document.querySelector('.restart');
let clicknumber = 0;
restart.addEventListener('click', reset);
function reset() {
    click.disabled = false;
    mainResult.style.visibility = 'hidden';
    clicknumber = 0;
    clicknum.innerHTML = '';
}
click.addEventListener('click', ranpic);
function ranpic() {
    for(let i = 0; i<images.length; i++) {

        let temp = Math.floor(Math.random()*3);
        switch (temp) {
            case 0:
                images[i].src = '../../resources/spy1.jpg';
                break;
            case 1:
                images[i].src = "../../resources/spy2.jpg";
                break;
            case 2:
                images[i].src = "../../resources/spy3.jpg";
                break;
        
            default:
                break;
        }
    }
    
    clicknum.innerHTML = ++clicknumber;
    if(images[0].src==images[1].src&&images[0].src==images[2].src){
        click.disabled = true;
        mainResult.style.visibility = 'visible';
    }
}


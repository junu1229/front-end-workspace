function btn1() {
    console.log(document);
    console.log(document.head);
    console.log(document.title);
    console.log(document.body);
}

function btn2() {
    const div = document.getElementById("testId");
    console.log(div);
}

function btn3() {
    const div = document.getElementsByClassName("testClass");
    console.log(div);
    console.log(div[0]);
}

function btn4() {
    const div = document.getElementsByName("testName");
    console.log(div);
}

function btn5() {
    const div = document.getElementsByTagName("div");
    console.log(div);
}

function btn6() {
    let div = document.querySelector("#testId");
    console.log(div);
    div = document.querySelectorAll(".testClass");
    console.log(div);
    div = document.querySelectorAll("div");
    console.log(div);
}

function btn7() {
    const divlist = document.querySelectorAll(".testClass");
    divlist[0].textContent = '<span>안녕하세요</span>';
    divlist[1].innerHTML = '<span>반갑습니다</span>';
}

function btn8() {
    // #testId
    const div = document.querySelector("#testId");
    div.setAttribute("data-test", "테스트");
    console.log(div.getAttribute("data-test"));
    console.log(div.getAttribute("class"));
}

function btn9() {
    const div = document.querySelector("#testId");
    div.style.color = "orange";
    div.style.backgroundColor = "yellow";
}
function btn10() {
    const div = document.querySelector("#testId2");
    div.classList.add("black");
}
function btn11() {
    const div = document.querySelector("#testId2");
    div.classList.remove("black");
}
function btn12() {
    const div = document.querySelector("#testId2");
    const check = div.classList.contains("black");
    console.log(check);
    if(check){
        div.classList.remove("black");
    } else {
        div.classList.add("black");
    }
}
function btn13() {
    const div = document.querySelector("#testId2");
    div.classList.toggle("black");
}
function btn14() {
    const div = document.querySelector("#testId2");
    const p = document.createElement("p");
    p.innerText = "Lorem Ipsum";
    div.appendChild(p);
    const input = document.createElement("input");
    input.value = "Bye~";
    div.appendChild(input);
}
function btn15() {
    const div = document.querySelector("#testId2");
    const p = document.querySelector("p");
    // div.removeChild(p);
    p.parentNode.removeChild(p);
}

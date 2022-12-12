'use strict';

console.log('Hello World')

// Находим кнопку для прослушки клика
const btnClick = document.querySelector('.click-button');

//btnClick.addEventListener("click", () => handleBtnClick());

function handleBtnClick() {
    console.log('I was clicked')
}

//onst handleBtnClick = () => {
//    console.log('I was clicked')
//}


btnClick.addEventListener("click", handleBtnClick);
setTimeout(() => {
    btnClick.removeEventListener("click", handleBtnClick);
}, 5000)

let counter = 0;

const btnPlus = document.querySelector('.btn--plus');
const btnMinus = document.querySelector('.btn--minus');

function plusOne(){
    counter = counter + 1;
    console.log(counter);
}

function minusOne(){
    counter = counter - 1;
    console.log(counter);
}

btnPlus.addEventListener("click", plusOne);
btnMinus.addEventListener("click", minusOne);

const prg = document.getElementById("keyboard-text");

document.addEventListener("keydown", (event) => {
    prg.innerText = prg.innerText + event.key;
});

const article = document.querySelector('.article');
setTimeout(() => {
    article.classList.remove('red');
    article.classList.add('green');
}, 5000)

const cards = document.querySelectorAll('.article-with-number');
cards.forEach(card => card.addEventListener('click', () => {
    if(card.classList.contains('green')){
     card.classList.remove('green')
    } else{
    card.classList.add('green')
    }
}))


const prgStyled = document.querySelector('#prg--styled');
prgStyled.style.color = "green";
prgStyled.style.fontSize = "32px";

function createCard(value) {
    const newDiv = document.createElement("div");
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.border = "1px solid black";
    newDiv.style.backgroundColor = `rgb(128, 128, ${value})`;
    const title = document.querySelector('.cards-title');
    const parent = title.parentNode;
    parent.insertBefore(newDiv, title);
}

let i = 0;
while(i <= 255){
    createCard(i);
    i += 5;
}
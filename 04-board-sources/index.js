let Do = new Audio("./notes/do.mp3");
let re = new Audio("./notes/re.mp3");
let mi = new Audio("./notes/mi.mp3");
let fa = new Audio("./notes/fa.mp3");
let sol = new Audio("./notes/sol.mp3");
let lya = new Audio("./notes/lya.mp3");
let si = new Audio("./notes/si.mp3");
const notes = [Do, re, mi, fa, sol, lya, si];
let sound = false;

const board = document.querySelector('#board');
const SQUARES_NUMBER = 500;
const colors = ['#f6b209', '#09f63c', '#094df6', '#f609c3'];

const switcher = document.querySelector('#switcher');
switcher.addEventListener('change', () => {
    sound = !sound;
})



for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));

    square.addEventListener('mouseleave', () => removeColor(square));

    board.append(square);
}


function setColor(element) {
    let color = getColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
    if (sound) {
        getNote();
    }


}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function getNote() {
    const index = Math.floor(Math.random() * notes.length);
    notes[index].play();
}



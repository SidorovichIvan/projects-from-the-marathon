const startBtn = document.querySelector('#start');

const screens = document.querySelectorAll('.screen');

const timeList = document.querySelector('#time-list');

const timeEL = document.querySelector('#time');

const board = document.querySelector('#board');

const repeatBtn = document.querySelector('#repeat');

const finalyMessage = document.querySelector('#h1Score');

const scoreMEssage = document.querySelector('#score');

repeatBtn.addEventListener('click', () => {
    time = 0;
    score = 0;
    screens[1].classList.remove('up');
    repeatBtn.classList.add('hide');
    finalyMessage.classList.add('hide');
})

startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up');
})

let time = 0;
let score = 0;


timeList.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame()
    }

})

board.addEventListener('click', (event) => {
    if (event.target.classList.contains('circle')) {
        score++;
        event.target.remove();
        createRandomCircle()
    }
})

let timer = {
    t: undefined,
    start: function () {
        this.t = setInterval(decreaseTime, 1000)
    },
    stop: function () {
        clearInterval(this.t);
    }
}

function startGame() {
    timer.start();
    createRandomCircle()
    setTime(time);
}

function decreaseTime() {

    if (time === 0) {
        finishGame();
    } else {
        let current = --time;
        if (current < 10) {
            current = `0${current}`;
        }
        setTime(current);
    }
}

function setTime(value) {
    timeEL.innerHTML = `00:${value}`;
}

function finishGame() {
    timer.stop();

    if (document.querySelector('.circle')) {
        document.querySelector('.circle').remove();
    }

    finalyMessage.classList.remove('hide');
    scoreMEssage.innerHTML = ` ${score}`;
    repeatBtn.classList.remove('hide');

}

function createRandomCircle() {
    const circle = document.createElement('div');

    let size = getRandomNumber(10, 60)

    const {
        width,
        height
    } = board.getBoundingClientRect();

    let x = getRandomNumber(0, width - size);
    let y = getRandomNumber(0, height - size);

    circle.classList.add('circle');

    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;


    board.append(circle);
}


function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
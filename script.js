// Bài 1
let changeValueCounter = (btn) => {
    let counter = document.getElementById('counterNumber');
    let counterVal = Number(counter.value);

    switch (btn.dataset.action) {
        case 'incr':
            counter.value = ++counterVal;
            break;
        case 'deincr':
            counter.value = --counterVal;
            break;
        default:
            break;
    }
};

//============================

// Bài 2

let bombTimeDisplay = document.getElementById('bomb__time');
let countDown;
let time;

let stopCountDown = () => {
    clearInterval(countDown);
};

let startCountDown = (btn) => {
    stopCountDown();
    time = Number(btn.parentElement.children[1].value);
    countDown = setInterval(() => {
        bombTimeDisplay.innerHTML = time;
        if (time < 0) {
            stopCountDown();
            bombTimeDisplay.innerHTML = 'BOOMMMMM !!!!!!!!!!';
        }
        time--;
    }, 1000);
};

//============================

// Bài 3
let quoteText = document.getElementById('quoteText');
let quoteAuthor = document.getElementById('quoteAuthor');
let iconRefresh = document.querySelector('.quote__btn i');
let quote;
let deg = 0;

let randomindexQuote = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

let getQuotes = () => {
    deg += 360;
    iconRefresh.style.transform = 'rotate(' + deg + 'deg)';

    quote = quotes[randomindexQuote(0, quotes.length - 1)];
    quoteText.innerText = quote.quoteText;
    quoteAuthor.innerText = quote.quoteAuthor ? quote.quoteAuthor : 'Unknow';
};

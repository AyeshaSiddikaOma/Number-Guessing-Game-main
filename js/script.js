let random = parseInt(Math.random() * 10 + 1);
console.log(random);

let input = document.querySelector("#input");
let submit = document.querySelector("#submit");
let blank = document.querySelector("#blank");
let prev = document.querySelector("#prev");
let remaining = document.querySelector("#remaining");
let last = document.querySelector("#full");
let p = document.createElement("p");

let prevGuess = [];
let life = 1;
let playGmae = true;

if (playGmae) {
  submit.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(input.value);
    let guess = parseInt(input.value);
    valid(guess);
  });
}

function valid(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess > 10) {
    alert("Please ender a number less than 10");
  } else if (guess <= 0) {
    alert("Please ender a number greater than 0");
  } else {
    prevGuess.push(guess);

    if (life === 11) {
      sms(`Game Over ,random number was ${random}`);
      end();
    } else {
      display(guess);
      check(guess);
    }
  }
}

function check(guess) {
  if (random === guess) {
    sms(`Hey! You Guessed It Right`);
    end()
    newGame()
  } else if (random > guess) {
    sms(`Oho,Your number is too  low `);
  } else if (random < guess) {
    sms(`Oho,Your number is too high`);
  }
}

function display(guess) {
  input.value = "";
  life++;
  prev.innerHTML += ` ${guess};`;
  remaining.innerHTML = `${11 - life}`;
}

function sms(sms) {
  blank.innerHTML = `<p>${sms}</p>`;
  blank.style.cssText = `
  font-size:30px;
  margin:0 auto;
  color:red;
  `
}

function end() {
  input.value = "";
  submit.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;

p.style.cssText = `
  display: block;
  padding: 5px 10px;
  background: linear-gradient(135deg, #a92f5f, #c94678);
  color: white;
  border-radius: 10px;
  text-align: center;
  font-weight: 700;
  letter-spacing: 1px;
  cursor:pointer;
  margin-top:10px;
`;
  last.appendChild(p);
  playGmae = false;
  newGame();
}

function newGame() {
  const nbtn = document.getElementById('newGame');

  p.addEventListener('click', function (e) {
    let random = parseInt(Math.random() * 10 + 1);
    life = 1;
    submit.removeAttribute('disabled');
    prevGuess = [];
     prev.innerHTML = "";
    life = 1;
    input.value = "";
    remaining.innerHTML = `${11 - life}`;
    last.removeChild(p);

    playGmae = true;
  });
}

'use strict';

const score1 = document.querySelector('#score--0');
const score2 = document.querySelector('#score--1');
const cur1 = document.querySelector('#current--0');
const cur2 = document.querySelector('#current--1');
const p1 = document.querySelector('.player--0');
const p2 = document.querySelector('.player--1');
const reset = document.querySelector('.btn--new');
const roll = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');

score1.textContent = 0;
score2.textContent = 0;
dice.classList.add('hidden');

reset.addEventListener('click', function() {
    score1.textContent = 0;
    score2.textContent = 0;
    cur1.textContent = 0;
    cur2.textContent = 0;
});

let currentScore = 0;
let activePlayer = 0;
roll.addEventListener('click', function() {
    const diceno = Math.trunc(Math.random() * 6) + 1;
    console.log(diceno)
    dice.classList.remove('hidden');
    dice.src = `dice-${diceno}.png`;

    if(diceno !== 1){
        currentScore += diceno;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }else{
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        p1.classList.toggle('player--active');
        p2.classList.toggle('player--active');
    }
});

hold.addEventListener('click', function(){
    
});
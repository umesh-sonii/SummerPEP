var secretNo = Math.floor(Math.random()*100)+1;
let attemptsleft = 7;
let min=1;
let max=100;

while(attemptsleft > 0){
    let guess = prompt(`Guess the number (between ${min} and ${max}). Attempts left: ${attemptsleft}`);

    guess = Number(guess);

    if(isNaN(guess) || guess < min || guess > max){
        alert('Enter number in range');
        continue;
    }

    attemptsleft--;

    if( guess === secretNo){
        alert('Congrats!! You won.');
        break;
    }

    else if(guess > secretNo){
        alert('Too high');
        max = guess-1;
    }
    
    else if(guess < secretNo){
        alert('Too Low');
        min = guess+1;
    }

    if(attemptsleft === 0){
        alert('You Lost , Secret number was: ${secretNo}');
    }
}

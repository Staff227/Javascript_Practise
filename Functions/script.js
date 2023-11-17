

let computerMove = '';

function pickComputerMove() {
    let randomNum = Math.random();
    

    if(randomNum >= 0 && randomNum < 1/3){
        computerMove = 'Rock';

    }else if (randomNum > 1/3 && randomNum < 2/3){
        computerMove = 'Paper';
    }else if (randomNum > 2/3 && randomNum < 1){
        computerMove = 'Scissors';
    }
}

function playerMove() {
    let result;
      if(computerMove === 'Rock'){
          result = 'Sorry you are a Looser';
          alert(`You picked Scissors computer picked ${computerMove} ${result}`);
      }else if(computerMove === 'Paper'){
          result = 'Yess!! you WIN';
          alert(`You picked Scissors computer picked ${computerMove} ${result}`);
      }else if(computerMove === 'Scissors'){
          result = 'Its a TIE';
          alert(`You picked Scissors computer picked ${computerMove} ${result}`);
      }
}
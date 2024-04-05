if (score0El >= 100) {
    document.getElementById('crownPlayer1').innerHTML =
      document.getElementById('crownPlayer1').innerHTML + '👑';
  } else if (score1El >= 100){
    document.getElementById('crownPlayer2').innerHTML =
      document.getElementById('crownPlayer2').innerHTML + '👑';
  } else{

  }

  //NEM MŰKÖDIK

  player1ScoreToNumber = document.querySelector('#score--0').innerHTML;
  player2ScoreToNumber = document.getElementById('score--1').innerHTML;


parseInt(player1ScoreToNumber);
parseInt(player2ScoreToNumber);
/*
Name: Terry Lawrence
Date Created: 6/15/2019
Most Recent Revision
*/

//Verifies The Starting Bet
function verify() {
    clearErrors();
  
    var bet = document.getElementById("bet").value;
  
    if (bet == "" || isNaN(bet)) {
        alert("Must Make Starting Bet!");
        document.getElementById("bet").className="error";
        document.getElementById("bet").focus();
        return;
    }
    
    bet = parseFloat(parseFloat(document.getElementById("bet").value).toFixed(2));
  
    if (bet<=0) {
      alert("Must Bet Money To Play!");
      document.getElementById("bet").className="error";
      document.getElementById("bet").focus();
      return;
    }
  
    play(bet);
  
  }
  
  //Plays The Game
  function play(bet) {
    var money = bet;
    var maxMoney = money;
    var rolls = 0;
    var rollAtMax = 0;
  
  
    while (money > 0) {
  
      var diceRoll = rollDice();
  
      if (diceRoll == 7) {
        money = money + 4;
      } else {
        money = money - 1;
      }
  
      rolls++;
  
      if (money > maxMoney) {
        maxMoney = money;
        rollAtMax = rolls;
      }
  
    }
  
    document.getElementById('resultBet').innerText = bet;
    document.getElementById('resultRollsBeforeBroke').innerText = rolls;
    document.getElementById('resultMaxMoney').innerText = maxMoney;
    document.getElementById('resultRollAtMax').innerText = rollAtMax;
    document.getElementById("results").style.display="block";
    document.getElementById("play").innerText="Play Again";
  }
  
  function rollDice() {
    return (roll6sided() + roll6sided());
  }
  
  function roll6sided() {
    var num = Math.floor(Math.random() * 6) + 1;
    return num;
  }
  
  function clearErrors() {
    document.getElementById("bet").className="";
  }
  
  function reset() {
    document.getElementById("results").style.display="none";
    document.getElementById("bet").value = "0.00";
    document.getElementById("play").innerText = "Play";
  }
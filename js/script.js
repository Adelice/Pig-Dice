var player1="";
var player2="";

var throwdice = function () {
  return Math.floor(6*Math.random())+1;
}
function Player(turn) {
    this.roll = 0;
    this.tempscore = 0;
    this.totalscore = 0;
    this.turn = turn;
    this.playerName;
  }
  Player.prototype.rollone = function() {
    if (this.roll === 1) {
    this.tempscore = 0;
    alert("Sorry " + this.playerName + ", you rolled a 1! Your turn is over!")
    // this.changeturn();
    } else {
    this.tempscore += this.roll;
    }
  }
  Player.prototype.hold = function () {
    this.totalscore += this.tempscore;
    this.tempscore = 0;
    // this.changeturn();
    alert(this.playerName + ", your turn is over, pass the mouse!");
  }
  Player.prototype.newGame = function () {
    
    this.roll = 0;
    this.tempscore = 0;
    this.totalscore = 0;
    this.playerName ="";
  }
  
  var clearValues = function(){
    $(".playerAName").val("");
    $(".playerBName").val("");
  }
  $(document).ready(function() {

    $("button#start").click(function(event){
      player1 = new Player(true);
      player2 =  new Player(false);
      $(".player-console").show();
      $(".container").hide();
  
      var playerAName = $(".playerAName").val();
      $("#playerAName").text(playerAName);
  
      var playerBName = $(".playerBName").val();
      $("#playerBName").text(playerBName);
  
      player1.playerName=playerAName;
      player2.playerName=playerBName;
    });
    $("button#new-game").click(function(event){
      $(".player-console").hide();
      clearValues();
      player1.newGame();
      player2.newGame();
      $("#round-total-1").empty();
      $("#total-score-1").empty();
      $("#die-roll-1").empty();
      $("#round-total-2").empty();
      $("#total-score-2").empty();
      $("#die-roll-2").empty();
  
      $(".container").show();
    });
    $("button#player1-roll").click(function(event){
      player1.roll = throwdice();
      $("#die-roll-1").text(player1.roll);
      player1.rollone();
      $("#round-total-1").text(player1.tempscore);
    });
    $("button#player2-roll").click(function(event){
      player2.roll = throwdice();
      $("#die-roll-2").text(player2.roll);
      player2.rollone();
      $("#round-total-2").text(player2.tempscore);
    });
});
   

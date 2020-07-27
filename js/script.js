var numeriPc = [];
var giocatore = [];
var match = [];

while ( numeriPc.length < 5 ) {
 var numero = RandomNum(1,100);
 var presente = numeriPc.includes(numero);
 if (presente == false) {
   numeriPc.push(numero);
 }
};

console.log(numeriPc);
alert('Memorizza i numeri ' + numeriPc);
var clock = setInterval(conteggio, 1000);
var i = 30;
function conteggio(){
    console.log(i);
    if (i == 0) {
        clearInterval(clock);
        game();
        console.log('Hai indovinato ' + match.length + ' numeri! -> ' + match);
        console.log(match);
    }
    i--;
}

// FUNZIONI
function RandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min )
}

function game() {
  while ( giocatore.length < 5) {
    var numeriGiocatore = parseInt(prompt('Inserisci un numero'));
    var presente = giocatore.includes(numeriGiocatore);
    var simon = numeriPc.includes(numeriGiocatore);
    if (presente == false) {
      giocatore.push(numeriGiocatore);
    }
    if (simon == true) {
      match.push(numeriGiocatore);
    }
  }
}

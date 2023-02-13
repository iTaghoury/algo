/** =========== FONCTIONS =========== **/

function recFact(n) {
  if(n < 0) return ("Ahhh les nombres négatifs... toujours là à limit test les algo pour nous les briser...");
  if(n <= 1) {
    return 1;
  } else {
    return n*recFact(n-1);
  }
}


function fact(n) {
  if(n < 0) return ("Ahhh les nombres négatifs... toujours là à limit test les algo pour nous les briser...");
  if(n < 2) return 1;
  let result = 1;
  for(let i = 1; i <= n; i++) {
    result*=i
  }
  return result;
}

function add(a, b) {
  return a + b;
}

function subst(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

let choix = 0;

while (choix !== 5) {
  choix = parseInt(prompt("Que voulez vous-faire ? \n1) Addition \n2) Soustraction \n3) Multiplication \n4) Factorielle \n5) Quitter"));
  switch(choix) {
    case 1:
      let a = +prompt("Premier nombre à additionner : ");
      //let a = parseInt(prompt("Premier nombre à additionner : "));
      //let b = parseInt(prompt("Second nombre à additionner : "));
      let b = +prompt("Second nombre à additionner : ");
      console.log(add(a, b));
      break;
    case 2:
      let c = parseInt(prompt("Premier nombre à soustraire : "));
      let d = parseInt(prompt("Second nombre à soustraire : "));
      console.log(subst(c, d));
      break;
    case 3:
      let e = parseInt(prompt("Premier nombre à multiplier : "));
      let f = parseInt(prompt("Second nombre à multiplier : "));
      console.log(mult(e, f));
      break;
    case 4:
      let g = parseInt(prompt("Nombre à factorielliser (Je sais, ça veut rien dire, m'en fous) : "));
      console.log(recFactTern(g));
    default:
      break;
  }
} 


function recFactTern(n) {
  return n < 0 ? "Nombre négatif caca" : n <=1 ? 1 : n*recFactTern(n-1);
}

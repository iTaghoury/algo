
/** =========== CONDITIONS ET NOMBRES PREMIERS =========== **/

let n = parseInt(prompt("#BalanceTonChiffre"));

if(n <= 1) {
  console.log(`${n} n'est pas premier`);
} else if(n == 2 || n == 3) {
  console.log("premier");
} else {
    if (n % 2 === 0 || n % 3 === 0) {
      console.log(`${n} n'est pas premier`);
    } else if(n % 6 === 1 || n % 6 === 5) { // Tout nombre premier > 3 est de la forme 6*k (+-) 1
      if(n % 5 === 0 && n != 5 || 
         n % 7 === 0 && n != 7 || 
         n % 11 === 0 && n != 11 || 
         n % 13 === 0 && n != 13) {
        console.log(`${n} n'est pas premier`);
      } else {
        console.log(`${n} est premier`);
      }
    } else {
      console.log(`${n} n'est pas premier`);
    }
}
if(n < 0) {
  console.log("Pourquoi tu m'donnes un nombre négatif ????");
} else if (n >= 10) {
  console.log("Utilise plutôt un algo qui connait les boucles......");
} else {
  switch(n) {
    case 2:
      console.log(`${n} est premier`);
      break;
    case 3:
      console.log(`${n} est premier`);
      break;
    case 5:
      console.log(`${n} est premier`);
      break;
    case 7:
      console.log(`${n} est premier`);
      break;
    default:
      console.log(`${n} n'est pas premier`);
  }
}

let flag = true;

if(n <= 1) {
  flag = false;
} else if (n != 2 && n != 3 && (n % 2 === 0 || n % 3 === 0)) { // On élimine les nombres pairs et les multiples de 3
  flag = false;
} else {
  for(let i = 5; i <= Math.floor(Math.sqrt(n)); i+=6) { // On n'itère que jusqu'à la racine du nombre (arrondie à l'entier inférieur)
    if(n % i === 0 || n % (i+2) === 0) { // On ne vérifie que les nombres de la forme 6*k ± 1
      flag = false;
      break;
    }
  }
}


if (flag) {
  console.log(`${n} est premier`);
} else {
  console.log(`${n} n'est pas premier`);
}
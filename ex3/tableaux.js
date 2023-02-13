function creerTab(m) {
  let n = 0
  while (n <= 0) {
    n = parseInt(prompt(`Combien de notes voulez-vous pour la matière ${m} ? (Entrez un nombre positif non nul)`));
  }

  let notes = [];
  for(let i = 0; i < n; i++) {
    let note = parseInt(prompt(`Entrez la note numéro ${i+1} pour la matière ${m}`));
    notes.push(note);
  }
  return notes;
}

function moyenne(tab) {
  let moy = 0
  for(let i = 0; i < tab.length; i++) {
    moy+=tab[i];
  }
  moy /= tab.length;
  return moy;
}

function max(tab) {
  let max = 0;
  for(let i = 0; i < tab.length; i++) {
    if(max < tab[i]) max = tab[i];
  }
  return max;
}

function min(tab) {
  let min = tab[0];
  for(let i = 0; i < tab.length; i++) {
    if(min > tab[i]) min = tab[i];
  }
  return min;
}

function creerMatieres() {
  let n = 0
  while (n <= 0) {
    n = parseInt(prompt('Combien de matières voulez-vous ? (Entrez un nombre positif non nul)'));
  }

  let matieres = [];
  for(let i = 0; i < n; i++) {
    matieres.push(creerTab(i+1));
  }
  return matieres;
}

function infoMatieres(mat) {
  for(let i = 0; i < mat.length; i++) {
    console.log(`Moyenne de la matière ${i+1} : ${moyenne(mat[i])} \n Note max : ${max(mat[i])} \n Note min : ${min(mat[i])}`)
  }
}

let matTab = creerMatieres();

console.table(matTab);

infoMatieres(matTab);

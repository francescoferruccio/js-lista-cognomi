// Creare una copia dell'array originale senza usare metodi già "pronti" di JS
var lista1, lista2 = [];

// creiamo la lista iniziale di cognomi
lista1 = ["Longo", "Bruno", "Privitera", "Ventimiglia", "Alemanno", "Rossi"];

for (var i = 0; i < lista1.length; i++) {
  lista2.push(lista1[i]);
}

console.log("Lista iniziale: " + lista1);
console.log("Lista copiata: " + lista2);

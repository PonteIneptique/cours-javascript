// Initialisé comm un Array
arr = [3, 5, 7];
// Ajouter une propriété Object
arr.toto = "coucou";

for (i in arr) {
  console.log(i); // affiche 0, 1, 2, "toto" dans la console
}

// Toto ne fait pas parti
for (i of arr) {
  console.log(i); 
  // affiche 3, 5, 7 dans la console 
  // puisque toto ne fait pas  partie des propriétés array
}
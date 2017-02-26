/**
 * Divise a par b et conserve le reste 
 * @param {Number} a - Dividende
 * @param {Number} b - Quotient
 * @return {Array} Liste comprenant le résultat de la division et son reste
 */
 function diviser(a,b) { 
   return [Math.floor(a/b), a%b];
 }
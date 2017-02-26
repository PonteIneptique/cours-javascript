var nom_de_function = function(argument1, argument2) {

    // faire ce que l'on veut ici
    variable = 1;
    //potentiellement renvoyer une valeur :
    return variable;
}


// Portée
// Autre moyen de créer une fonction
function test() {
    a = 123;
    var b = 456;
    if ( a == 123 ) {
        var c = 954;
    }
}

test();

if (typeof a != "undefined") { console.log("a = " + a +";"); }
if (typeof b != "undefined") { console.log("b = " + b +";"); }
if (typeof c != "undefined") { console.log("c = " + c +";"); }
// Situation avec Erreur
try {
    jenexistepas("ici");
} catch (error) { 
    console.log(error); 
} finally { 
    console.log("still running !");
}

// Situation sans erreur
try {
    console.log("Hey");
} catch (error) { 
    console.log(error); 
} finally { 
    console.log("still running !");
}

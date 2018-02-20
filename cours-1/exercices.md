Exercices du cours 1
===

Les exercices sont inspirés en partie de http://odyssey.sdlm.be/

On conseillera l'utilisation de http://labs.codecademy.com/ pour écrire le code.

On utilisera `alert(message)` pour afficher quelque chose à l'utilisateur

## Exercice 1

Ecrivez une condition pour savoir si le contenu de cette variable est supérieur à 10. Si tel est le cas, affichez une fenêtre alert() pour en informer l'utilisateur.

```js
var monNombre = 15;
```

## Exercice 2

Changez le code pour qu'il vérifie que `monNombre` est plus grand que 10, plus petit que 10 ou égal à 10 et prévient en `alert()`.

```js
var monNombre = 15;
```

## Exercice 3

Compléter le code suivant afin de réaliser un code html comprenant des `<li>` pour chacun des vers, un `article` encapsulant le texte et un `header` et `footer` pour compléter le tout avec les métadonnées.

```javascript
var texte = {
    "meta":"line",
    "author":"aeschylus",
    "credit":"OpenGreekAndLatin",
    "urn":"urn:cts:greekLit:tlg0085.tlg007.opp-grc3-simple",
    "text": [
        "Πρῶτον μὲν εὐχῇ τῇδε πρεσβεύω θεῶν",
        "τὴν πρωτόμαντιν Γαῖαν: ἐκ δὲ τῆς Θέμιν,",
        "ἣ δὴ τὸ μητρὸς δευτέρα τόδ ̓ ἕζετο",
        "μαντεῖον, ὡς λόγος τις: ἐν δὲ τῷ τρίτῳ",
    ]
};
```

## Exercice 4

Ecrire une fonction dans fonction js se nommant “trouverlemot” prenant un paramètre mot et un dictionnaire de textes (cf. data.js).
- Utiliser console.log pour afficher l’identifiant que la phrase possède.
- Retourner une liste des valeurs

Vous aurez besoin :
- De boucles
- De trouver sur internet la documentation pour trouver une chaine dans une autre chaîne
- Trouver comment ajouter un élément a une liste

Essayer avec les mots : Catiline, judge, Sulla
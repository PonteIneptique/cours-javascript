<style>
.slide {
    justify-content: initial!important;
    margin-top:10px!important;
}
.slide p, .slide ul { font-size:0.9em; }
.slide h2, .slide h1 { padding-bottom:0.1em; }
.slide pre { font-size:0.8em; }
.slide table { font-size:0.7em; }</style>
# Introduction au Javascript

## Du back-end au front-end, une introduction au JS via Python

Thibault Clérice,
École Nationale des Chartes
https://github.com/ponteineptique/cours-javascript


------

# Objectifs du cours

- Cours 1
  - Comprendre ce qu’est le javascript
  - Le javascript dans le HTML
  - Comment déboguer du javascript
  - Syntaxe du javascript (par rapport à python)
  - Le DOM
- Cours 2
  - L'usage de bibliothèques
  - Le concept d'Ajax
  - Le concept de fonctions anonyme et de *callback*
  - Utilisation d'une librairie
  	- Faire un pop-up à partir de données Ajax
- Cours 3 et suivants
  - Faire une carte avec Leaflet
  - Ajout de champs en HTML
---

# Bibliographie

- Php, MySQL et Javascript, Nixon, O’Reilly
- JavaScript & JQuery, Jon Duckett, Wiley & Sons
- Eloquent Javascript, Haverbeke, O’Reilly (3Eme édition : http://eloquentjavascript.net/3rd_edition/ )

---

# Bibliographie (2)

- Cours
  - http://fr.eloquentjavascript.net
  - http://www.gchagnon.fr/cours/dhtml/
- Outils
	- https://jsfiddle.net/
- Veille
	- https://reddit.com/r/javascript
	- http://stackoverflow.com
---

# Avertissement

Ce cours n'a pas été écrit en utilisant la syntaxe nouvelle de ES 6 et ES 7, qui sont les dernières versions de javascript. Il est possible que les manuels les plus à jour utilisent cette nouvelle syntaxe, très proche de celle utilisée ici.

---

# Qu'est-ce que javascript

---

# Courte histoire du javascript

---

# Où se situe le javascript dans le Web ?

---

# Le javascript dans du HTML : en insertion directe

```html
<html>
  <head>
    <script type=”text/javascript”>
      // Le javascript ici
    </script>
  </head>
  <body>
    <script type=”text/javascript”>
      // Le javascript ici
    </script>
  </body>
</html>
```

---

# Le javascript dans du HTML : en insertion externe

```html
<html>
  <head>
    <script type=”text/javascript” 
      src=”./chemin/vers/javascript.js”></script>
  </head>
  <body>
    <script type=”text/javascript” 
      src=”./chemin/vers/javascript.js”></script>
  </body>
</html>
```

---

# Déboguer du javascript

- Firefox
	- Outils > Web Developer > Debugger 
	- Ctrl + Maj + S // Pomme + Maj + S
- Chrome
	- Ctrl + Maj + I // Pomme + Maj + I

---

# Développer du javascript

- IDE : WebStorm (PyCharm de Javascript)
- Éditeur de texte avancé:
  - Sublime
  - Atom
  - Bracket

---

# Syntaxe du javascript (1)

## Général

1. Une ligne se finit par un `;` quand une instruction est finie.
2. Les variables se définissent comme en python :
```js
mon_nombre = 456;
ma_chaine = "Hello !";
```
4. Il est de bonne pratique de précéder la variable par `var` quand on la crée.
3. On commente avec `//` sur une seule ligne ou avec `/*` et `*/` sur plusieurs :
```js
var mon_nombre = 456;  // N'est-ce pas magnifique ?
/* Je peux écrire
un commentaire sur plusieurs lignes
*/
var ma_chaine = "789";
```

---

# Syntaxe du javascript (2)

## Blocs  conditionnels

1. Les blocs `if-elif-else` s'écrivent avec des accolades `{}`. 
2. On entoure les conditions avec des parenthèses `(variable == True)`
3. `and` pour que deux conditions soient valides s'écrit `&&`
4. `or` pour qu'une condition soit valide sur les deux s'écrit `||`

```js
ma_variable = 123;
if (ma_variable == 123) {
	// Que faire ?
} else if (ma_variable == "123") {
	// Que faire ?
} else {
	// Que faire ?
}
```
---

# Syntaxe du javascript (3)

## Égalités

Les égalités s'expriment de la même manière qu'en Python. On fera attention cependant aux variantes `===` et `!==` qui signifient strictement égales ou inégales. On les préfèrera à `==` et `!=`. *Cf.* https://dorey.github.io/JavaScript-Equality-Table/

| Opérateur                   | Exemples qui renvoient true   |
|-----------------------------|-------------------------------|
| Égalité (==)                | 3 == var1 "3" == var13 == '3' |
| Inégalité (!=)              | var1 != 4var2 != "3"          |
| Égalité stricte (===)       | 3 === var1                    |
| Inégalité stricte (!==)     | var1 !== "3"3 !== '3'         |
| Supériorité stricte (>)     | var2 > var1"12" > 2           |
| Supériorité ou égalité (>=) | var2 >= var1var1 >= 3         |
| Infériorité stricte (<)     | var1 < var2"2" < "12"         |
| Infériorité ou égalité (<=) | var1 <= var2var2 <= 5         |
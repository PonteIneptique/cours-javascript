<link rel="stylesheet" href="../styles.css" data-marp-path-resolver="href" />

# Introduction au javascript

## Javascript dans le navigateur

Thibault Clérice,
École Nationale des Chartes
https://github.com/ponteineptique/cours-javascript

---

# DOM

- Pour *Document Object Model*
- Pense la page web comme un document fait de noeuds 

![https://en.wikipedia.org/wiki/Document_Object_Model](DOM.png)

- Standardisé par le W3C afin de favoriser son exploitation 

---

# Le DOM en javascript

## Sélectionner

La sélection d'élément du DOM en javascript utilise les mêmes sélecteurs que CSS

- `document.getElementById('test-table')` sélectionnera `#test-table`
- `document.getElementsByTagName("span")` sélectionnera les `span`
- `document.getElementsByClassName("classes")` sélectionnera les `.classes`
	- On peut faire des sélections encore plus fines :  `document.getElementsByClassName("classes secondeclasses")` sélectionnera `.classes.secondeclasses`

- `.getElementById()` ne renvoie qu'un résultat contrairement au reste (car un ID doit être unique). On peut continuer à construire notre requête sur cet élément :
	- `document.getElementById('main').getElementsByClassName('test')` sélectionnera les éléments `#main .test`
- On peut aussi utiliser `document.querySelector('#foo > div.bar')` qui prend comme l'exemple l'indique un sélecteur CSS

---

# Le DOM en Javascript

## Modifier

- On peut changer les CSS via `monElement.style.nomDePropriété = valeur;` 
```js
var div = document.getElementById('#ma_div');
div.style.backgroundColor = "red";
```
- On peut changer le contenu html via `innerHTML`
```js
var div = document.getElementById('#ma_div');
div.innerHTML = `<a href="#">
Ajouter un lien
</a>`; // On utilise ` pour faire des chaînes multilignes;
```
- On peut changer le contenu textuel via `.innerText`:
```js
div.innerText = "Bonjour le monde !";
```
- On peut utiliser ces propriétés pour récupérer les valeurs aussi
- 
---

# Exercice 1

- Changer le texte "Titre 2" en `"Un Joli Titre"`
- Mettre l'article 2 avec une marge de `150px`
- Remplacer l'intégralité du HTML avec un article 3
```html
<html>
 <body>
   <article id="article_1">
     <header class="sub-info">Titre</header>
     <section>Lorem Ipsum</section>
     <footer class="sub-info">Auteur</footer>
   </article>
   <article id="article_2">
     <header class="sub-info">Titre 2</header>
     <section>Lorem Ipsum 2</section>
     <footer class="sub-info">Auteur 2</footer>
   </article>
   <script type="text/javascript">
   // Votre code ici
   </script>
 </body>
</html>
```
---

# jQuery
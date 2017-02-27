jQuery vs native JS
===================

Issu de https://gist.github.com/joyrexus/5322252

## Selecting Elements

```javascript
var divs = $("div");

var divs = document.querySelectorAll("div");


var parent = $("#about").parent();

var parent = document.getElementById("about").parentNode;


var nextElement = $("#wrap").next();

var nextElement = document.getElementById("wrap").nextSibling;
```

## Setting Attributes

```javascript
$("img").filter(":first").attr("alt", "My image");

document.querySelector("img").setAttribute("alt", "My image");
```

## Creating Elements

```javascript
var newDiv = $("<div/>");

var newDiv = document.createElement("div");

$("body").append($("<p/>"));

document.body.appendChild(document.createElement("p"));
```

## Cloning Elements

```javascript
var clonedElement = $("#about").clone();

var clonedElement = document.getElementById("about").cloneNode(true);
```

## Removing Elements

```javascript
$("#wrap").empty();

var wrap = document.getElementById("wrap");
while(wrap.firstChild) wrap.removeChild(wrap.firstChild);
```

## Testing for child nodes

```javascript
if($("#wrap").is(":empty"))

if(!document.getElementById("wrap").hasChildNodes())
```

## Adding Classes

```javascript
newDiv.addClass("foo");

newDiv.classList.add("foo");
```

## Toggling Classes

```javascript
newDiv.toggleClass("foo");

newDiv.classList.toggle("foo");
```

## Adding Events

```javascript
$("a").click(function() {
  // code
})

[].forEach.call(document.querySelectorAll("a"), function(el) {
  el.addEventListener("click", function() {
    // code
  });
});

$(document).ready(function() {
  // code
});

document.addEventListener("DOMContentLoaded", function() {
  // code
});
```
"user strict";

// j'écoute l'évènement "click" de la première touche de ma télécommande
document.querySelector("main > ul > li:nth-of-type(1)").addEventListener("click", (event) => {
  let bruit = new Audio("vague.mp3"); // je créé un objet audio appelé "bruit"
  bruit.play(); // je joue ce bruit
});

// même chose avec les autres touches de ma télécommande

document.querySelector("main > ul > li:nth-of-type(2)").addEventListener("click", (event) => {
  let bruit = new Audio("carillon.mp3");
  bruit.play();
});

document.querySelector("main > ul > li:nth-of-type(3)").addEventListener("click", (event) => {
  let bruit = new Audio("om.mp3");
  bruit.play();
});

document.querySelector("main > ul > li:nth-of-type(4)").addEventListener("click", (event) => {
  let bruit = new Audio("japan.mp3");
  bruit.play();
});


document.querySelector("main > ul > li:nth-of-type(5)").addEventListener("click", (event) => {
    let bruit = new Audio("india.mp3");
    bruit.play();
  });

document.querySelector("main > ul > li:nth-of-type(6)").addEventListener("click", (event) => {
    let bruit = new Audio("rain.mp3");
    bruit.play();
  });
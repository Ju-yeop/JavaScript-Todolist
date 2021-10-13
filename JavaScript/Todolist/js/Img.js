const images = ["forest.jpg", "mountain.jpg"];

const bgimg = document.createElement("img");

bgimg.src = `../img/${images[Math.floor(Math.random()*images.length)]}`;
bgimg.className = "background";

document.body.appendChild(bgimg);

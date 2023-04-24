//import {QRCOdeGenerator} from 'qrgen.js'

// import qrcode from 'qrcode';

//QRCOdeGenerator('500', 'teste.png');

var canvas = document.querySelector('canvas');

canvas.width = 564;//window.innerWidth;
canvas.height = 564;//window.innerHeight;

var c = canvas.getContext("2d");


const numberImages = 6;
let currentImage = 0;

setInterval(() => {
    const img = new Image();
    img.src = `./code_images/qrcode${currentImage}.png`;
    img.onload = () => {
        c.drawImage(img, 0, 0);
    }
    currentImage = (currentImage+1) % numberImages;
}, 500);


console.log(canvas);


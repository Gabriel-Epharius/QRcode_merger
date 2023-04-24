

var canvas = document.querySelector('canvas');

canvas.width = 516;//window.innerWidth;
canvas.height = 516;//window.innerHeight;

var c = canvas.getContext("2d");


// c.fillRect(50, 50, 100, 100);

// const img = new Image();

// img.src = 'qrcode.png';
// img.onload = () => {
//     c.drawImage(img, 0, 0);
// }

const images = ['qrcode1.png', 'qrcode2.png'];
let currentImage = 0;



setInterval(() => {
    const img = new Image();
    img.src = images[currentImage];
    img.onload = () => {
        c.drawImage(img, 0, 0);
    }
    currentImage = (currentImage + 1) % images.length;

}, 500);




console.log(canvas);


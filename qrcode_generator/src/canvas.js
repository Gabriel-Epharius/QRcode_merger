var canvas = document.querySelector('canvas');
var ctx = canvas.getContext("2d");

const pathFiles = "./code_images/";
const imageExtension = ".png";

const heightQRCode = 516;
const widthQRCode = 516;

const heightProgressBar = 20;
const widthProgressBar = widthQRCode;
const verticalMargingBar = 20;
const horizontalMargingBar = 20;

canvas.width = widthProgressBar;
canvas.height = heightQRCode + verticalMargingBar*2 + heightProgressBar;

ctx.fillStyle = '#00ff01';
ctx.strokeStyle = '#0';
ctx.globalAlpha = 1;
ctx.lineWidth = 5;

const numberImages = 6;
let currentImage = 0;
ctx.strokeRect(horizontalMargingBar, heightQRCode + verticalMargingBar, 
    (widthProgressBar-horizontalMargingBar-horizontalMargingBar), heightProgressBar);

setInterval(() => {

    if (currentImage ==  0){
        ctx.clearRect(horizontalMargingBar, heightQRCode + verticalMargingBar, 
            (widthProgressBar-horizontalMargingBar-horizontalMargingBar), heightProgressBar);
    }

    const img = new Image();
    img.src = `${pathFiles}qrcode${currentImage}${imageExtension}`;
    img.onload = () => {
        ctx.drawImage(img, 0, 0);
    }
    ctx.fillRect(horizontalMargingBar, heightQRCode + verticalMargingBar, 
        (currentImage+1)*(widthProgressBar-horizontalMargingBar-horizontalMargingBar)/numberImages, heightProgressBar);

    currentImage = (currentImage+1) % numberImages;
}, 500);



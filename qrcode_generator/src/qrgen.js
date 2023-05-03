const qrcode = require('qrcode');
const fs = require('fs');

const generateQRCode = async (text, outputFilePath) => {
  try {
    // Gerando o QR code
    const qrCodeImage = await qrcode.toBuffer(text);

    // Salvando a imagem do QR code
    fs.writeFileSync(outputFilePath, qrCodeImage);
  } catch (error) {
    console.error(error);
  }
};

const drawQRCode =async (text, canvas) => {     
    try {
        const qrCodeDataUrl = await qrcode.toDataURL(text);
        const qrCodeImage = new Image();
        qrCodeImage.src = qrCodeDataUrl;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(qrCodeImage, 0, 0, canvas.width, canvas.height);
    } catch (error) {
        console.error(error)
    }
};

function splitCode(str){
  const len = str.length;
  const partSize = Math.floor(len / 6);
  let parts = [];

  for (let i = 0; i < len; i += partSize) {
    let part = str.substring(i, i + partSize);
    parts.push(part);
  }
  return parts;
}

function parseCode(code){
  parts = splitCode(code);
  for (let i = 0; i < parts.length; i++) {
    parts[i] = i + parts[i];
  }
  return parts
}


const generateSequence = (code) => {
  parts = parseCode(code);
  for (let i=0; i < parts.length; i++){
    generateQRCode(parts[i], `./src/code_images/qrcode${i}.png`)
  }
}

module.exports = generateSequence;
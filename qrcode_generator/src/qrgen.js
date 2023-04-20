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

module.exports = generateQRCode;
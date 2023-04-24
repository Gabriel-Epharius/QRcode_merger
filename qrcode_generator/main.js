const {app, BrowserWindow} = require('electron')
const generateSequence = require('./src/qrgen.js')
const generateQRCode = require('./src/qrgen.js')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })
    win.loadFile('src/main.html')
}

function generateRandomCode(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

app.whenReady().then(() => {

    // generateQRCode(generateRandomCode(1000), 'src/qrcode2.png');
    generateSequence(generateRandomCode(6000));

    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length == 0){
            createWindow()
        }
    })
})



app.on('window-all-closed', () => {
    if (process.platform !== 'darwin'){
        app.quit()
    }
})

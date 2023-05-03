const {app, BrowserWindow} = require('electron')
const generateSequence = require('./src/qrgen.js')
const generateQRCode = require('./src/qrgen.js')

const createWindow = () => {
    const multiplier = 1.2;
    const win = new BrowserWindow({
        width: 800*multiplier,
        height: 600*multiplier
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

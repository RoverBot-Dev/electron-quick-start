
const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      devTools: false,
      icon: __dirname + '/ked.ico'
    }
  })


  mainWindow.loadURL("https://semekek.glitch.me/index.html");

return mainWindow;

}


app.whenReady().then(() => {
  const mW = createWindow();
  mW.maximize();


  app.on('activate', function () {

    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

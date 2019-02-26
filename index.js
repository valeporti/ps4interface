const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, Menu } = electron;

let mainWindow;

app.on('ready', function() {
  // create new window
  mainWindow = new BrowserWindow({});
  // Load html into window
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'main.html'),
    protocol: 'file',
    slashes: true,
  }))

  // Build menu from template
  //const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  // Insert Menu
  //Menu.setApplicationMenu(mainMenu);
})

// Create menu template
const mainMenuTemplate = [
  { 
    label: 'File',
    submenu: [
      {
        label: 'Quit',
        accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click() {
          app.quit();
        }
      }
    ]
  }
]
import { app, BrowserWindow } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix __dirname for ES Modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 600,
    webPreferences: {
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: false,
    },
    icon: path.join(__dirname, 'public/cervify-logo.png'), // Adjust the path to your logo
  });

  mainWindow.loadURL(
    process.env.ELECTRON_START_URL || `file://${path.join(__dirname, 'dist/index.html')}`
  );

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    mainWindow = new BrowserWindow({
      width: 900,
      height: 600,
      webPreferences: {
        contextIsolation: true,
        enableRemoteModule: false,
        nodeIntegration: false,
      },
      icon: path.join(__dirname, 'public/cervify-logo.png'),
    });

    mainWindow.loadURL(
      process.env.ELECTRON_START_URL || `file://${path.join(__dirname, 'dist/index.html')}`
    );

    mainWindow.on('closed', () => {
      mainWindow = null;
    });
  }
});

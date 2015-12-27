'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let server = cb => cb();
let mainWindow = null;
let url = `file://${__dirname}/dist/index.html`;

if (process.env.NODE_ENV === 'development') {
  server = require('./dev-server');
  url = 'http://127.0.0.1:3000';
}

electron.crashReporter.start();

const WINDOW_CONFIG = {
  width: 1000,
  height: 600,
  minWidth: 1000,
  minHeight: 600,
  show: false,
  x: undefined,
  y: undefined,
};

server(() => {
  app.on('window-all-closed', app.quit);
  app.on('ready', () => {
    mainWindow = new BrowserWindow(WINDOW_CONFIG);
    mainWindow.loadURL(url);
    mainWindow.webContents.on('did-finish-load', () => {
      mainWindow.show();
      mainWindow.focus();
    });
    mainWindow.on('closed', () => mainWindow = null);
  });
});

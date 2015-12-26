'use strict';

const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const PRODUCTION = process.env.NODE_ENV === 'production';

let server = cb => cb();
let mainWindow = null;
let url = `file://${__dirname}/dist/index.html`;

electron.crashReporter.start();

if (!PRODUCTION) {
  server = require('./dev-server');
  url = 'http://127.0.0.1:3000';
}

server(() => {
  app.on('window-all-closed', app.quit);
  app.on('ready', () => {
    mainWindow = new BrowserWindow({ width: 800, height: 600 });
    mainWindow.loadURL(url);
    mainWindow.on('closed', () => mainWindow = null);
  });
});

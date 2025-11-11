const { app, BrowserWindow, shell, Menu } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    //autoHideMenuBar: true, // Oculta la barra de menú
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      nativeWindowOpen: true, // <- IMPORTANTE para MSAL popup
    },
  });

  // Crear un menú mínimo
  const template = [
    {
      label: 'App',
      submenu: [
        { role: 'quit', label: 'Salir' }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);


  let indexPath = "";

  if (app.isPackaged) {
    indexPath = path.join(__dirname, "../build/index.html");
  } else {
    indexPath = path.join(__dirname, "../build/index.html");
  }

  win.loadFile(indexPath);
  
  // Aquí intercepta los intentos de abrir nuevas ventanas para abrirlas en el navegador externo:
  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "allow" };
  });

  //win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
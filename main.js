const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow, Menu } = electron;

let mainWindow;

app.on('ready', () => {
    console.log(process.platform);

    console.log("it works");

    mainWindow = new BrowserWindow({});

    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, "main.html"),
            protocol: "file",
            slashes: true
        })
    );


    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
});

const mainMenuTemplate = [{
    label: "File",
    submenu: [
        {
            label: "Add New Todo"
        },
        {
            label: "Delete All"
        },
        {
            label: "Exit",
            accelerator: process.platform == "darwin" ? "Command+Q" : "Ctrl+Q",
            role: "quit"
        }
    ]
}
]

if (process.platform == "darwin") {
    mainMenuTemplate.unshift({
        label: app.getName(),
        role: "TODO"
    })
}

if (process.env.NODE_ENV !== "production") {
    mainMenuTemplate.push({
        label: "Dev Tools",
        submenu: [
            {
                label: "Open DevTools",
                click(item, focusedwindow) {
                    focusedwindow.toggleDevTools();
                }
            },
            {
                label: "Refresh",
                role: "reload"
            }
        ]
    })
}
const electron = require("electron");
const url = require("url");
const path = require("path");

const {app} = electron;

let mainWindows;

app.on('ready', () => {
    console.log("it works");
})
const { app,BrowserWindow ,ipcMain } = require("electron")
const path = require("path")
const fs = require("fs")


const writeFile = (_,data) => {
    console.log('执行函数')
    fs.writeFileSync(path.resolve(__dirname,'./electron.log'),data)
    console.log(`写入成功：${data}`)
}
const readFile = () => {
   return fs.readFileSync(path.resolve(__dirname,'./electron.log'),'utf8')
}
const createWindow = () => {
    const win = new BrowserWindow({
        width: 1800,
        height: 1600,
        autoHideMenuBar:true,
        webPreferences:{
            preload:path.resolve(__dirname,'./preload.js')
        }
    })
    win.loadFile('./pages/index.html')
}
app.on('ready',() => {
    console.log('窗口准备就绪')
    createWindow()
    app.on('activate',() => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})
ipcMain.on('file-save',writeFile)
ipcMain.handle('file-read',readFile)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

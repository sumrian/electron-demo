const { contextBridge,ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('myAPI',{
    version: process.version,
    saveFile:(data) => {
        console.log('调用桥梁')
        ipcRenderer.send('file-save',data)
    },
    readFile:() => {
       return ipcRenderer.invoke('file-read')
    }
})

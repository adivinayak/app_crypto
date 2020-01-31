const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow
const axios=require('axios')
const ipc = electron.ipcRenderer



const notifyBtn = document.getElementById('notifyBtn')
const price=document.querySelector('h1')
var targetPrice = document.getElementById('targetPrice')

function getBTC(){
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD')
    .then(res=>{
        const cryptos = res.data.BTC.USD
        price.innerHTML = '$'+cryptos.toLocaleString('en')

    }),setTimeout(30000)
}
getBTC()

notifyBtn.addEventListener('click', function(event) {
    const modalPath = path.join('file://', __dirname, 'add.html')
    let win = new BrowserWindow({ frame: false, width: 400, height: 200,webPreferences: {
        nodeIntegration: true}})
    win.on('close', function() { win = null })
    win.loadURL(modalPath)
    win.show()
  console.log('hegrhe')
})

ipc.on('targetPriceVal',function(event,arg){
     targetPriceVal=Number(arg)
     targetPrice.innerHTML='$'+targetPriceVal.toLocaleString('en')
})
const electron = require('electron')
const path = require('path')
const remote = electron.remote
const ipc = electron.ipcRenderer

const closeBtn = document.getElementById('closeBtn');
const updateBtn =document.getElementById('updateBtn');

console.log(closeBtn);

closeBtn.addEventListener('click', function(event) {
    console.log('close button triggeered');
    var window = remote.getCurrentWindow();
    window.close()
})

updateBtn.addEventListener('click',function(){
  
    ipc.send('update-notify-value',document.getElementById('notifyVal').value)
      var window = remote.getCurrentWindow();
      window.close();

})


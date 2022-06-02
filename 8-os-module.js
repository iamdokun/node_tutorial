const os = require('os')

// info of the current user
const user = os.userInfo()  

// method returns the system uptime in seconds
const uptime = os.uptime()
console.log(uptime);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);
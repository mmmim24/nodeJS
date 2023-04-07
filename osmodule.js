const os = require('os')

//info about the current user
const user = os.userInfo()
console.log(user)
var day = os.uptime()/86400
var hr = (day - Math.floor(day))*24
var min = (hr-Math.floor(hr))*60
var sec = (min-Math.floor(min))*60
console.log(`System uptime is ${Math.floor(day)} days ${Math.floor(hr)} hours ${Math.floor(min)} minutes and ${sec} seconds`)

const currentOS = {
        name: os.type(),
        release: os.release(),
        totalMem: os.totalmem(),
        freeMem: os.freemem()
}
console.log(currentOS)

const { spawn } = require("child_process")

const childPython = spawn("python",["--version"])

childPython.stdout.on('data',(data)=>{
    console.log(`stdout:${data}`)
})

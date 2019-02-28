let cp = require("child_process")

let cmds = {
    npm: "dir",
    git: "git",
    heroku: "heroku"
}

let options = {
    version: `--version` || `-v`
}

let winev = /^win/.test(process.platform) ? 'git.npm' : cmds.npm

let child = cp.spawn( winev || cmds.npm, [options.version]);

child.stdout.on("data", (data) => {
    console.log(`data:\n${data}`)
})
// const { spawn } = require('child_process')

// const child = spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['-v']);
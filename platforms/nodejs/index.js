let cp = require("child_process")

let cmds = {
    npm: "dir",
    git: "git",
    heroku: "heroku"
}

let options = {
    version: `--version` || `-v`,
    angular: `install -g @angular/cli`,
    newng: `ng new my-app`,
    react:`npx create-react-app`
}


let winev = /^win/.test(process.platform) ? 'git.npm' : cmds.npm

let angular = (name)=> {
    let child = cp.spawn( winev || cmds.npm, [options.angular])
    
    child.stdout.on(`data`, (data) => {
        console.log(`progress: \n${data}`)
    })

    let child2 = cp.spawn( winev || cmds.npm, [options.newng, name])

    child2.stdout.on(`data`, (data) => {
        console.log(`new angular stepup: \n${data}`)
    })

}

exports.ndjs =  { angular }

let react = (name)=> {
    let child = cp.spawn( winev || cmds.npm, [options.react, name])

    child.stdout.on(`data`, (data) => {
        console.log(`progress: \n${data}`)
    })

    let child2 = cp.spawn( winev || cmds.npm, [options.react, name])

    child2.stdout.on(`data`, (data) => {
        console.log(`new reactapp steup: \n${data}`)
    })
}
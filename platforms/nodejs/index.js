const cp = require(`child_process`);
const path = require(`path`)

const winbatch = path.join(__dirname,`winbatch`)
//Success Console Message 
const websuccess = (name)=> {
    console.log(`\x1b[36m%s\x1b[0m`, name, `Web Application Scafolded Successfully...\n`,`\x1b[33m`,`Enjoy!!!`,`\x1b[0m`);
} 

//Check for Winows Environment
const isWin = process.platform === `win32`;

const isUnix = process.platform === `darwin`;

let pwshell = () => {
    if(isWin) {
        cp.exec(`powershell`, (err, stdout, stderr) => {
            if(err) throw err

            if(stderr) console.log(`Kublind Baba! : \n`, stderr)

            if(stdout) console.log(`Yah Yah: \n`, stdout)
        })
    }
}

//Empty project Scafold
let emptypro = (name) => {
    if(isWin) { 
        cp.exec(`mkdir ${name} && cd ${name}`, (err, stdout, stderr) => {
            if(err) throw err

            if(stderr) console.log(`Error occured: \n`, stderr)

            if(stdout) console.log(`Creating Root Project: Folder\n`, stdout,`\x1b[36m \nNow in Current Working Directory: \n `, `\x1b[0m` )
        })
        
        cp.exec(`node_emptypro.bat ${name}`, {cwd: winbatch}, (err, stdout, stderr) => {
            if(err) throw err
    
            if(stderr) console.log(`Error occured: \n`, stderr)
            
            if(stdout) {
                console.log(`Scaffolding: \n\x1b[33m`, stdout)
                websuccess(name)
            }
        })  
    }
}

//Scafold Angular Application
let angular = (name)=> {
    if(isWin){
        cp.exec(`node_web_angular.bat ${name}`,{cwd: winbatch}, (err, stdout, stderr) => {
            if(err) throw err
    
            if(stderr) console.log(`Error occured: \n`, stderr)
            
            
            if(stdout) {
                console.log(`Scaffolding: \n\x1b[33m`, stdout)
                websuccess(name)
            }
        }) 
    }
}

//Scafold React Application
let react = (name)=> {
    cp.exec(`node_web_react.bat ${name}`, {cwd: winbatch}, (err, stdout, stderr) => {
        if(err) throw err

        if(stderr) console.log(`Error occured: \n`, stderr)
        
        
        if(stdout) {
            console.log(`Scaffolding: \n\x1b[33m`, stdout)
            websuccess(name)
        }
    }) 
};

//Scafold Vue Application
let vue = (name)=> {
    cp.exec(`node_web_vue.bat ${name}`, {cwd: winbatch}, (err, stdout, stderr) => {
        if(err) throw err

        if(stderr) console.log(`Error occured: \n`, stderr)
        
        
        if(stdout) {
            console.log(`Scaffolding: \n\x1b[33m`, stdout)
            websuccess(name)
        }
    }) 
}

let mobile = (name) => {
    cp.exec(`node_ionic.bat ${name}`,{cwd: winbatch}, (err, stdout, stderr) => {
        if(err) throw err

        if(stderr) console.log(`Error occured: \n`, stderr)
        
        
        if(stdout) {
            console.log(`Scaffolding: \n\x1b[33m`, stdout)
            websuccess(name)
        }
    }) 
}
exports.ndjs =  { angular, react , vue, emptypro, mobile, pwshell}


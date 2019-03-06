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

            if(stderr) console.log(stderr)

            if(stdout) console.log(`Creating Root Project: Folder\n`, stdout,`\x1b[36m \nNow in Current Working Directory: \n `, `\x1b[0m`,
            `****************************************\n`,
            `******* CREATING A NEW PROJECT *********\n`,
            `****************************************\n`
            )
        })
        
        cp.exec(`mkdir ${name}\\models && mkdir ${name}\\controllers && mkdir ${name}\\views`, (err, stdout, stderr) => {
            if(err) throw err

            if(stderr) console.log(stderr)

            if(stdout) console.log(`Creating Project Sub-Root Folders: \n`, stdout)
        })

        cp.exec(`type nul>${name}/models/user.models.js`, (err, stderr, stdout) => {
            if(err) throw err

            if(stderr) console.log(stderr)

            if(stdout) console.log(stdout)
        })

        cp.exec(`type nul>${name}/models/password.models.js`, (err, stderr, stdout) => {
            if(err) throw err

            if(stderr) console.log(stderr)

            if(stdout) console.log(stdout)
        })

        cp.exec(`type nul>${name}/models/log.models.js`, (err, stderr, stdout) => {
            if(err) throw err

            if(stderr) console.log(stderr)

            if(stdout) console.log(stdout)
        })

        cp.exec(`type nul>${name}/controllers/user.controller.js`, (err, stderr, stdout) => {
            if(err) throw err

            if(stderr) console.log(stderr)

            if(stdout) console.log(stdout)
        })

        cp.exec(`type nul>${name}/controllers/passwords.controller.js`, (err, stderr, stdout) => {
            if(err) throw err

            if(stderr) console.log(stderr)

            if(stdout) console.log(stdout)
        })

        cp.exec(`type nul>${name}/controllers/logs.controller.js`, (err, stderr, stdout) => {
            if(err) throw err

            if(stderr) console.log(stderr)

            if(stdout) console.log(stdout)
        })

        cp.exec(`type nul>${name}/views/signin.view.ejs`, (err, stderr, stdout) => {
            if(err) throw err

            if(stderr) console.log(stderr)

            if(stdout) console.log(stdout)
        })

        cp.exec(`type nul>${name}/views/signup.view.ejs`, (err, stderr, stdout) => {
            if(err) throw err

            if(stderr) console.log(stderr)

            if(stdout) console.log(stdout)
        })

        cp.exec(`type nul>${name}/views/home.view.ejs`, (err, stderr, stdout) => {
            if(err) throw err

            if(stderr) console.log(stderr)

            if(stdout) console.log(stdout)
        })

        cp.exec(`type nul>${name}/views/logs.view.ejs`, (err, stderr, stdout) => {
            if(err) throw err

            if(stderr) console.log(stderr)

            if(stdout) console.log(stdout)
        })

        cp.exec(`type nul>${name}/views/dashboard.view.ejs`, (err, stderr, stdout) => {
            if(err) throw err

            if(stderr) console.log(stderr)

            if(stdout) console.log(stdout)
        })

        cp.exec(`type nul>${name}/views/signin.view.ejs`, (err, stderr, stdout) => {
            if(err) throw err

            if(stderr) console.log(stderr)

            if(stdout) console.log(stdout)
        })

        cp.exec(`type nul>${name}/app.js`, (err, stdout, stderr) => {
            if(err) throw err

            if(stderr) console.log(stderr)

            if(stdout) console.log(stdout,
                `****************************************\n`,
                `#####Lets Switch up things a little#####\n`,
                `****************************************\n`,
                `Now Lets Do Magic using Hub to Access Github\n`,
                `****************************************\n`)
        })

        cp.exec(`git init && git add . && git commit -m "Initial Commit, Using VillageWorkCLI"`, (err, stdout, stderr) => {
            if(err) throw err

            if(stderr) console.log(stderr)

            if(stdout) console.log(stdout)
        })

        cp.exec(`hub create`, (err, stdout, stderr) => {
            if(err) throw err

            if(stderr) console.log(stderr)

            if(stdout) console.log(stdout)
        })

        cp.exec(`git push origin`,  (err, stdout, stderr) => {
            if(err) throw err
    
            if(stderr) console.log(stderr)
            
            if(stdout) {
                console.log(`Scaffolding: \n\x1b[33m`, stdout,
                `****************************************\n`,
                `WE Have Successfully Pushed The Project \n`,
                `______________^(* _ *)^________________\n`,
                `************* ENJOY!!! *****************\n`,
                `************* HAPPY CODING *************`
                )
                websuccess(name)
            }
        })  
    }
}

//Scafold Angular Application
let angular = (name)=> {
    if(isWin){
        cp.exec(`node_web_angular.bat ${name}`, (err, stdout, stderr) => {
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
    cp.exec(`node_web_react.bat ${name}`, (err, stdout, stderr) => {
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
    cp.exec(`node_web_vue.bat ${name}`,  (err, stdout, stderr) => {
        if(err) throw err

        if(stderr) console.log(`Error occured: \n`, stderr)
        
        
        if(stdout) {
            console.log(`Scaffolding: \n\x1b[33m`, stdout)
            websuccess(name)
        }
    }) 
}

let mobile = (name) => {
    cp.exec(`node_ionic.bat ${name}`, (err, stdout, stderr) => {
        if(err) throw err

        if(stderr) console.log(`Error occured: \n`, stderr)
        
        
        if(stdout) {
            console.log(`Scaffolding: \n\x1b[33m`, stdout)
            websuccess(name)
        }
    }) 
}
exports.ndjs =  { angular, react , vue, emptypro, mobile, pwshell}


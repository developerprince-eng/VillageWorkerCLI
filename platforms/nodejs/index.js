const cp = require(`child_process`);


//Success Console Message 
const websuccess = (name)=> {
    console.log(`\x1b[36m%s\x1b[0m`, name, `Web Application Scafolded Successfully...\n`,`\x1b[33m`,`Enjoy!!!`,`\x1b[0m`);
} 

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
    const phase1 = () => {
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
    }

    const phase2 = () => {
        cp.exec(`git init && git add . && git commit -m "Initial Commit, Using VillageWorkCLI"`, (err, stdout, stderr) => {
            if(err) throw err
    
            if(stderr) console.log(stderr)
    
            if(stdout) console.log(stdout)
        })
    }

    const phase3 = () => {
        cp.exec(`hub create --private`, (err, stdout, stderr) => {
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

    async function initproject_phase1() {
        await phase1  () 

        phase2()
    }

    async function initproject() {
        await initproject_phase1()

        phase3()
    }

    initproject()
}

//Scafold Angular Application
let angular = (name)=> {  
    const phase1 = () => {
        cp.exec(`npm install -g ionic`, (err, stdout, stderr) => {
            if(err) throw err
    
            if(stderr) console.log(stderr)
    
            if(stdout) console.log(stdout)
        })
    } 

    const phase2 = () => {
        cp.exec(`ng new ${name}`, (err, stdout, stderr) => {
            if(err) throw err
    
            if(stderr) console.log(stderr)
    
            if(stdout) console.log(stdout)
        })
    }

    const phase3 = () => {
        cp.exec(`git add . && git commit -m "Initial Commit, Using VillageWorkCLI"`, (err, stdout, stderr) => {
            if(err) throw err
    
            if(stderr) console.log(stderr)
    
            if(stdout) console.log(stdout)
        })
    }

    const phase4 = () => {
        cp.exec(`hub create --private`, (err, stdout, stderr) => {
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
    
    async function initproject_phase1() {
        await phase1()

        phase2()
    }
    
    async function initproject_phase2() {
        await initproject_phase1()

        phase3()
    }

    async function initproject(){
        await initproject_phase2()

        phase4()
    }
    initproject()
}

//Scafold React Application
let react = (name)=> {
    const phase1 = () => {
        cp.exec(`npx create-react-app ${name}`, (err, stdout, stderr) => {
            if(err) throw err
    
            if(stderr) console.log(`Error occured: \n`, stderr)
            
            if(stdout) console.log(stdout)   
        }) 
    }

    const phase2 = () => {
        cp.exec(`git add . && git commit -m "Initial Commit, Using VillageWorkCLI"`, (err, stdout, stderr) => {
            if(err) throw err
    
            if(stderr) console.log(stderr)
    
            if(stdout) console.log(stdout)
        })
    
    }

    const phase3 = () => {
        cp.exec(`hub create --private`, (err, stdout, stderr) => {
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

    async function initproject_phase1() {
        await phase1  () 

        phase2()
    }

    async function initproject() {
        await initproject_phase1()

        phase3()
    }

    initproject()
};

//Scafold Vue Application
let vue = (name)=> {
    const phase1 = () => {
        cp.exec(`npm install -g create-vue-app`,  (err, stdout, stderr) => {
            if(err) throw err
    
            if(stderr) console.log(stderr)
            
            if(stdout) console.log(stdout)
        }) 
    }

    const phase2 = () => {
        cp.exec(`create-vue-app ${name}`,  (err, stdout, stderr) => {
            if(err) throw err
    
            if(stderr) console.log(stderr)
            
            if(stdout) console.log(stdout)
        }) 
    }

    const phase3 = () => {
        cp.exec(`git init && git add . && git commit -m "Initial Commit, Using VillageWorkCLI"`, (err, stdout, stderr) => {
            if(err) throw err
    
            if(stderr) console.log(stderr)
    
            if(stdout) console.log(stdout)
        })
    }

    const phase4 = () => {
        cp.exec(`hub create --private`, (err, stdout, stderr) => {
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
   
    async function initproject_phase1() {
        await phase1()

        phase2()
    }
    
    async function initproject_phase2() {
        await initproject_phase1()

        phase3()
    }

    async function initproject(){
        await initproject_phase2()

        phase4()
    }
    initproject()

}

let mobile = (name) => {
    const phase1 = () => {
        cp.exec(`npm install -g ionic`, (err, stdout, stderr) => {
            if(err) throw err
    
            if(stderr) console.log(stderr)
            
            
            if(stdout) console.log(stdout)
        }) 
    }

    const phase2 = () => {
        cp.exec(`ionic $name Blank`, (err, stdout, stderr) => {
            if(err) throw err
    
            if(stderr) console.log(stderr)
            
            
            if(stdout) console.log(stdout)
        })
    }

    const phase3 = () => {
        cp.exec(`git init &&  add . && git commit -m "Initial Commit, Using VillageWorkCLI"`, (err, stdout, stderr) => {
            if(err) throw err
    
            if(stderr) console.log(stderr)
    
            if(stdout) console.log(stdout)
        })
    }

    const phase4 = () => {
        cp.exec(`hub create --private`, (err, stdout, stderr) => {
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

    async function initproject_phase1() {
        await phase1()

        phase2()
    }
    
    async function initproject_phase2() {
        await initproject_phase1()

        phase3()
    }

    async function initproject(){
        await initproject_phase2()

        phase4()
    }
    initproject()
}
exports.ndjs =  { angular, react , vue, emptypro, mobile, pwshell}


const cp = require(`child_process`);

//Success Console Message 
const websuccess = (name)=> {
    console.log(`\x1b[36m%s\x1b[0m`, name, `Web Application Scafolded Successfully...\n`,`\x1b[33m`,`Enjoy!!!`,`\x1b[0m`);
} 

//Empty project Scafold
let emptypro = (name) => {
    const phase1 = () => {
        cp.execSync(`mkdir ${name} && cd ${name}`, (err, stdout, stderr) => {
            if(err) throw err
            if(stdout) console.log(`Creating Root Project: Folder\n`, stdout,`\x1b[36m \nNow in Current Working Directory: \n `, `\x1b[0m`,
            `****************************************\n`,
            `******* CREATING A NEW PROJECT *********\n`,
            `****************************************\n`
            )
            console.log(stderr)
        })
        
        cp.execSync(`mkdir ${name}\\models && mkdir ${name}\\controllers && mkdir ${name}\\views`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`type nul>${name}/models/user.models.js`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`type nul>${name}/models/password.models.js`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`type nul>${name}/models/log.models.js`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`type nul>${name}/controllers/user.controller.js`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`type nul>${name}/controllers/passwords.controller.js`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`type nul>${name}/controllers/logs.controller.js`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`type nul>${name}/views/signin.view.ejs`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`type nul>${name}/views/signup.view.ejs`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`type nul>${name}/views/home.view.ejs`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`type nul>${name}/views/logs.view.ejs`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`type nul>${name}/views/dashboard.view.ejs`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`type nul>${name}/views/signin.view.ejs`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
        
        cp.execSync(`type nul>${name}/app.js`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
     
        cp.execSync(`cd ${name} && git init && git add . && git commit -m "Initial Commit, Using VillageWorkCLI" `, (err, stdout, stderr)=>{
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })

        cp.execSync(`cd ${name} && hub create --private && git push`, (err, stdout, stderr) => {
            if(err) throw err
    
            if(stderr) console.log(stderr)
    
            if(stdout) console.log(stdout,
                `****************************************\n`,
                `#####Lets Switch up things a little#####\n`,
                `****************************************\n`,
                `Now Lets Do Magic using Hub to Access Github\n`,
                `****************************************\n`,
                `Scaffolding: \n\x1b[33m`, stdout,
                `****************************************\n`,
                `WE Have Successfully Pushed The Project \n`,
                `______________^(* _ *)^________________\n`,
                `************* ENJOY!!! *****************\n`,
                `************* HAPPY CODING *************`)
                websuccess()
        })
    }
   
    phase1()
}

//Scafold Angular Application
let angular = (name)=> {  
    const phase1 = () => {
        cp.execSync(`npm install -g ionic`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })

        cp.execSync(`ng new ${name}`, (err, stdout, stderr)=>{
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })

        cp.execSync(`cd ${name} && hub create --private && git push`, (err, stdout, stderr)=>{
            if(err) throw err
            if(stdout) {
                console.log(`Pushing Scaffolded: \n\x1b[33m`, stdout,
                `****************************************\n`,
                `WE Have Successfully Pushed The Project \n`,
                `______________^(* _ *)^________________\n`,
                `************* ENJOY!!! *****************\n`,
                `************* HAPPY CODING *************`
                )
                websuccess(name)
            }
            console.log(stderr)
        })
        
    } 

    phase1()
}

//Scafold React Application
let react = (name)=> {
    const phase1 = () => {
        cp.execSync(`npx create-react-app ${name}`, (err, stdout, stderr) => {
            if(err) throw err   
            console.log(stdout)
            console.log(stderr)           
        })

        cp.execSync(`cd ${name} && git init && git add .`,(err, stdout, stderr)=>{
            if(err) throw err
            console.log(stderr)
            console.log(stdout)
        })

        cp.execSync(`git commit -m "Initial Commit, Using VillageWorkCLI"`,(err, stdout, stderr)=>{
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })

        cp.execSync(`hub create --private`,(err, stdout, stderr)=>{
            if(err) throw err
            if(stdout) {
                console.log(`Pushing Scaffolded: \n\x1b[33m`, stdout,
                `****************************************\n`,
                `WE Have Successfully Pushed The Project \n`,
                `______________^(* _ *)^________________\n`,
                `************* ENJOY!!! *****************\n`,
                `************* HAPPY CODING *************`
                )
                websuccess(name)
            }   
            console.log(stderr)
        })

    }

    phase1()
};

//Scafold Vue Application
let vue = (name)=> {
    const phase1 = () => {
        cp.execSync(`npm install -g create-vue-app`,  (err, stdout, stderr) => {
            if(err) throw err
            console.log(stderr)
            console.log(`Installed vue:`,stdout)
        }) 

        cp.execSync(`create-vue-app ${name}`,(err, stdout, stderr)=>{
            if(err) throw err
            console.log(stdout)
            console.log(`Created vueapp`,stderr)
        })

        cp.execSync(`cd ${name}`,(err, stdout, stderr)=>{
            if(err) throw err
            console.log(stderr)
            console.log(stdout)
        })

        cp.execSync(`git add .`,(err, stdout, stderr)=>{
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })

        cp.execSync(`git commit -m "Initial Commit, Using VillageWorkCLI"`,(err, stdout, stderr)=>{
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })

        cp.execSync(`hub create --private  && git push`,(err, stdout, stderr)=>{
            if(err) throw err
            if(stdout) {
                console.log(`Pushing Scaffolded: \n\x1b[33m`, stdout,
                `****************************************\n`,
                `WE Have Successfully Pushed The Project \n`,
                `______________^(* _ *)^________________\n`,
                `************* ENJOY!!! *****************\n`,
                `************* HAPPY CODING *************`
                )
                websuccess(name)
            }
            console.log(stderr)
        })
    }

    phase1()

}

//Scafold Mobile Application
let mobile = (name) => {
    const phase1 = () => {
        cp.execSync(`npm install -g ionic`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
        cp.execSync(`ionic start ${name} Blank`,(err, stdout, stderr)=>{
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
        cp.execSync(`git init &&  add .`,(err, stdout, stderr)=>{
            if(err) throw err
            console.log(stdout)
            console,log(stderr)
        })
        cp.execSync(`git commit -m "Initial Commit, Using VillageWorkCLI"`,(err, stdout, stderr)=>{
            if(err) throw err
            console.log(stdout)
            console,log(stderr)
        })
        cp.execSync(`hub create --private && git push`, (err, stdout, stderr)=>{
            if(err) throw err
            if(stdout) {
                console.log(`Pushing Scaffolded: \n\x1b[33m`, stdout,
                `****************************************\n`,
                `WE Have Successfully Pushed The Project \n`,
                `______________^(* _ *)^________________\n`,
                `************* ENJOY!!! *****************\n`,
                `************* HAPPY CODING *************`
                )
                websuccess(name)
            }
            console.log(stderr)
        })
    }

    phase1()
}
exports.ndjs =  { angular, react , vue, emptypro, mobile}


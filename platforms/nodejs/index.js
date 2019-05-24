/*
PROJECT TITLE           : VillageWorkerCLI 
PROJECT ALIAS           : Anolis
PROJECT OWNER           : VillageWork
PROJECT LEAD            : DeveloperPrince (Prince Kudzai Maposa)
AFFILIATION             : Semina, The Techvillage
PROJECT CONTRIBUTORS    : Thamsanqa Mpofu
PROJECT BRIEF           : This is command line interface which will enable developers to scaffold 
                          project of any nature which are web based, currently focusing on nodejs
                          & python, we provide php support soon enough. The CLI will automate process
                          of version control setup and even push the project online to github and
                          eventually deploy locally and even automate set test deployment on heroku.

                          This is strictly an alpha project which needs more support from the developers community
                          Dashboard for VillageWork for Developers will be coming soon to help manage 
                          the work flow and DEVOPS.
Happy Coding 
*/
/*--------------Modules-------------------*/
const cp = require(`child_process`)
const isWin = process.platform === "win32"
const internetAvailable = require(`internet-available`)

//Success Console Message 
const websuccess = (name)=> {
    console.log(`\x1b[36m%s\x1b[0m`, name, `Web Application Scafolded Successfully...\n`,`\x1b[33m`,`Enjoy!!!`,`\x1b[0m`);
} 

//no Connectivity Console Message1
let noConnectivity = () => {
    console.log(`No Connectivity\nProject will be pushed manually when connectivity is available\n`)
}

//no Connectivity Console Message2
let noConnectivity0 = () => {
    console.log(`No Connectivity\nPlease try again when there is connection\n`)
}

//Success Console Message for Web Scaffolding
const webscaf = (stdout) =>{
    console.log(
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
}

//Empty project Scafold
let emptypro = (name) => {
    //Scafolding for Windows Environment
    let winenv = () => {
        cp.execSync(`express --view=ejs ${name}`, (err, stdout, stderr) => {
            if(err) throw err
            if(stdout) console.log(`Creating Root Project: Folder\n`, stdout,`\x1b[36m \nNow in Current Working Directory: \n `, `\x1b[0m`,
            `****************************************\n`,
            `******* CREATING A NEW PROJECT *********\n`,
            `****************************************\n`
            )
            console.log(stderr) 
        })
    
        cp.execSync(`cd ${name} && git init && git add . && git commit -m "Initial Commit, Using VillageWorkCLI" `, (err, stdout, stderr)=>{
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })

        //CHECK FOR INTERNET CONNECTIVITY
        internetAvailable().then(function(){
            cp.exec(`cd ${name} && hub create --private && git push --set-upstream origin master`, (err, stdout, stderr) => {
                if(err) throw err
        
                if(stderr) console.log(stderr)
        
                if(stdout) {
                    webscaf(stdout)
                    websuccess(name)
                }   
            })
        }).catch(function(){
            noConnectivity()
            websuccess(name)
        }) 
    }

    //Scaffolding for Unix Environment
    let unixenv = () => {
        cp.execSync(`mkdir ${name} && cd ${name}`, (err, stdout, stderr) => {
            if(err) throw err
            if(stdout) console.log(`Creating Root Project: Folder\n`, stdout,`\x1b[36m \nNow in Current Working Directory: \n `, `\x1b[0m`,
            `****************************************\n`,
            `******* CREATING A NEW PROJECT *********\n`,
            `****************************************\n`
            )
            console.log(stderr)
        })
        
        cp.execSync(`mkdir ${name}/models && mkdir ${name}/controllers && mkdir ${name}/views`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`touch ${name}/models/users.models.js`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`touch ${name}/models/passwords.models.js`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`touch ${name}/models/logs.models.js`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`touch ${name}/controllers/user.controller.js`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`touch ${name}/controllers/password.controller.js`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`touch ${name}/controllers/log.controller.js`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`touch ${name}/views/signin.view.ejs`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`touch ${name}/views/signup.view.ejs`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`touch ${name}/views/home.view.ejs`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`touch ${name}/views/logs.view.ejs`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`touch ${name}/views/dashboard.view.ejs`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`touch ${name}/views/signin.view.ejs`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
        
        cp.execSync(`touch ${name}/app.js`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`cd ${name} && git init && git add . && git commit -m "Initial Commit, Using VillageWorkCLI" `, (err, stdout, stderr)=>{
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })

        //CHECK FOR INTERNET CONNECTIVITY
        internetAvailable().then(function(){
            cp.exec(`cd ${name} && hub create --private && git push --set-upstream origin master`, (err, stdout, stderr) => {
                if(err) throw err
        
                if(stderr) console.log(stderr)
        
                if(stdout) {
                    webscaf(stdout)
                    websuccess(name)
                }   
            })
        }).catch(function(){
            noConnectivity()
            websuccess(name)
        }) 
    }

    //Check for System Environment with its windows based or unix based
    if (isWin){
        winenv()
    }
    else{
        unixenv()
    } 
}

//Scafold Angular Application for Dual System that is Windows and Unix
let angular = (name)=> {  
    let universalenv = () => {
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

        //CHECK FOR INTERNET CONNECTIVITY
        internetAvailable().then(function(){
            cp.exec(`cd ${name} && hub create --private && git push --set-upstream origin master `, (err, stdout, stderr) => {
                if(err) throw err
        
                if(stderr) console.log(stderr)
        
                if(stdout) {
                    webscaf(stdout)
                    websuccess(name)
                }   
            })
        }).catch(function(){
            noConnectivity()
        }) 
        
    } 
    universalenv()
}

//Scafold React Application for Dual System that is Windows and Unix
let react = (name)=> {
    let universalenv = () => {
        //CHECK FOR INTERNET CONNECTIVITY
        internetAvailable().then(function(){
            //Download react framework and generate react project(third party scaffolding from react)
            cp.execSync(`npx create-react-app ${name}`, (err, stdout, stderr) => {
                if(err) throw err   
                console.log(stdout)
                console.log(stderr)           
            })
    
            //stage project
            cp.execSync(`cd ${name} && git init && git add .`,(err, stdout, stderr)=>{
                if(err) throw err
                console.log(stderr)
                console.log(stdout)
            })
            
            //commit staged project
            cp.execSync(`git commit -m "Initial Commit, Using VillageWorkCLI"`,(err, stdout, stderr)=>{
                if(err) throw err
                console.log(stdout)
                console.log(stderr)
            })

            //push commmited projected
            cp.exec(`cd ${name} && hub create --private && git push --set-upstream origin master`, (err, stdout, stderr) => {
                if(err) throw err
        
                if(stderr) console.log(stderr)
        
                if(stdout) {
                    webscaf(stdout)
                    websuccess(name)
                }   
            })
        }).catch(function(){
            noConnectivity0()
        }) 

    }
    universalenv()
};

//Scafold Vue Application for Dual System that is Windows and Unix
let vue = (name)=> {
    let universalenv = () => {
        //Download vuejs framework using npm (third party)
        cp.execSync(`npm install -g create-vue-app`,  (err, stdout, stderr) => {
            if(err) throw err
            console.log(stderr)
            console.log(`Installed vue:`,stdout)
        }) 

        //create vuejs project
        cp.execSync(`create-vue-app ${name}`,(err, stdout, stderr)=>{
            if(err) throw err
            console.log(stdout)
            console.log(`Created vueapp`,stderr)
        })

        //stage and commit project localy 
        cp.execSync(`cd ${name} && git add . && git commit -m "Initial Commit, Using VillageWorkCLI"`,(err, stdout, stderr)=>{
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })

        //CHECK FOR INTERNET CONNECTIVITY
        internetAvailable().then(function(){
            cp.exec(`cd ${name} && hub create --private && git push --set-upstream origin master`, (err, stdout, stderr) => {
                if(err) throw err
        
                if(stderr) console.log(stderr)
        
                if(stdout) {
                    webscaf(stdout)
                    websuccess(name)
                }   
            })
        }).catch(function(){
            noConnectivity()
            websuccess(name)
        }) 
    }
    universalenv()
}

//Scafold Mobile Application for Dual System that is Windows and Unix
let mobile = (name) => {
    let universalenv = () => {
        //Download Ionic Framework
        cp.execSync(`npm install -g ionic`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })

        //Create or Initiate ionic blank project
        cp.execSync(`ionic start ${name} Blank`,(err, stdout, stderr)=>{
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })

        //Stage and commit project locally
        cp.execSync(`cd ${name} && git init &&  add . && git commit -m "Initial Commit, Using VillageWorkCLI"`,(err, stdout, stderr)=>{
            if(err) throw err
            console.log(stdout)
            console,log(stderr)
        })

        //CHECK FOR INTERNET CONNECTIVITY
        internetAvailable().then(function(){
            cp.exec(`cd ${name} && hub create --private && git push --set-upstream origin master`, (err, stdout, stderr) => {
                if(err) throw err
        
                if(stderr) console.log(stderr)
        
                if(stdout) {
                    webscaf(stdout)
                    websuccess(name)
                }   
            })
        }).catch(function(){
            noConnectivity()
            websuccess(name)
        }) 
    }
    universalenv()
}

exports.ndjs =  {angular, react , vue, emptypro, mobile}


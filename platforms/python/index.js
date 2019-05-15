const cp = require(`child_process`);
const isWin = process.platform === "win32";

//Success Console Message 
const websuccess = (name)=> {
    console.log(`\x1b[36m%s\x1b[0m`, name, `Web Application Scafolded Successfully...\n`,`\x1b[33m`,`Enjoy!!!`,`\x1b[0m`);
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
        
        cp.execSync(`mkdir ${name}\\${name}`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`mkdir ${name}\\instance`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })

        cp.execSync(`type nul>${name}/instance/config.py`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })

        cp.execSync(`type nul>${name}/.gitignore`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`type nul>${name}/config.py`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`type nul>${name}/db_create.py`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`type nul>${name}/forms.py`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`type nul>${name}/${name}.db`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`type nul>${name}/Procfile`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`type nul>${name}/README.md`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`type nul>${name}/requirements.txt`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`type nul>${name}/run.py`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`cd ${name} && git init && git add . && git commit -m "Initial Commit, Using VillageWorkCLI" `, (err, stdout, stderr)=>{
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })

        cp.exec(`cd ${name} && hub create --private && git push --set-upstream origin master`, (err, stdout, stderr) => {
            if(err) throw err
    
            if(stderr) console.log(stderr)
    
            if(stdout) {
                webscaf(stdout)
                websuccess(name)
            }   
        })
    }
   
    const phase2 = () => {
        cp.execSync(`mkdir ${name} && cd ${name}`, (err, stdout, stderr) => {
            if(err) throw err
            if(stdout) console.log(`Creating Root Project: Folder\n`, stdout,`\x1b[36m \nNow in Current Working Directory: \n `, `\x1b[0m`,
            `****************************************\n`,
            `******* CREATING A NEW PROJECT *********\n`,
            `****************************************\n`
            )
            console.log(stderr)
        })
        
        cp.execSync(`mkdir ${name}/${name}`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`mkdir ${name}/instance`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`touch ${name}/.gitignore`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`touch ${name}/config.py`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`touch ${name}/db_create.py`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`touch ${name}/forms.py`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`touch ${name}/${name}.db`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`touch ${name}/Procfile`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`touch ${name}/README.md`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`touch ${name}/requirements.txt`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`touch ${name}/run.py`, (err, stdout, stderr) => {
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
    
        cp.execSync(`cd ${name} && git init && git add . && git commit -m "Initial Commit, Using VillageWorkCLI" `, (err, stdout, stderr)=>{
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
        cp.exec(`cd ${name} && hub create --private && git push --set-upstream origin master`, (err, stdout, stderr) => {

            if(err) throw err
    
            if(stderr) console.log(stderr)
    
            if(stdout) {
                webscaf(stdout)
                websuccess(name)
            }   
        })
    }

    if(isWin){
        phase1()
    }

    else{
        phase2()
    }
    
}

exports.py=  {emptypro}


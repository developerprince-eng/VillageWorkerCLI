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
const cp = require(`child_process`);
const fs = require(`fs`)
const isWin = process.platform === "win32";
const internetAvailable = require(`internet-available`)


//no Connectivity Console Message2
let noConnectivity0 = () => {
    console.log(`No Connectivity\nPlease try again when there is connection\n`)
}

//Directive 
let whatnext = () => {
    console.log(`run the following command 'villageworkcli addssh <ssh-public-key-path>'`)
}

let goodtogo = () => {
    console.log(`Yes you have set up Successfully you are good to go`)
}

//Configuration
let config = (user) => {
    let winenv = () => {
        internetAvailable().then(()=>{
            cp.execSync(`[environment]::setEnvironmentVariable('SCOOP','C:\Applications\Scoop','${user}')`, (err, stdout, stderr)=>{
                if (err) throw err
                console.log(stdout)
                console.log(stderr)
            })
        
            cp.execSync(`$env:SCOOP='C:\Applications\Scoop'`, (err, stdout, stderr)=>{
                if (err) throw err
                console.log(stdout)
                console.log(stderr)
            })
        
            cp.execSync(`iex (new-object net.webclient).downloadstring('https://get.scoop.sh')`, (err, stdout, stderr)=>{
                if (err) throw err
                console.log(stdout)
                console.log(stderr)
            })
        
            cp.execSync(`scoop install hub`, (err, stdout, stderr)=>{
                if (err) throw err
                console.log(stdout)
                console.log(stderr)
            })
        
            cp.execSync(`ssh-keygen`, (err, stdout, stderr)=>{
                if (err) throw err
                console.log(stdout)
                console.log(stderr)
            })
        
            cp.execSync('eval `sha-agent`', (err, stdout, stderr)=>{
                if (err) throw err
                console.log(stdout)
                whatnext()
                console.log(stderr)
            })
        }).catch(()=>{
            noConnectivity0()
        })
        
    }

    let unixenv = () => {
        internetAvailable().then(()=>{
            cp.execSync(`sudo apt install hub`, (err, stdout, stderr)=>{
                if (err) throw err
                console.log(stdout)
                console.log(stderr)
            })
    
            cp.execSync(`ssh-keygen`, (err, stdout, stderr)=>{
                if (err) throw err
                console.log(stdout)
                console.log(stderr)
            })
        
            cp.execSync('eval `sha-agent`', (err, stdout, stderr)=>{
                if (err) throw err
                console.log(stdout)
                whatnext()
                console.log(stderr)
            })
        }).catch(()=>{
            noConnectivity0()
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

let addssh = (path) => {
    cp.exec(`ssh-add ${path}`, (err, stdout, stderr)=>{
        if (err) throw err
        console.log(stdout)
        goodtogo()
        console.log(stderr)
    })
}


exports.configuration = {config, addssh}
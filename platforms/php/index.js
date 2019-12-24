/*
PROJECT TITLE           : BoomSlangCLI
PROJECT ALIAS           : fluid-serpent
PROJECT OWNER           : DeveloperPrince
PROJECT LEAD            : DeveloperPrince (Prince Kudzai Maposa)
AFFILIATION             : Semina
PROJECT CONTRIBUTORS    : Tinashe Mabika
PROJECT BRIEF           : This is command line interface which will enable developers to scaffold 
                          project of any nature which are ai based, currently focusing 
                          python.

Happy Coding 
*/
/*--------------Modules-------------------*/
const cp = require(`child_process`)
const fs = require(`fs`)
const isWin = process.platform === "win32"
const internetAvailable = require(`internet-available`)

let cod3 = (name) => {

    let winenv = () => {
        cp.execSync(`mkdir ${name} `, (err, stdout, stderr) => {
            if(err) throw err
            if(stdout) console.log(`CREATED FOLDER:  ${name} & Switched to Root Project Folder`)
            console.log(stderr)
        })
       
        cp.execSync(`cp ~/usr/lib/node_modules/villageworkcli-work/templates/codeigniter/3/ /$name`, (err, stdout, stderr) => {
            if(err) throw err
            if(stdout) console.log(`Copied Core Files to  ${name} Folder`)
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

    let unixenv = () =>{
        cp.execSync(`mkdir ${name} `, (err, stdout, stderr) => {
            if(err) throw err
            if(stdout) console.log(`CREATED FOLDER:  ${name} `)
            console.log(stderr)
        })

        cp.execSync(`cd ${name}`, (err, stdout, stderr) => {
            if(err) throw err
            if(stdout) console.log(`Switched to Root Project Folder`)
            console.log(stderr)
        })
       
        cp.execSync(`cp -r /usr/lib/node_modules/villageworkcli-work/templates/codeigniter/3/ ${name}`, (err, stdout, stderr) => {
            if(err) throw err
            if(stdout) console.log(`Copied Core Files to  ${name} Folder`)
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
    //CHECK FOR SYSTEM ENVIRONMENT
    if(isWin){
        winenv()
    }
    else{
        unixenv()
    }

}

let laravelblog = (name) => {

    let winenv = () => {
        cp.execSync(`mkdir ${name} `, (err, stdout, stderr) => {
            if(err) throw err
            if(stdout) console.log(`CREATED FOLDER:  ${name} & Switched to Root Project Folder`)
            console.log(stderr)
        })
       
        cp.execSync(`composer require laravel/ui --dev`, (err, stdout, stderr) => {
            if(err) throw err
            if(stdout) console.log(`Copied Core Files to  ${name} Folder`)
            console.log(stderr)
        })

        cp.execSync(`php artisan ui react`, (err, stdout, stderr) => {
            if(err) throw err
            if(stdout) console.log(`ReactApp  ${name}`)
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

    let unixenv = () =>{
        cp.execSync(`mkdir ${name} `, (err, stdout, stderr) => {
            if(err) throw err
            if(stdout) console.log(`CREATED FOLDER:  ${name} `)
            console.log(stderr)
        })

        cp.execSync(`cd ${name}`, (err, stdout, stderr) => {
            if(err) throw err
            if(stdout) console.log(`Switched to Root Project Folder`)
            console.log(stderr)
        })
       
        cp.execSync(`cp -r /usr/lib/node_modules/villageworkcli-work/templates/codeigniter/3/ ${name}`, (err, stdout, stderr) => {
            if(err) throw err
            if(stdout) console.log(`Copied Core Files to  ${name} Folder`)
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
    //CHECK FOR SYSTEM ENVIRONMENT
    if(isWin){
        winenv()
    }
    else{
        unixenv()
    }
}

let laravelReact = (name) => {

    let winenv = () => {
        cp.execSync(`mkdir ${name} `, (err, stdout, stderr) => {
            if(err) throw err
            if(stdout) console.log(`CREATED FOLDER:  ${name} & Switched to Root Project Folder`)
            console.log(stderr)
        })
       
        cp.execSync(`composer require laravel/ui --dev`, (err, stdout, stderr) => {
            if(err) throw err
            if(stdout) console.log(`Copied Core Files to  ${name} Folder`)
            console.log(stderr)
        })

        cp.execSync(`php artisan ui react`, (err, stdout, stderr) => {
            if(err) throw err
            if(stdout) console.log(`ReactApp  ${name}`)
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

    let unixenv = () =>{
        cp.execSync(`mkdir ${name} `, (err, stdout, stderr) => {
            if(err) throw err
            if(stdout) console.log(`CREATED FOLDER:  ${name} `)
            console.log(stderr)
        })

        cp.execSync(`cd ${name}`, (err, stdout, stderr) => {
            if(err) throw err
            if(stdout) console.log(`Switched to Root Project Folder`)
            console.log(stderr)
        })
       
        cp.execSync(`cp -r /usr/lib/node_modules/villageworkcli-work/templates/codeigniter/3/ ${name}`, (err, stdout, stderr) => {
            if(err) throw err
            if(stdout) console.log(`Copied Core Files to  ${name} Folder`)
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
    //CHECK FOR SYSTEM ENVIRONMENT
    if(isWin){
        winenv()
    }
    else{
        unixenv()
    }
}

let laravelAngular = (name) => {

    let winenv = () => {
        cp.execSync(`mkdir ${name} `, (err, stdout, stderr) => {
            if(err) throw err
            if(stdout) console.log(`CREATED FOLDER:  ${name} & Switched to Root Project Folder`)
            console.log(stderr)
        })
       
        cp.execSync(`composer require laravel/ui --dev`, (err, stdout, stderr) => {
            if(err) throw err
            if(stdout) console.log(`Copied Core Files to  ${name} Folder`)
            console.log(stderr)
        })

        cp.execSync(`php artisan ui angular`, (err, stdout, stderr) => {
            if(err) throw err
            if(stdout) console.log(`AngularApp  ${name}`)
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

    let unixenv = () =>{
        cp.execSync(`mkdir ${name} `, (err, stdout, stderr) => {
            if(err) throw err
            if(stdout) console.log(`CREATED FOLDER:  ${name} `)
            console.log(stderr)
        })

        cp.execSync(`cd ${name}`, (err, stdout, stderr) => {
            if(err) throw err
            if(stdout) console.log(`Switched to Root Project Folder`)
            console.log(stderr)
        })
       
        cp.execSync(`cp -r /usr/lib/node_modules/villageworkcli-work/templates/codeigniter/3/ ${name}`, (err, stdout, stderr) => {
            if(err) throw err
            if(stdout) console.log(`Copied Core Files to  ${name} Folder`)
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
    //CHECK FOR SYSTEM ENVIRONMENT
    if(isWin){
        winenv()
    }
    else{
        unixenv()
    }
}
exports.php = {cod3, laravelReact, laravelAngular, laravelblog}
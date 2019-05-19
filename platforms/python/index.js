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
const fs = require(`fs`)
const isWin = process.platform === "win32"
const internetAvailable = require(`internet-available`)


//Success Console Message 
let websuccess = (name)=> {
    console.log(`\x1b[36m%s\x1b[0m`, name, `Web Application Scafolded Successfully...\n`,`\x1b[33m`,`Enjoy!!!`,`\x1b[0m`);
} 

//no Connectivity Console Message
let noConnectivity = () => {
    console.log(`No Connectivity\nProject will be pushed manually when connectivity is available\n`)
}

//Core Scafolding Operation
let coreScafolding = (name) =>  {
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
        if(stdout) console.log(`CREATE FOLDER:  ${name}/${name}`)
        console.log(stderr)
    })

    cp.execSync(`mkdir ${name}/${name}/templates`, (err, stdout, stderr) => {
        if(err) throw err
        if(stdout) console.log(`CREATE FOLDER:  ${name}/${name}/templates`)
        console.log(stderr)
    })

    cp.execSync(`mkdir ${name}/${name}/static`, (err, stdout, stderr) => {
        if(err) throw err
        if(stdout) console.log(`CREATE FOLDER:  ${name}/${name}/static`)
        console.log(stderr)
    })

    cp.execSync(`mkdir ${name}/${name}/static/assets`, (err, stdout, stderr) => {
        if(err) throw err
        if(stdout) console.log(`CREATE FOLDER:  ${name}/${name}/static/assets`)
        console.log(stderr)
    })

    cp.execSync(`mkdir ${name}/${name}/static/assets/css`, (err, stdout, stderr) => {
        if(err) throw err
        if(stdout) console.log(`CREATE FOLDER:  ${name}/${name}/static/assets/css`)
        console.log(stderr)
    })

    cp.execSync(`mkdir ${name}/${name}/static/assets/images`, (err, stdout, stderr) => {
        if(err) throw err
        if(stdout) console.log(`CREATE FOLDER:  ${name}/${name}/static/assets/images`)
        console.log(stderr)
    })

    cp.execSync(`mkdir ${name}/${name}/static/assets/js`, (err, stdout, stderr) => {
        if(err) throw err
        if(stdout) console.log(`CREATE FOLDER:  ${name}/${name}/static/assets/js`)
        console.log(stderr)
    })

    cp.execSync(`mkdir ${name}/${name}/static/assets/error`, (err, stdout, stderr) => {
        if(err) throw err
        console.log(stdout)
        console.log(stderr)
    })

    cp.execSync(`mkdir ${name}/${name}/static/assets/error/css`, (err, stdout, stderr) => {
        if(err) throw err
        if(stdout) console.log(`CREATE FOLDER:  ${name}/${name}/static/assets/error/css`)
        console.log(stderr)
    }) 


    cp.execSync(`mkdir ${name}/${name}/helpers`, (err, stdout, stderr) => {
        if(err) throw err
        if(stdout) console.log(`CREATE FOLDER:  ${name}/${name}/helpers`)
        console.log(stderr)
    })

    cp.execSync(`mkdir ${name}/instance`, (err, stdout, stderr) => {
        if(err) throw err
        if(stdout) console.log(`CREATE FOLDER:  ${name}/instance`)
        console.log(stderr)
    })


    //CHECK FOR INTERNET CONNECTIVITY
    internetAvailable().then(function(){
        cp.execSync(`cd ${name} && hub create --private && git push --set-upstream origin master`, (err, stdout, stderr) => {
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

//Success Console Message for Web Scaffolding
let webscaf = (stdout) =>{
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

//Write Files Function for Flask Project
let writeFiles = (name) => {
    const viewsdata = `import os\nfrom flask flash, redirect, render_template, url_for, request\nfrom werkzeug.security import generate_password_hash\nfrom werkzeug.utils import secure_filename\nfrom . import app\n\n#BAD REQUEST\n@app.errorhandler(400)\ndef resource_error(e):\n\treturn render_template('400.html'), 400\n\n#FORBIDDEN ERROR\n@app.errorhandler(403)\ndef forbidden(e):\nreturn render_template('403.html'), 403\n\n#NOT ALLOWED ERROR\n@app.errorhandler(405)\ndef method_not_allowed(e):\n\treturn render_template('405.html'), 405\n\n#NOT FOUND ERROR\n@app.errorhandler(404)\ndef page_not_found(e):\n\treturn render_template('404.html'), 404\n\n#NOT FOUND ERROR\n@app.errorhandler(404)\ndef page_not_found(e):\ntreturn render_template('404.html'), 404\n\n#SERVER INTERNAL ERROR\n@app.errorhandler(500)\ndef server_error(e):\n\treturn render_template('500.html'), 500\n\n#BAD GATEWAY\n@app.errorhandler(502)\ndef server_error_bad_gateway(e):\n\treturn render_template('502.html'), 502\n\n#GATEWAY TIMEOUT\n@app.errorhandler(504)\ndef server_error_gateway_timeout(e):\n\treturn render_template('504.html'), 504\n\n`

    const streamErrorCSS = fs.createWriteStream(`${name}/${name}/static/assets/error/css/style.css`)
        streamErrorCSS.once(`open`, function(fd){
            streamErrorCSS.write(`@import url(https://fonts.googleapis.com/css?family=opensans:500);\n`)
            streamErrorCSS.write(`body{\n\t\t`)
            streamErrorCSS.write(`background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzQ5YzZlNSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzhiZDdkMiIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==");\n\t\t`)
            streamErrorCSS.write(`background: -moz-radial-gradient(#49c6e5, #8bd7d2);\n\t\t`)
            streamErrorCSS.write(`background: -webkit-radial-gradient(#49c6e5, #8bd7d2);\n\t\t`)
            streamErrorCSS.write(`background: radial-gradient(#49c6e5, #8bd7d2);\n\t\t`)
            streamErrorCSS.write(`background-size: 360px 600px;\n\t\t`)
            streamErrorCSS.write(`background-position: center -90%;\n\t\t`)
            streamErrorCSS.write(`color:#fff;\n\t`)
            streamErrorCSS.write(`font-family: 'Open Sans', sans-serif;\n\t\t`)
            streamErrorCSS.write(`max-height:700px;\n\t\t`)
            streamErrorCSS.write(`overflow: hidden;\n\t`)
            streamErrorCSS.write(`}\n`)
            streamErrorCSS.write(`.c{\n\t\t`)
            streamErrorCSS.write(`text-align: center;\n\t\t`)
            streamErrorCSS.write(`display: block;\n\t\t`)
            streamErrorCSS.write(`position: relative;\n\t\t`)
            streamErrorCSS.write(`width:80%;\n\t\t`)
            streamErrorCSS.write(`margin:100px auto;\n\t`)
            streamErrorCSS.write(`}\n`)
            streamErrorCSS.write(`._404{\n\t\t`)
            streamErrorCSS.write(`font-size: 220px;\n\t\t`)
            streamErrorCSS.write(`position: relative;\n\t\t`)
            streamErrorCSS.write(`display: inline-block;\n\t\t`)
            streamErrorCSS.write(`z-index: 2;\n\t\t`)
            streamErrorCSS.write(`height: 250px;\n\t\t`)
            streamErrorCSS.write(`letter-spacing: 15px;\n\t`)
            streamErrorCSS.write(`}\n`)
            streamErrorCSS.write(`._1{\n\t\t`)
            streamErrorCSS.write(`text-align:center;\n\t\t`)
            streamErrorCSS.write(`display:block;\n\t\t`)
            streamErrorCSS.write(`position:relative;\n\t\t`)
            streamErrorCSS.write(`letter-spacing: 12px;\n\t\t`)
            streamErrorCSS.write(`font-size: 4em;\n\t\t`)
            streamErrorCSS.write(`line-height: 80%;\n\t`)
            streamErrorCSS.write(`}\n`)
            streamErrorCSS.write(`._2{\n\t\t`)
            streamErrorCSS.write(`text-align:center;\n\t\t`)
            streamErrorCSS.write(`display:block;\n\t\t`)
            streamErrorCSS.write(`position:relative;\n\t\t`)
            streamErrorCSS.write(`font-size: 20px;\n\t`)
            streamErrorCSS.write(`}\n`)
            streamErrorCSS.write(`._text{\n\t\t`)
            streamErrorCSS.write(`font-size: 70px;\n\t\t`)
            streamErrorCSS.write(`text-align: center;\n\t\t`)
            streamErrorCSS.write(`position: relative;\n\t\t`)
            streamErrorCSS.write(`display: inline-block;\n\t\t`)
            streamErrorCSS.write(`margin: 19px 0px 0px 0px;\n\t\t`)
            streamErrorCSS.write(`z-index: 3;\n\t\t`)
            streamErrorCSS.write(`width: 100%;\n\t\t`)
            streamErrorCSS.write(`line-height: 1.2em;\n\t\t`)
            streamErrorCSS.write(`display: inline-block;\n\t`)
            streamErrorCSS.write(`}\n`)
            streamErrorCSS.write(`.btn{\n\t\t`)
            streamErrorCSS.write(`background-color: rgb( 255, 255, 255 );\n\t\t`)
            streamErrorCSS.write(`position: relative;\n\t\t`)
            streamErrorCSS.write(`display: inline-block;\n\t\t`)
            streamErrorCSS.write(`width: 358px;\n\t\t`)
            streamErrorCSS.write(`padding: 5px;\n\t\t`)
            streamErrorCSS.write(`z-index: 5;\n\t\t`)
            streamErrorCSS.write(`font-size: 25px;\n\t\t`)
            streamErrorCSS.write(`margin:0 auto;\n\t\t`)
            streamErrorCSS.write(`color:#49c6e5;\n\t\t`)
            streamErrorCSS.write(`text-decoration: none;\n\t\t`)
            streamErrorCSS.write(`display: inline-block;\n\t`)
            streamErrorCSS.write(`}\n`)     
            streamErrorCSS.write(`.right{\n\t\t`)
            streamErrorCSS.write(`float:right;\n\t\t`)
            streamErrorCSS.write(`width:60%;\n\t`)
            streamErrorCSS.write(`}\n`)
            streamErrorCSS.write(`hr{\n\t\t`)
            streamErrorCSS.write(`padding: 0;\n\t\t`)
            streamErrorCSS.write(`border: none;\n\t\t`)
            streamErrorCSS.write(`border-top: 5px solid #fff;\n\t\t`)
            streamErrorCSS.write(`color: #fff;\n\t\t`)
            streamErrorCSS.write(`text-align: center;\n\t\t`)
            streamErrorCSS.write(`margin: 0px auto;\n\t\t`)
            streamErrorCSS.write(`width: 420px;\n\t\t`)
            streamErrorCSS.write(`height:10px;\n\t\t`)
            streamErrorCSS.write(`z-index: -10;\n\t`)
            streamErrorCSS.write(`}\n`)   
            streamErrorCSS.write(`hr:after {\n\t\t`)
            streamErrorCSS.write(`content: "\\2022";\n\t\t`)
            streamErrorCSS.write(`display: inline-block;\n\t\t`)
            streamErrorCSS.write(`position: relative;\n\t\t`)
            streamErrorCSS.write(`top: -0.75em;\n\t\t`)
            streamErrorCSS.write(`font-size: 2em;\n\t\t`)
            streamErrorCSS.write(`background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4gPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJncmFkIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY3g9IjUwJSIgY3k9IjUwJSIgcj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzQ5YzZlNSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzhiZDdkMiIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZCkiIC8+PC9zdmc+IA==");`)
            streamErrorCSS.write(`background: -moz-radial-gradient(#49c6e5, #8bd7d2);\n\t\t`)
            streamErrorCSS.write(`background: -webkit-radial-gradient(#49c6e5, #8bd7d2);\n\t\t`)
            streamErrorCSS.write(`background: radial-gradient(#49c6e5, #8bd7d2);\n\t`)
            streamErrorCSS.write(`font-family: 'Open Sans', sans-serif;\n\t\t`)
            streamErrorCSS.write(`background-size: 360px 600px;\n\t\t`)
            streamErrorCSS.write(`background-position: center -90%;\n\t`)
            streamErrorCSS.write(`}\n`)
            streamErrorCSS.write(`.cloud {\n\t\t`)
            streamErrorCSS.write(`width: 350px; height: 120px;\n\t\t`)
            streamErrorCSS.write(`background: #FFF;\n\t\t`)
            streamErrorCSS.write(`background: linear-gradient(top, #FFF 100%);\n\t\t`)
            streamErrorCSS.write(`background: -webkit-linear-gradient(top, #FFF 100%);\n\t\t`)
            streamErrorCSS.write(`background: -moz-linear-gradient(top, #FFF 100%);\n\t\t`)
            streamErrorCSS.write(`background: -ms-linear-gradient(top, #FFF 100%);\n\t\t`)
            streamErrorCSS.write(`background: -o-linear-gradient(top, #FFF 100%);\n\t\t`)
            streamErrorCSS.write(`border-radius: 100px;\n\t\t`)
            streamErrorCSS.write(`-webkit-border-radius: 100px;\n\t\t`)
            streamErrorCSS.write(`-moz-border-radius: 100px;\n\t\t`)
            streamErrorCSS.write(`position: absolute;\n\t\t`)
            streamErrorCSS.write(`margin: 120px auto 20px;\n\t\t`)
            streamErrorCSS.write(`z-index:-1;\n\t\t`)
            streamErrorCSS.write(`transition: ease 1s;\n\t`)
            streamErrorCSS.write(`}\n`)  
            streamErrorCSS.write(`.cloud:after, .cloud:before{\n\t\t`)
            streamErrorCSS.write(`content: '';\n\t\t`)
            streamErrorCSS.write(`position: absolute;\n\t\t`)
            streamErrorCSS.write(`background: #FFF;\n\t\t`)
            streamErrorCSS.write(`z-index: -1;\n\t`)
            streamErrorCSS.write(`}\n`)
            streamErrorCSS.write(`.cloud:after{\n\t\t`)
            streamErrorCSS.write(`width: 100px; height: 100px;\n\t\t`)
            streamErrorCSS.write(`top: -50px; left: 50px;\n\t\t`)
            streamErrorCSS.write(`border-radius: 100px;\n\t\t`)
            streamErrorCSS.write(`-webkit-border-radius: 100px;\n\t\t`)
            streamErrorCSS.write(`-moz-border-radius: 100px;\n\t`)
            streamErrorCSS.write(`}\n`)
            streamErrorCSS.write(`.cloud:before{\n\t\t`)
            streamErrorCSS.write(`width: 180px; height: 180px;\n\t\t`)
            streamErrorCSS.write(`top: -90px; right: 50px;\n\t\t`)
            streamErrorCSS.write(`border-radius: 200px;\n\t\t`)
            streamErrorCSS.write(`-webkit-border-radius: 200px;\n\t\t`)
            streamErrorCSS.write(`-moz-border-radius: 200px;\n\t`)
            streamErrorCSS.write(`}\n`)
            streamErrorCSS.write(`.x1{\n\t\t`)
            streamErrorCSS.write(`top:-50px;\n\t\t`)
            streamErrorCSS.write(`left:100px;\n\t\t`)
            streamErrorCSS.write(`-webkit-transform: scale(0.3);\n\t\t`)
            streamErrorCSS.write(`-moz-transform: scale(0.3);\n\t\t`)
            streamErrorCSS.write(`transform: scale(0.3);\n\t\t`)
            streamErrorCSS.write(`opacity: 0.9;\n\t\t`)
            streamErrorCSS.write(`-webkit-animation: moveclouds 15s linear infinite;\n\t\t`)
            streamErrorCSS.write(`-moz-animation: moveclouds 15s linear infinite;\n\t\t`)
            streamErrorCSS.write(`-o-animation: moveclouds 15s linear infinite;\n\t`)
            streamErrorCSS.write(`}\n`)   
            streamErrorCSS.write(`.x1_5{\n\t\t`)
            streamErrorCSS.write(`top:-80px;\n\t\t`)
            streamErrorCSS.write(`left:250px;\n\t\t`)
            streamErrorCSS.write(`-webkit-transform: scale(0.3);\n\t\t`)
            streamErrorCSS.write(`-moz-transform: scale(0.3);\n\t\t`)
            streamErrorCSS.write(`transform: scale(0.3);\n\t\t`)
            streamErrorCSS.write(`-webkit-animation: moveclouds 17s linear infinite;\n\t\t`)
            streamErrorCSS.write(`-moz-animation: moveclouds 17s linear infinite;\n\t\t`)
            streamErrorCSS.write(`-o-animation: moveclouds 17s linear infinite;\n\t`)
            streamErrorCSS.write(`}\n`)  
            streamErrorCSS.write(`.x2{\n\t\t`)
            streamErrorCSS.write(`top:250px;\n\t\t`)
            streamErrorCSS.write(`left:30px;\n\t\t`)
            streamErrorCSS.write(`-webkit-transform: scale(0.6);\n\t\t`)
            streamErrorCSS.write(`-moz-transform: scale(0.6);\n\t\t`)
            streamErrorCSS.write(`transform: scale(0.6);\n\t\t`)
            streamErrorCSS.write(`opacity: 0.6;\n\t\t`)
            streamErrorCSS.write(`-webkit-animation: moveclouds 25s linear infinite;\n\t\t`)
            streamErrorCSS.write(`-moz-animation: moveclouds 25s linear infinite;\n\t\t`)
            streamErrorCSS.write(`-o-animation: moveclouds 25s linear infinite;\n\t`)
            streamErrorCSS.write(`}\n`)  
            streamErrorCSS.write(`.x3{\n\t\t`)
            streamErrorCSS.write(`bottom:-70px;\n\t\t`)
            streamErrorCSS.write(`left:250px;\n\t\t`)
            streamErrorCSS.write(`-webkit-transform: scale(0.6);\n\t\t`)
            streamErrorCSS.write(`-moz-transform: scale(0.6);\n\t\t`)
            streamErrorCSS.write(`transform: scale(0.6);\n\t\t`)
            streamErrorCSS.write(`opacity: 0.8;\n\t\t`)
            streamErrorCSS.write(`-webkit-animation: moveclouds 25s linear infinite;\n\t\t`)
            streamErrorCSS.write(`-moz-animation: moveclouds 25s linear infinite;\n\t\t`)
            streamErrorCSS.write(`-o-animation: moveclouds 25s linear infinite;\n\t`)
            streamErrorCSS.write(`}\n`) 
            streamErrorCSS.write(`.x4{\n\t\t`)
            streamErrorCSS.write(`bottom:20px;\n\t\t`)
            streamErrorCSS.write(`left:470px;\n\t\t`)
            streamErrorCSS.write(`-webkit-transform: scale(0.75);\n\t\t`)
            streamErrorCSS.write(`-moz-transform: scale(0.75);\n\t\t`)
            streamErrorCSS.write(`transform: scale(0.75);\n\t\t`)
            streamErrorCSS.write(`opacity: 0.75;\n\t\t`)
            streamErrorCSS.write(`-webkit-animation: moveclouds 18s linear infinite;\n\t\t`)
            streamErrorCSS.write(`-moz-animation: moveclouds 18s linear infinite;\n\t\t`)
            streamErrorCSS.write(`-o-animation: moveclouds 18s linear infinite;\n\t`)
            streamErrorCSS.write(`}\n`) 
            streamErrorCSS.write(`.x4{\n\t\t`)
            streamErrorCSS.write(`bottom:20px;\n\t\t`)
            streamErrorCSS.write(`left:470px;\n\t\t`)
            streamErrorCSS.write(`-webkit-transform: scale(0.75);\n\t\t`)
            streamErrorCSS.write(`-moz-transform: scale(0.75);\n\t\t`)
            streamErrorCSS.write(`transform: scale(0.75);\n\t\t`)
            streamErrorCSS.write(`opacity: 0.75;\n\t\t`)
            streamErrorCSS.write(`-webkit-animation: moveclouds 18s linear infinite;\n\t\t`)
            streamErrorCSS.write(`-moz-animation: moveclouds 18s linear infinite;\n\t\t`)
            streamErrorCSS.write(`-o-animation: moveclouds 18s linear infinite;\n\t`)
            streamErrorCSS.write(`}\n`)
            streamErrorCSS.write(`.x5{\n\t\t`)
            streamErrorCSS.write(`top:300px;\n\t\t`)
            streamErrorCSS.write(`left:200px;\n\t\t`)
            streamErrorCSS.write(`-webkit-transform: scale(0.5);\n\t\t`)
            streamErrorCSS.write(`-moz-transform: scale(0.5);\n\t\t`)
            streamErrorCSS.write(`transform: scale(0.5);\n\t\t`)
            streamErrorCSS.write(`opacity: 0.8;\n\t\t`)
            streamErrorCSS.write(`-webkit-animation: moveclouds 20s linear infinite;\n\t\t`)
            streamErrorCSS.write(`-moz-animation: moveclouds 20s linear infinite;\n\t\t`)
            streamErrorCSS.write(`-o-animation: moveclouds 20s linear infinite;\n\t`)
            streamErrorCSS.write(`}\n`)
            streamErrorCSS.write(`@-webkit-keyframes moveclouds {\n\t\t`)
            streamErrorCSS.write(`0% {margin-left: 1000px;}\n\t\t`)
            streamErrorCSS.write(`100% {margin-left: -1000px;}\n\t`)
            streamErrorCSS.write(`}\n`)
            streamErrorCSS.write(`@-moz-keyframes moveclouds {\n\t\t`)
            streamErrorCSS.write(`0% {margin-left: 1000px;}\n\t\t`)
            streamErrorCSS.write(`100% {margin-left: -1000px;}\n\t`)
            streamErrorCSS.write(`}\n`)
            streamErrorCSS.write(`@-o-keyframes moveclouds {\n\t\t`)
            streamErrorCSS.write(`0% {margin-left: 1000px;}\n\t\t`)
            streamErrorCSS.write(`100% {margin-left: -1000px;}\n\t`)
            streamErrorCSS.write(`}\n`)
        })

    const streamAppFile = fs.createWriteStream(`${name}/run.py`)
        streamAppFile.once(`open`, function(fd) {
        streamAppFile.write(`from ${name} import app\n`)
        streamAppFile.write(`\n`)
        streamAppFile.write(`if __name__ == "__main__":\n`)
        streamAppFile.write(`\tapp.run(debug=True, port=8700)`)
        streamAppFile.end();
    })


    const streamAuthFile = fs.createWriteStream(`${name}/Auth.py`)
        streamAuthFile.once(`open`, function(fd) {
        streamAuthFile.write(`import bcrypt\n\n`)
        streamAuthFile.write(`def get_hash_for_user(user):\n\t`)
        streamAuthFile.write(`return user.password\n\n`)
        streamAuthFile.write(`def get_salt_for_user(user):\n\t`)
        streamAuthFile.write(`return user.salt\n\n`)
        streamAuthFile.write(`def create_password_hash(password):\n\t`)
        streamAuthFile.write(`salt = bcrypt.gensalt(16)\n\t`)
        streamAuthFile.write(`hashed_pass = bcrypt.hashpw(password, salt)\n\t`)
        streamAuthFile.write(`return hashed_pass, salt\n\n`)
        streamAuthFile.write(`def check_hash_for_user(password, user):\n\t`)
        streamAuthFile.write(`stored_hash = get_hash_for_user(user)\n\t`)
        streamAuthFile.write(`generated_hash = recreate_hash(password, get_hash_for_user(user))\n\t`)
        streamAuthFile.write(`return hashed_pass, salt\n\n`)
        streamAuthFile.write(`def recreate_hash(password, salt):\n\t`)
        streamAuthFile.write(`hash_pass = bcrypt.hashpw(str(password), str(salt))\n\t`)
        streamAuthFile.write(`return hash_pass\n\n`)
        streamAuthFile.write(`def validate(user, password):\n\t`)
        streamAuthFile.write(`if(check_hash_for_user(password, user)):\n\t\t`)
        streamAuthFile.write(`return True\n\t `)
        streamAuthFile.write(`else:\n\t\t`)
        streamAuthFile.write(`return False`)
        streamAuthFile.end();
    })

    const streamProcFile = fs.createWriteStream(`${name}/Procfile`)
        streamProcFile.once(`open`, function(fd) {
        streamProcFile.write(`web: gunicorn ${name}:app --preload`)
        streamProcFile.end();
    })

    const streamViews = fs.createWriteStream(`${name}/${name}/views.py`)
        streamViews.once(`open`, function(fd){
            streamViews.write(viewsdata)
            streamViews.write(`#HOME PAGE INDEX`)
            streamViews.write(`@app.route("/", methods=['GET'])`)
            streamViews.write(`def index():\n\t`)
            streamViews.write(`return render_template("index.html")`)
            streamViews.end()
        })

    const streamInit = fs.createWriteStream(`${name}/${name}/__init__.py`)
        streamInit.once(`open`, function(fd){
            streamInit.write(viewsdata)
            streamInit.write(`from flask import Flask\n`)
            streamInit.write(`from flask_sqlalchemy import SQLAlchemy\n`)
            streamInit.write(`from flask_login import LoginManager\n`)
            streamInit.write(`from ime import models\n`)
            streamInit.write(`from .views import *\n\n`)
            streamInit.write(`lm = LoginManager()\n`)
            streamInit.write(`app = Flask(__name__, instance_relative_config=Tr\n`)
            streamInit.write(`app.config.from_object('config')\n`)
            streamInit.write(`app.config.update(\n\t`)
            streamInit.write(`SECRETE_KEY = '${name}2019',\n\t`)
            streamInit.write(`SQLALCHEMY_TRACK_MODIFICATIONS = False\n`)
            streamInit.write(`)\n`)
            streamInit.write(`app.config.from_pyfile('config.py')\n\n`)
            streamInit.write(`db = SQLAlchemy(app)\n`)
            streamInit.write(`lm.init_app(app)\n`)
            streamInit.end()
        })

    const streamModel = fs.createWriteStream(`${name}/${name}/models.py`)
        streamModel.once(`open`, function(fd){
            streamModel.write(`import datetime\n`)
            streamModel.write(`from datetime import datetime\n`)
            streamModel.write(`from flask_login import UserMixin\n`)
            streamModel.write(`from sqlalchemy.orm import backref\n`)
            streamModel.write(`from sqlalchemy.dialects.postgresql import JSON\n`)
            streamModel.write(`from werkzeug.security import check_password_hash, generate_password_hash\n\n`)
            streamModel.write(`from . import db, lm\n\n`)
            streamModel.write(`class User(db.Model, UserMixin):\n\t`)
            streamModel.write(`__tablename__ = 'users'\n\t`)
            streamModel.write(`""" User model defines the user tabel in the database """\n\t`)
            streamModel.write(`id = db.Column(db.Integer, primary_key=True)\n\t`)
            streamModel.write(`username = db.Column(db.String(120), unique=True, index=True, nullable=False)\n\t`)
            streamModel.write(`first_name = db.Column(db.String(120))\n\t`)
            streamModel.write(`surname = db.Column(db.String(120))\n\t`)
            streamModel.write(`email = db.Column(db.String(120), unique=True,index=True)\n\t`)
            streamModel.write(`salt = db.Column(db.String(72))`)
            streamModel.write(`password_hash = db.Column(db.String(200))\n\t`)
            streamModel.write(`dob = db.Column(db.Date)\n\t\n\n`)
            streamModel.write(`def save(self):\n\t\t`)
            streamModel.write(`db.session.add(self)\n\t\t`)
            streamModel.write(`db.session.commit()\n\t\n\n`)
            streamModel.write(`@staticmethod\n\t`)
            streamModel.write(`@lm.user_loader\n\t`)
            streamModel.write(`def load_user(user_id):\n\t\t`)
            streamModel.write(`return User.query.get(user_id)\n\t\n\n`)
            streamModel.write(`def is_authenticate(self):\n\t\t`)
            streamModel.write(`return True\n\t\n\n`)
            streamModel.write(`def is_active(self):\n\t\t`)
            streamModel.write(`return True\n\t\n\n`)
            streamModel.write(`def def is_anonymous(self):\n\t\t`)
            streamModel.write(`return False\n\t\n\n`)
            streamModel.write(`def get_id(self):\n\t\t`)
            streamModel.write(`return False\n\t\n\n`)
            streamModel.write(`def __repr__(self):\n\t\t`)
            streamModel.write(`return '<User %r>' % self.username\n\t\n\n`)
            streamModel.write(`@property\n\t`)
            streamModel.write(`def password(self):\n\t\t`)
            streamModel.write(`raise AttributeError('password: write-only field')\n\t\n\n`)
            streamModel.write(`@password.setter\n\t`)
            streamModel.write(`def password(self, password):\n\t\t`)
            streamModel.write(`self.password_hash = generate_password_hash(password)\n\t\n\n`)
            streamModel.write(`def check_password(self, password):\n\t\t`)
            streamModel.write(`return check_password_hash(self.password_hash, password)\n\t\n\n`)
            streamModel.write(`@staticmethod\n\t`)
            streamModel.write(`def get_by_email(email):\n\t\t`)
            streamModel.write(`return User.query.filter_by(email=email).first()\n\t\n\n`)
        })

    const streamManage = fs.createWriteStream(`${name}/manage.py`)
        streamManage.once(`open`, function(fd){
            streamManage.write(`import os\n`)
            streamManage.write(`from flask_script import Manager\n`)
            streamManage.write(`from flask_migrate import Migrate, MigrateCommand\n\n`)
            streamManage.write(`from ${name} import app, db\n\n`)
            streamManage.write(`app.config.from_object(os.environ['APP_SETTINGS'])\n\n`)
            streamManage.write(`migrate = Migrate(app, db)\n`)
            streamManage.write(`manager = Manager(app)\n\n`)
            streamManage.write(`manager.add_command('db', MigrateCommand)\n\n\n`)
            streamManage.write(`if __name__ == '__main__':\n\t`)
            streamManage.write(`imanager.run()\n`)
        })  

    const streamDBcreate = fs.createWriteStream(`${name}/db_create.py`)
        streamDBcreate.once(`open`, function(fd){
            streamDBcreate.write(`from ime import db\n\ndb.create_all()`)
    })

    const streamRequirements = fs.createWriteStream(`${name}/requirements.txt`)
        streamRequirements.once(`open`, function(fd){
            streamRequirements.write(`alembic==1.0.3\n`)
            streamRequirements.write(`astroid==2.0.4\n`)
            streamRequirements.write(`autopep8==1.4.3\n`)
            streamRequirements.write(`bcrypt==3.1.6\n`)
            streamRequirements.write(`cffi==1.12.\n`)
            streamRequirements.write(`Click==7.0\n`)
            streamRequirements.write(`colorama==0.4.0\n`)
            streamRequirements.write(`Flask==1.0.2\n`)
            streamRequirements.write(`Flask-Login==0.4.1\n`)
            streamRequirements.write(`Flask-Migrate==2.3.0\n`)
            streamRequirements.write(`Flask-Script==2.0.6\n`)
            streamRequirements.write(`Flask-SQLAlchemy==2.3.2\n`)
            streamRequirements.write(`Flask-WTF==0.14.2\n`)
            streamRequirements.write(`gunicorn==19.9.0\n`)
            streamRequirements.write(`isort==4.3.4\n`)
            streamRequirements.write(`itsdangerous==1.1.0\n`)
            streamRequirements.write(`Jinja2==2.10\n`)
            streamRequirements.write(`lazy-object-proxy==1.3.\n`)
            streamRequirements.write(`Mako==1.0.7\n`)
            streamRequirements.write(`MarkupSafe==1.1.0\n`)
            streamRequirements.write(`mccabe==0.6.1\n`)
            streamRequirements.write(`nose==1.3.7\n`)
            streamRequirements.write(`numpy==1.16.3\n`)
            streamRequirements.write(`psycopg2==2.7.6.1\n`)
            streamRequirements.write(`pycodestyle==2.4.0\n`)
            streamRequirements.write(`pycparser==2.19\n`)
            streamRequirements.write(`pylint==2.1.1\n`)
            streamRequirements.write(`PySide2==5.12.2\n`)
            streamRequirements.write(`python-dateutil==2.7.5\n`)
            streamRequirements.write(`python-editor==1.0.3\n`)
            streamRequirements.write(`shiboken2==5.12.2\n`)
            streamRequirements.write(`six==1.11.0\n`)
            streamRequirements.write(`SQLAlchemy==1.2.14\n`)
            streamRequirements.write(`typed-ast==1.1.0\n`)
            streamRequirements.write(`Werkzeug==0.14.1\n`)
    })

    const streamConfig1 = fs.createWriteStream(`${name}/instance/config.py`)
        streamConfig1.once(`open`, function(fd){
            streamConfig1.write(`import os\n`)
            streamConfig1.write(`basedir = os.path.abspath(os.path.dirname(__file__))\n\n\n`)
            streamConfig1.write(`import os\n`)
            streamConfig1.write(`class Config(object):\n\t`)
            streamConfig1.write(`DEBUG = False\n\t`)
            streamConfig1.write(`TESTING = False\n\t`)
            streamConfig1.write(`CSRF_ENABLED = True\n\t`)
            streamConfig1.write(`SECRET_KEY = 'theIme2019#'\n\t`)
            streamConfig1.write(`SQLALCHEMY_DATABASE_URI = os.environ['DATABASE_URL']\n\n`)
            streamConfig1.write(`class ProductionConfig(Config):\n\t`)
            streamConfig1.write(`DEBUG = False\n\n`)
            streamConfig1.write(`class StagingConfig(Config):\n\t`)
            streamConfig1.write(`DEVELOPMENT = True\n\t`)
            streamConfig1.write(`DEBUG = False\n\n`)
            streamConfig1.write(`class DevelopmentConfig(Config):\n\t`)
            streamConfig1.write(`DEVELOPMENT = True\n\t`)
            streamConfig1.write(`DEBUG = False\n\n`)
            streamConfig1.write(`class TestingConfig(Config):\n\t`)
            streamConfig1.write(`TESTING = True\n\n`)
        })

    const streamReadMe = fs.createWriteStream(`${name}/README.md`)
        streamReadMe.once(`open`, function(fd){
            streamReadMe.write(`# ${name} App\n\n`)
            streamReadMe.write(`This Web Application Powered by VillageWork`)
        })

    const streamConfig = fs.createWriteStream(`${name}/config.py`)
    streamConfig.once(`open`, function(fd){
        streamConfig.write(`import os\n`)
        streamConfig.write(`basedir = os.path.abspath(os.path.dirname(__file__))\n\n\n`)
        streamConfig.write(`import os\n`)
        streamConfig.write(`class Config(object):\n\t`)
        streamConfig.write(`DEBUG = False\n\t`)
        streamConfig.write(`TESTING = False\n\t`)
        streamConfig.write(`CSRF_ENABLED = True\n\t`)
        streamConfig.write(`SECRET_KEY = 'theIme2019#'\n\t`)
        streamConfig.write(`SQLALCHEMY_DATABASE_URI = os.environ['DATABASE_URL']\n\n`)
        streamConfig.write(`class ProductionConfig(Config):\n\t`)
        streamConfig.write(`DEBUG = False\n\n`)
        streamConfig.write(`class StagingConfig(Config):\n\t`)
        streamConfig.write(`DEVELOPMENT = True\n\t`)
        streamConfig.write(`DEBUG = False\n\n`)
        streamConfig.write(`class DevelopmentConfig(Config):\n\t`)
        streamConfig.write(`DEVELOPMENT = True\n\t`)
        streamConfig.write(`DEBUG = False\n\n`)
        streamConfig.write(`class TestingConfig(Config):\n\t`)
        streamConfig.write(`TESTING = True\n\n`)
    })

    const streamindex = fs.createWriteStream(`${name}/${name}/templates/index.html`)
        streamindex.once(`open`, function(fd) {
            streamindex.write(`<!DOCTYPE html>\n<html lang="en">\n`)   
            streamindex.write(`<head>\n\t`)
            streamindex.write(`<meta charset="UTF-8">\n\t`)  
            streamindex.write(`<title>Home</title>\n\t`)   
            streamindex.write(`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">\n`) 
            streamindex.write(`</head>\n`)    
            streamindex.write(`<body>\n\t`)
            streamindex.write(`<div>\n\t\t`)
            streamindex.write(`<div >400</div>\n\t\t`)
            streamindex.write(`<hr>\n\t\t`)
            streamindex.write(`<div>Demo </div>n\t\t`)
            streamindex.write(`<div>APP TEST</div>n\t\t`)
            streamindex.write(`<a class='btn' href='/'>BACK TO ${name} APP</a>n\t`)
            streamindex.write(`</div>`)
            streamindex.write(`</body>`)
            streamindex.write(`</html>`)
    })

    const stream400 = fs.createWriteStream(`${name}/${name}/templates/400.html`)
        stream400.once(`open`, function(fd) {
            stream400.write(`<!DOCTYPE html>\n<html lang="en">\n`)   
            stream400.write(`<head>\n\t`)
            stream400.write(`<meta charset="UTF-8">\n\t`)  
            stream400.write(`<title>400 Error</title>\n\t`)   
            stream400.write(`<link rel="stylesheet" href="../static/assets/error/css/style.css">\n`) 
            stream400.write(`</head>\n`)    
            stream400.write(`<body>\n\t`)
            stream400.write(`<div id="clouds">\n\t\t`)
            stream400.write(`<div class="cloud x1"></div>\n\t\t`) 
            stream400.write(`<div class="cloud x1_5"></div>\n\t\t`)
            stream400.write(`<div class="cloud x2"></div>\n\t\t`)  
            stream400.write(`<div class="cloud x3"></div>\n\t\t`)
            stream400.write(`<div class="cloud x4"></div>\n\t\t`)
            stream400.write(`<div class="cloud x5"></div>\n\t`)
            stream400.write(`</div>\n\t`)
            stream400.write(`<div class='c'>\n\t\t`)
            stream400.write(`<div class='_404'>400</div>\n\t\t`)
            stream400.write(`<hr>\n\t\t`)
            stream400.write(`<div class='_1'>THE PAGE</div>n\t\t`)
            stream400.write(`<div class='_2'>BAD REQUEST</div>n\t\t`)
            stream400.write(`<a class='btn' href='/'>BACK TO ${name} APP</a>n\t`)
            stream400.write(`</div>`)
            stream400.write(`</body>`)
            stream400.write(`</html>`)
    })

    const stream403 = fs.createWriteStream(`${name}/${name}/templates/403.html`)
    stream403.once(`open`, function(fd) {
        stream403.write(`<!DOCTYPE html>\n<html lang="en">\n`)   
        stream403.write(`<head>\n\t`)
        stream403.write(`<meta charset="UTF-8">\n\t`)  
        stream403.write(`<title>403 Error</title>\n\t`)   
        stream403.write(`<link rel="stylesheet" href="../static/assets/error/css/style.css">\n`) 
        stream403.write(`</head>\n`)    
        stream403.write(`<body>\n\t`)
        stream403.write(`<div id="clouds">\n\t\t`)
        stream403.write(`<div class="cloud x1"></div>\n\t\t`) 
        stream403.write(`<div class="cloud x1_5"></div>\n\t\t`)
        stream403.write(`<div class="cloud x2"></div>\n\t\t`)  
        stream403.write(`<div class="cloud x3"></div>\n\t\t`)
        stream403.write(`<div class="cloud x4"></div>\n\t\t`)
        stream403.write(`<div class="cloud x5"></div>\n\t`)
        stream403.write(`</div>\n\t`)
        stream403.write(`<div class='c'>\n\t\t`)
        stream403.write(`<div class='_404'>403</div>\n\t\t`)
        stream403.write(`<hr>\n\t\t`)
        stream403.write(`<div class='_1'>THE PAGE</div>n\t\t`)
        stream403.write(`<div class='_2'>FORBIDDEN REQUEST</div>n\t\t`)
        stream403.write(`<a class='btn' href='/'>BACK TO ${name} APP</a>n\t`)
        stream403.write(`</div>\n`)
        stream403.write(`</body>\n`)
        stream403.write(`</html>`)
    })

    const stream404 = fs.createWriteStream(`${name}/${name}/templates/404.html`)
        stream404.once(`open`, function(fd) {
            stream404.write(`<!DOCTYPE html>\n<html lang="en">\n`)   
            stream404.write(`<head>\n\t`)
            stream404.write(`<meta charset="UTF-8">\n\t`)  
            stream404.write(`<title>404 Error</title>\n\t`)   
            stream404.write(`<link rel="stylesheet" href="../static/assets/error/css/style.css">\n`) 
            stream404.write(`</head>\n`)    
            stream404.write(`<body>\n\t`)
            stream404.write(`<div id="clouds">\n\t\t`)
            stream404.write(`<div class="cloud x1"></div>\n\t\t`) 
            stream404.write(`<div class="cloud x1_5"></div>\n\t\t`)
            stream404.write(`<div class="cloud x2"></div>\n\t\t`)  
            stream404.write(`<div class="cloud x3"></div>\n\t\t`)
            stream404.write(`<div class="cloud x4"></div>\n\t\t`)
            stream404.write(`<div class="cloud x5"></div>\n\t`)
            stream404.write(`</div>\n\t`)
            stream404.write(`<div class='c'>\n\t\t`)
            stream404.write(`<div class='_404'>404</div>\n\t\t`)
            stream404.write(`<hr>\n\t\t`)
            stream404.write(`<div class='_1'>THE PAGE</div>n\t\t`)
            stream404.write(`<div class='_2'>WAS NOT FOUND</div>n\t\t`)
            stream404.write(`<a class='btn' href='/'>BACK TO ${name} APP</a>n\t`)
            stream404.write(`</div>\n`)
            stream404.write(`</body>\n`)
            stream404.write(`</html>`)
    })

    const stream405 = fs.createWriteStream(`${name}/${name}/templates/405.html`)
    stream405.once(`open`, function(fd) {
        stream405.write(`<!DOCTYPE html>\n<html lang="en">\n`)   
        stream405.write(`<head>\n\t`)
        stream405.write(`<meta charset="UTF-8">\n\t`)  
        stream405.write(`<title>400 Error</title>\n\t`)   
        stream405.write(`<link rel="stylesheet" href="../static/assets/error/css/style.css">\n`) 
        stream405.write(`</head>\n`)    
        stream405.write(`<body>\n\t`)
        stream405.write(`<div id="clouds">\n\t\t`)
        stream405.write(`<div class="cloud x1"></div>\n\t\t`) 
        stream405.write(`<div class="cloud x1_5"></div>\n\t\t`)
        stream405.write(`<div class="cloud x2"></div>\n\t\t`)  
        stream405.write(`<div class="cloud x3"></div>\n\t\t`)
        stream405.write(`<div class="cloud x4"></div>\n\t\t`)
        stream405.write(`<div class="cloud x5"></div>\n\t`)
        stream405.write(`</div>\n\t`)
        stream405.write(`<div class='c'>\n\t\t`)
        stream405.write(`<div class='_404'>405</div>\n\t\t`)
        stream405.write(`<hr>\n\t\t`)
        stream405.write(`<div class='_1'>THE PAGE</div>n\t\t`)
        stream405.write(`<div class='_2'>NOT ALLOWED</div>n\t\t`)
        stream405.write(`<a class='btn' href='/'>BACK TO ${name} APP</a>n\t`)
        stream405.write(`</div>\n`)
        stream405.write(`</body>\n`)
        stream405.write(`</html>`)
    })

    const stream500 = fs.createWriteStream(`${name}/${name}/templates/500.html`)
        stream500.once(`open`, function(fd) {
            stream500.write(`<!DOCTYPE html>\n<html lang="en">\n`)   
            stream500.write(`<head>\n\t`)
            stream500.write(`<meta charset="UTF-8">\n\t`)  
            stream500.write(`<title>500 Error</title>\n\t`)   
            stream500.write(`<link rel="stylesheet" href="../static/assets/error/css/style.css">\n`) 
            stream500.write(`</head>\n`)    
            stream500.write(`<body>\n\t`)
            stream500.write(`<div id="clouds">\n\t\t`)
            stream500.write(`<div class="cloud x1"></div>\n\t\t`) 
            stream500.write(`<div class="cloud x1_5"></div>\n\t\t`)
            stream500.write(`<div class="cloud x2"></div>\n\t\t`)  
            stream500.write(`<div class="cloud x3"></div>\n\t\t`)
            stream500.write(`<div class="cloud x4"></div>\n\t\t`)
            stream500.write(`<div class="cloud x5"></div>\n\t`)
            stream500.write(`</div>\n\t`)
            stream500.write(`<div class='c'>\n\t\t`)
            stream500.write(`<div class='_404'>500</div>\n\t\t`)
            stream500.write(`<hr>\n\t\t`)
            stream500.write(`<div class='_1'>SERVER</div>n\t\t`)
            stream500.write(`<div class='_2'>ERROR</div>n\t\t`)
            stream500.write(`<a class='btn' href='/'>BACK TO ${name} APP</a>n\t`)
            stream500.write(`</div>\n`)
            stream500.write(`</body>\n`)
            stream500.write(`</html>`)
    })

    const stream502 = fs.createWriteStream(`${name}/${name}/templates/502.html`)
        stream502.once(`open`, function(fd) {
            stream502.write(`<!DOCTYPE html>\n<html lang="en">\n`)   
            stream502.write(`<head>\n\t`)
            stream502.write(`<meta charset="UTF-8">\n\t`)  
            stream502.write(`<title>502 Error</title>\n\t`)   
            stream502.write(`<link rel="stylesheet" href="../static/assets/error/css/style.css">\n`) 
            stream502.write(`</head>\n`)    
            stream502.write(`<body>\n\t`)
            stream502.write(`<div id="clouds">\n\t\t`)
            stream502.write(`<div class="cloud x1"></div>\n\t\t`) 
            stream502.write(`<div class="cloud x1_5"></div>\n\t\t`)
            stream502.write(`<div class="cloud x2"></div>\n\t\t`)  
            stream502.write(`<div class="cloud x3"></div>\n\t\t`)
            stream502.write(`<div class="cloud x4"></div>\n\t\t`)
            stream502.write(`<div class="cloud x5"></div>\n\t`)
            stream502.write(`</div>\n\t`)
            stream502.write(`<div class='c'>\n\t\t`)
            stream502.write(`<div class='_404'>502</div>\n\t\t`)
            stream502.write(`<hr>\n\t\t`)
            stream502.write(`<div class='_1'>THE PAGE</div>n\t\t`)
            stream502.write(`<div class='_2'>BAD GATEWAY</div>n\t\t`)
            stream502.write(`<a class='btn' href='/'>BACK TO ${name} APP</a>n\t`)
            stream502.write(`</div>\n`)
            stream502.write(`</body>\n`)
            stream502.write(`</html>`)
    })

    const stream504 = fs.createWriteStream(`${name}/${name}/templates/504.html`)
        stream504.once(`open`, function(fd) {
            stream504.write(`<!DOCTYPE html>\n<html lang="en">\n`)   
            stream504.write(`<head>\n\t`)
            stream504.write(`<meta charset="UTF-8">\n\t`)  
            stream504.write(`<title>504 Error</title>\n\t`)   
            stream504.write(`<link rel="stylesheet" href="../static/assets/error/css/style.css">\n`) 
            stream504.write(`</head>\n`)    
            stream504.write(`<body>\n\t`)
            stream504.write(`<div id="clouds">\n\t\t`)
            stream504.write(`<div class="cloud x1"></div>\n\t\t`) 
            stream504.write(`<div class="cloud x1_5"></div>\n\t\t`)
            stream504.write(`<div class="cloud x2"></div>\n\t\t`)  
            stream504.write(`<div class="cloud x3"></div>\n\t\t`)
            stream504.write(`<div class="cloud x4"></div>\n\t\t`)
            stream504.write(`<div class="cloud x5"></div>\n\t`)
            stream504.write(`</div>\n\t`)
            stream504.write(`<div class='c'>\n\t\t`)
            stream504.write(`<div class='_404'>504</div>\n\t\t`)
            stream504.write(`<hr>\n\t\t`)
            stream504.write(`<div class='_1'>THE PAGE</div>n\t\t`)
            stream504.write(`<div class='_2'>GATEWAY TIMEOUT</div>n\t\t`)
            stream504.write(`<a class='btn' href='/'>BACK TO ${name} APP</a>n\t`)
            stream504.write(`</div>\n`)
            stream504.write(`</body>\n`)
            stream504.write(`</html>`)
    })
}

//Empty project Scafold
let emptypro = (name) => {
    let winenv = () => {
        coreScafolding(name)
        writeFiles(name)
        cp.exec(`cd ${name} && git init && git add . && git commit -m "Initial Commit, Using VillageWorkCLI" `, (err, stdout, stderr)=>{
            if(err) throw err
            console.log(stdout)
            console.log(stderr)
        })
        //CHECK FOR INTERNET CONNECTIVITY
        internetAvailable().then(function(){
            cp.execSync(`pip install -r requirements.txt`, (err, stdout, stderr) => {
                if(err) throw err
                console.log(stdout)
                console.log(stderr)
            })

            cp.execSync(`npm i -g heroku`, (err, std), (err, stdout, stderr) => {
                if(err) throw err
                console.log(stdout)
                console.log(stderr)
            })

            cp.execSync(`heroku login -i`, (err, stdout, stderr) => {
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
        }).catch(function(){
            noConnectivity()
            websuccess(name)
        })  
    }

    let unixenv = () => {
        coreScafolding(name)
        writeFiles(name)
        cp.exec(`cd ${name} && git init && git add . && git commit -m "Initial Commit, Using VillageWorkCLI" `, (err, stdout, stderr)=>{
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

    //CHECK FOR SYSTEM ENVIRONMENT
    if(isWin){
        winenv()
    }
    else{
        unixenv()
    }
}
exports.py=  {emptypro}


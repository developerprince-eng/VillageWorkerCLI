let cp = require(`child_process`);

let cmds = {
    bash: `bash`,
    cmd: `cmd`,
    npm: `npm`,
    git: `git`,
    heroku: `heroku`
};

let options = {
    version: `--version` || `-v`,
    angular: `install -g @angular/cli`,
    newng: `ng new`,
    newreact:`npx create-react-app`,
    vue: `i create-vue-app -g`,
    newvue: `create-vue-app`
};

let folderOptions = {
    model: `mkdir models`,
    view: `mkdir views`,
    controller: `mkdir controllers`
};

let models = {
    user: `type nul> models/user.model.js`,
    password: `type nul> modes/password.model.js`,
    log: `type nul> models/logs.model.js`
}

let controllers = {
    user: `type nul> controllers/user.controller.js`,
    password: `type nul> contrllers/password.controller.js`,
    log: `type nul> controllers/logs.controller.js`
}

//Success Console Message 
let websuccess = ()=> {
    console.log(`\x1b[36m%s\x1b[0m`, name, `Web Application Scafolded Successfully...\n`,`\x1b[33m`,`Enjoy!!!`,`\x1b[0m`);
} 

//Check for Winows Environment
let winev = /^win/.test(process.platform) ? `npm.cmd` : cmds.npm;
let winev2 = /^win/.test(process.platform) ? `cmd` : cmds.npm;

//Empty project Scafold
let emptypro = (name) => {
    let child1 = cp.spawn( winev2 || cmds.bash, [folderOptions.model]);
    let child2 = cp.spawn( winev2 || cmds.bash, [folderOptions.view]);
    let child3 = cp.spawn( winev2 || cmds.bash, [folderOptions.controller]);
    let child4 = cp.spawn( winev2 || cmds.bash, [models.user]);
    let child5 = cp.spawn( winev2 || cmds.bash, [models.password]);
    let child6 = cp.spawn( winev2 || cmds.bash, [models.log]);

    websuccess();
}

//Scafold Angular Application
let angular = (name)=> {
    let child1 = cp.spawn( winev || cmds.npm, [options.angular]);
    
    child1.stdout.on(`data`, (data) => {
        console.log(`progress: \n${data}`);
    });

    let child2 = cp.spawn( winev || cmds.npm, [options.newng, name ]);

    child2.stdout.on(`data`, (data) => {
        console.log(`new angular setup: \n${data}`);
        websuccess();
    });    
};

//Scafold React Application
let react = (name)=> {
    let child1 = cp.spawn( winev || cmds.npm, [options.react, name]);

    child1.stdout.on(`data`, (data) => {
        console.log(`new reactapp setup: \n${data}`);
        websuccess();
    });
};

//Scafold Vue Application
let vue = (name)=> {
    let child1 = cp.spawn( winev || cmds.npm, [options.vue]);

    child1.stdout.on(`data`, (data) => {
        console.log(`progress: \n${data}`);
    });

    let child2 = cp.spawn( winev || cmds.npm, [options.newvue, name]);

    child2.stdout.on(`data`, (data) => {
        console.log(`new vueapp setup: \n${data}`);
        websuccess();
    });
};

exports.ndjs =  { angular, react , vue, emptypro}


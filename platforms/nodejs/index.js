const cp = require(`child_process`);

const cmds = {
    bash: `bash`,
    cmd: `cmd`,
    npm: `npm`,
    git: `git`,
    heroku: `heroku`
};

const options = {
    version: `--version` || `-v`,
    angular: `install -g @angular/cli`,
    newng: `ng new`,
    newreact:`npx create-react-app`,
    vue: `i create-vue-app -g`,
    newvue: `create-vue-app`,
    mobile: `install -g ionic`,
    newmobile: `ionic start`
};

const folderOptions = {
    model: `mkdir models`,
    view: `mkdir views`,
    controller: `mkdir controllers`
};

const models = {
    user: `type nul> models/user.model.js`,
    password: `type nul> modes/password.model.js`,
    log: `type nul> models/logs.model.js`
}

const controllers = {
    user: `type nul> controllers/user.controller.js`,
    password: `type nul> contrllers/password.controller.js`,
    log: `type nul> controllers/logs.controller.js`
}

//Success Console Message 
const websuccess = (name)=> {
    console.log(`\x1b[36m%s\x1b[0m`, name, `Web Application Scafolded Successfully...\n`,`\x1b[33m`,`Enjoy!!!`,`\x1b[0m`);
} 

//Check for Winows Environment
const isWin = process.platform === `win32`;

const isUnix = process.platform === `darwin`;

//Empty project Scafold
let emptypro = (name) => {
    if (isWin) {
        let child1 = cp.spawn( `cmd.exe` , [folderOptions.model]);

    
        child1.stderr.on(`data`, () => {
            console.log(`Error occured please check`);
        }); 
    
        child1.stdout.on(`data`, (data) => {
            console.log(`Added: \n${data}`);
        });
    
    
        let child2 = cp.spawn( `cmd.exe`, [folderOptions.view]);
    
        
        child2.stderr.on(`data`, () => {
            console.log(`Error occured please check`)
        }); 
    
        child2.stdout.on(`data`, (data) => {
            console.log(`Added: \n${data}`);
        });
    
        let child3 = cp.spawn( `cmd.exe`, [folderOptions.controller]);
    
        
        child3.stderr.on(`data`, () => {
            console.log(`Error occured please check`);
        }); 
    
        child3.stdout.on(`data`, (data) => {
            console.log(`Added: \n${data}`);
        });
    
        let child4 = cp.spawn( `cmd.exe` , [models.user]);
    
        
        child4.stderr.on(`data`, () => {
            console.log(`Error occured please check`);
        }); 
    
        child4.stdout.on(`data`, (data) => {
            console.log(`Added: \n${data}`);
        });
    
        let child5 = cp.spawn( `cmd.exe` , [models.password]);
    
        
        child5.stderr.on(`data`, () => {
            console.log(`Error occured please check`);
        }); 
    
        child5.stdout.on(`data`, (data) => {
            console.log(`Added: \n${data}`);
        });
    
        let child6 = cp.spawn( `cmd.exe` , [models.log]);
        
        child6.stderr.on(`data`, () => {
            console.log(`Error occured please check`);
        }); 
    
        child6.stdout.on(`data`, (data) => {
            console.log(`Added: \n${data}`);
        });
    
        let child7 = cp.spawn( `cmd.exe` , [controllers.user]);
    
        child7.stderr.on(`data`, () => {
            console.log(`Error occured please check`);
        });
    
        child7.stdout.on(`data`, (data) => {
            console.log(`Added: \n${data}`);
        });
    
        let child8 = cp.spawn( `cmd.exe` , [controllers.password]);
    
        child8.stderr.on(`data`, () => {
            console.log(`Error occured please check`);
        });
    
        child8.stdout.on(`data`, (data) => {
            console.log(`Added: \n${data}`);
        });
    
        let child9 = cp.spawn( `cmd.exe`, [controllers.password]);
    
        child9.stderr.on(`data`, () => {
            console.log(`Error occured please check`);
        });
    
        child9.stdout.on(`data`, (data) => {
            console.log(`Added: \n${data}`);
        });
    
        websuccess(name);
    }
    if(isUnix) {
        let child1 = cp.spawn( `bash` , [folderOptions.model]);

    
        child1.stderr.on(`data`, () => {
            console.log(`Error occured please check`);
        }); 
    
        child1.stdout.on(`data`, (data) => {
            console.log(`Added: \n${data}`);
        });
    
    
        let child2 = cp.spawn( `bash`, [folderOptions.view]);
    
        
        child2.stderr.on(`data`, () => {
            console.log(`Error occured please check`)
        }); 
    
        child2.stdout.on(`data`, (data) => {
            console.log(`Added: \n${data}`);
        });
    
        let child3 = cp.spawn( `bash`, [folderOptions.controller]);
    
        
        child3.stderr.on(`data`, () => {
            console.log(`Error occured please check`);
        }); 
    
        child3.stdout.on(`data`, (data) => {
            console.log(`Added: \n${data}`);
        });
    
        let child4 = cp.spawn( `bash` , [models.user]);
    
        
        child4.stderr.on(`data`, () => {
            console.log(`Error occured please check`);
        }); 
    
        child4.stdout.on(`data`, (data) => {
            console.log(`Added: \n${data}`);
        });
    
        let child5 = cp.spawn( `bash` , [models.password]);
    
        
        child5.stderr.on(`data`, () => {
            console.log(`Error occured please check`);
        }); 
    
        child5.stdout.on(`data`, (data) => {
            console.log(`Added: \n${data}`);
        });
    
        let child6 = cp.spawn( `bash` , [models.log]);
        
        child6.stderr.on(`data`, () => {
            console.log(`Error occured please check`);
        }); 
    
        child6.stdout.on(`data`, (data) => {
            console.log(`Added: \n${data}`);
        });
    
        let child7 = cp.spawn( `bash` , [controllers.user]);
    
        child7.stderr.on(`data`, () => {
            console.log(`Error occured please check`);
        });
    
        child7.stdout.on(`data`, (data) => {
            console.log(`Added: \n${data}`);
        });
    
        let child8 = cp.spawn( `bash` , [controllers.password]);
    
        child8.stderr.on(`data`, () => {
            console.log(`Error occured please check`);
        });
    
        child8.stdout.on(`data`, (data) => {
            console.log(`Added: \n${data}`);
        });
    
        let child9 = cp.spawn( `bash`, [controllers.password]);
    
        child9.stderr.on(`data`, () => {
            console.log(`Error occured please check`);
        });
    
        child9.stdout.on(`data`, (data) => {
            console.log(`Added: \n${data}`);
        });
    
        websuccess(name);
    }
}

//Scafold Angular Application
let angular = (name)=> {
    let child1 = cp.spawn( `cmd.exe`, [options.angular]);

    child1.stderr.on(`data`, () => {
        console.log(`Error occured please check`)
    }) 

    child1.stdout.on(`data`, (data) => {
        console.log(`progress: \n${data}`);
    });

    let child2 = cp.spawn( `cmd.exe`, [options.newng, name ]);
    
    child2.stderr.on(`data`, () => {
        console.log(`Error occured please check`)
    }) 


    child2.stdout.on(`data`, (data) => {
        console.log(`new angular setup: \n${data}`);
        websuccess(name);
    });    
};

//Scafold React Application
let react = (name)=> {
    let child1 = cp.spawn( `cmd.exe`, [options.react, name]);

    child1.stderr.on(`data`, () => {
        console.log(`Error occured please check`)
    }) 

    child1.stdout.on(`data`, (data) => {
        console.log(`new reactapp setup: \n${data}`);
        websuccess(name);
    });
};

//Scafold Vue Application
let vue = (name)=> {
    let child1 = cp.spawn( `cmd.exe`, [options.vue]);

    
    child1.stderr.on(`data`, () => {
        console.log(`Error occured please check`)
    }) 


    child1.stdout.on(`data`, (data) => {
        console.log(`progress: \n${data}`);
    });

    let child2 = cp.spawn( `cmd.exe`, [options.newvue, name]);

    
    child2.stderr.on(`data`, () => {
        console.log(`Error occured please check`)
    }) 


    child2.stdout.on(`data`, (data) => {
        console.log(`new vueapp setup: \n${data}`);
        websuccess(name);
    });
};

let mobile = (name) => {


    let child1 = cp.spawn( `cmd.exe`, [options.mobile]);

    child1.stderr.on(`data`, () => {
        console.log(`Error Occured please check`);
    });

    child1.stdout.on(`data`, (data) => {
        console.log(`Progress: \n${data}`);
    });

    let child2 = cp.spawn( `cmd.exe`, [options.newmobile, name]);

    child2.stderr.on(`data`, () => {
        console.log(`Error Occured please check`);
    })

    child2.stdout.on(`data`, (data) => {
        console.log(`Setup: \n${data}`);
    })
}
exports.ndjs =  { angular, react , vue, emptypro, mobile}


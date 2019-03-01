#!/usr/bin/env node
// const path = require(`path`);
// const fs = require(`fs`);

const program = require(`commander`);
const nd = require(`./platforms/nodejs/index`);


program
    .version(`1.0.0`, `-v, --version`);


//This is for Scafolding a project
program
    .command(`web <name>`) 
    .option(`-g --generatee`, `Trigger Generation Operation`)
    .option(`--project -p`)
    .action((name) => {
        nd.ndjs.emptypro(name);
        console.log(`\x1b[36m%s\x1b[0m`, name, `Web Application Scafolded Successfully...\n`,
        `\x1b[33m`,
        `Enjoy!!!`,
        `\x1b[0m`);
    });

program
    .command(`mobile <name>`)
    .option(`-g --generatee`, `Trigger Generation Operation`)
    .option(`--project -p `)
    .action(name => {
        console.log(`\x1b[36m%s\x1b[0m`, name, `Mobile Application Scafolded Successfully...\n`,
        `\x1b[33m`,
        `Enjoy!!!`,
        `\x1b[0m`)
    });

program
    .command(`web <name`)
    .option(`-g --generate`, `Trigger Generation Operation`)
    .option(`-P --project`)
    .option(`-p --platform <platform>`, `State the Platform of development`)
    .option(`--view -v <view>`, `Seletct View Templating Engine`)
    .action( (name, view, platform) => {
        if(platform == `nodejs`) {
            if(view == `angular`){
                nd.ndjs.angular(name, view);
            }
        }
    });

program.parse(process.argv);
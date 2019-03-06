#!/usr/bin/env node
// const path = require(`path`)
// const fs = require(`fs`)

const program = require(`commander`)
const nd = require(`./platforms/nodejs/index`)


program
    .version(`1.0.0`, `-v, --version`)


//This is for Scafolding a project
program
    .command(`web-node <name>`) 
    .option(`-g --generate`, `Trigger Generation Operation`)
    .option(`--project -p`)
    .action((name) => {
        nd.ndjs.emptypro(name);
    })

program
    .command(`mobile <name>`)
    .option(`-g --generate`, `Trigger Generation Operation`)
    .option(`-p --project`)
    .action(name => {
        nd.ndjs.mobile(name)
    })

program
    .command(`web-node <name>`)
    .option(`-g --generate`, `Trigger Generation Operation`)
    .option(`-p --project`)
    .option(`--angular`)
    .action( (name) => {
        nd.ndjs.angular(name)
    })

program
    .command(`web-node <name>`)
    .option(`-g --generate`, `Trigger Generation Operation`)
    .option(`-p --project`)
    .option(`--react`)
    .action((name) => {
        nd.ndjs.react(name)
    })

program
    .command(`web-node <name>`)
    .option(`-g --generate`, `Trigger Generation Operation`)
    .option(`-p --project`)
    .option(`--vue`)
    .action((name) => {
        nd.ndjs.vue(name)
    })

program.parse(process.argv)
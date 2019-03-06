#!/usr/bin/env node
// const path = require(`path`)
// const fs = require(`fs`)

const program = require(`commander`)
const nd = require(`./platforms/nodejs/index`)


program
    .version(`1.0.16`, `-v, --version`)


//This is for Scafolding a project
program
    .usage(`[commands] <filename> <type> <options1> <options2>`)
    .command(`web-node <name> <type>`) 
    .option(`-g, --generate`, `Trigger Generation Operation`)
    .option(`-p, --project`)
    .action((name, type) => {
        if(type == `empty`) nd.ndjs.emptypro(name)
        if(type == `angular`) nd.ndjs.angular(name)
        if(type == `react`) nd.ndjs.react(name)
        if(type == `vue`) nd.ndjs.vue(name)
    })

program
    .usage(`[commands] <filename> <options1> <options2>`)
    .command(`mobile <name>`)
    .option(`-g, --generate`, `Trigger Generation Operation`)
    .option(`-p, --project`)
    .action(name => {
        nd.ndjs.mobile(name)
    })

// program
//     .usage(`[commands] <filename> <options1> <options2>`)
//     .command(`web-node <name>`)
//     .option(`-g, --generate`, `Trigger Generation Operation`)
//     .option(`--angular`)
//     .action( (name) => {
//         nd.ndjs.angular(name)
//     })

// program
//     .command(`web-node <name>`)
//     .option(`-g, --generate`, `Trigger Generation Operation`)
//     .option(`--react`)
//     .action((name) => {
//         nd.ndjs.react(name)
//     })

// program
//     .command(`web-node <name>`)
//     .option(`-g, --generate`, `Trigger Generation Operation`)
//     .option(`--vue`)
//     .action((name) => {
//         nd.ndjs.vue(name)
//     })

program.parse(process.argv)
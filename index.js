#!/usr/bin/env node

const program = require('commander');
const path = require('path')
const fs = require('fs');


program
    .version(`1.0.0`, `-v, --version`)
    .description(`Project Scafolding for Project`)

//This is for Scafolding a project
program
    .command(`web <name>`) 
    .option(`-g --generatee`, `Trigger Generation Operation`)
    .option(`--project -p`)
    .action((name) => {
         console.log(`\x1b[36m%s\x1b[0m`, name, `Web Application Scafolded Successfully...\n`,
        `\x1b[33m`,
        `Enjoy!!!`,
        `\x1b[0m`)
    })

program
    .command(`mobile <name>`)
    .option(`-g --generatee`, `Trigger Generation Operation`)
    .option(`--project -p `)
    .action(name => {
        console.log(`\x1b[36m%s\x1b[0m`, name, `Mobile Application Scafolded Successfully...\n`,
        `\x1b[33m`,
        `Enjoy!!!`,
        `\x1b[0m`)
    })

program.parse(process.argv);
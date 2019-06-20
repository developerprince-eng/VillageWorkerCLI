#!/usr/bin/env node

const program = require(`commander`)
const nd = require(`./platforms/nodejs/index`)
const webpy = require(`./platforms/python/index`)
const configuration = require(`./platforms/config/index`)
 
program
    .version(`1.1.3`, `-v, --version`)

//This is for Scafolding a project
//NODEJS
program
    .usage(`[commands] <filename> <type> <options1> <options2>`)
    .command(`web-node <name> <type>`) 
    .option(`-g, --generate`, `Trigger Generation Operation`)
    .option(`-p, --project`)
    .action((name, type) => {
        if(type == `empty`) nd.ndjs.emptypro(name)
        else if(type == `angular`) nd.ndjs.angular(name)
        else if(type == `react`) nd.ndjs.react(name)
        else if(type == `vue`) nd.ndjs.vue(name)
    })
//PYTHON
program
    .usage(`[commands] <filename> <type> <options1> <options2>`)
    .command(`web-py <name> <type>`)
    .option(`-g --generate`, `Trigger Generation Operation`)
    .option(`-p --project`)
    .action((name, type) => {
       if (type == `empty`) webpy.py.emptypro(name)
    })

//CONFIGURATION
program
    .usage(`[commands] <config> <hostpc-name>`)
    .command(`config <hostname>`)
    .action((hostname)=>{
        configuration.configuration.config(hostname)
    })

//ADD SSH
program
    .usage(`[commamds] <addssh> <ssh-path>`)
    .command(`add-ssh <path>`)
    .action((path)=>{
        configuration.configuration.addssh(path)
    })

//MOBILE IONIC
program
    .usage(`[commands] <filename> <options1> <options2>`)
    .command(`mobile <name>`)
    .option(`-g, --generate`, `Trigger Generation Operation`)
    .option(`-p, --project`)
    .action(name => {
        nd.ndjs.mobile(name)
    })
//ADD PROJECT GITHUB COLLABORATOR
program
    .usage(`[commands] <repo> <options1> <options2> <option3> <option4>`)
    .command(`add-contributor <collaboID> <userGitHubID> <username> <password> <repo>`)
    .action((userGitHubID, username, password, repo, collaboID) => {
        configuration.configuration.addcontributor(username, password, userGitHubID, repo, collaboID)
    })
//LIST CONTRIBUTORS
program
    .usage(`[commands] <`)
    .command(`list-contributors <username> <password> <repo>`)
    .action((repo, username, password) => {
        configuration.configuration.listcontributors(username, password, repo)
    })

program.parse(process.argv)
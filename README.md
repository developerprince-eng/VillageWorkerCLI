#Village Work CLI

A command Line Interface used for automating Project Scafolding 

## Commnads

To Initiate Project Scafolding the CLI currently supports project scaffolding for nodejs application for 3 View Types, which is Angular, React & Vue Projects and this also allows to scaffold an Empty project is you desire to be cutome. 

The Current Version which is version 1.0.0 is still in is Alpha form therefore you shall see rapid evolution of CLI as we progress with project with the Dev Team (Kubaki) 

Currently the only operating system which allows for Scaffolding is Win32 OS , Currently we working on a Unix support which utillizes the darwin environment. 

###Requirements

Before You rock on using some crazy project automation, you need the following to be set up 

1.) node and npm should be installed (Assumptions is you are viewing this from npm js you probably have that setup) [nodejs.org](https://nodejs.org/en/)

2.) The Next step is you need to set up is hub for github cli an automation  cli, install scoop for windows using powershell 
```bash

 [environment]::setEnvironmentVariable('SCOOP','C:\Applications\Scoop','User')
 $env:SCOOP='C:\Applications\Scoop'
 iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
 scoop install hub

 ```
---

###Win32 Commands Using Powershell or CMD


```bash

##Empty MVC Project:
villageworkcli web <project name> --generate --project 

##Platform Projects
villageworkcli web <project name> --generate --project --platform --view <view type> 

##Empty Mobile Application
villageworkcli mobile <project name> --generate --project 
```

## Contact 

This is a product of Kubaki Developer Team led by Developer Prince, Lead Developer and System Technological Officer at the Techvillage. 

Automation Design and Strategy is being cordinated by Semina a Startup which looks into Engineering Solutions for Corporations and Startups. 

The Product is under the MIT Licence 

The product is meant for Village Work an Infrastructure within the Techvillage which manages workflow.

##Future 

The Village Work CLI will also adopt scafolding for the python based applications and php based web applications which will be relised in the future 

The System automation will also include automation in setting up project on Trello , github and Deployment set up in Cloud Services Such Amazon Web Services, Azure, Google Cloud Platform & Heroku


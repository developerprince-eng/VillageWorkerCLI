#Village Work CLI

A command Line Interface used for automating Project Scafolding 

##Commnads

To Initiate Project Scafolding the CLI currently supports project scaffolding for nodejs application for 3 View Types, which is Angular, React & Vue Projects and this also allows to scaffold an Empty project is you desire to be cutome. 

The Current Version which is version 1.0.0 is still in is Alpha form therefore you shall see rapid evolution of CLI as we progress with project with the Dev Team (Kubaki) 

Currently the only operating system which allows for Scaffolding is Win32 OS & Darwin.

##Requirements

Before You rock on using some crazy project automation, you need the following to be set up 

1.) node and npm should be installed (Assumptions is you are viewing this from npm js you probably have that setup) [nodejs.org](https://nodejs.org/en/)

2.) The Next step is you need to set up is hub for github cli an automation  cli, install scoop for windows using powershell 

####NOTE: 
Powershell is now also available for Unix based system and you can execute and run powershell in an Unix Environment
```bash

 [environment]::setEnvironmentVariable('SCOOP','C:\Applications\Scoop','User')
 $env:SCOOP='C:\Applications\Scoop'
 iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
 scoop install hub

 ```
---

##Commands Using Powershell , CMD or Bash

```bash

##Empty Nodejs MVC Project:
villageworkcli web-node <project name> empty --generate --project 

##Nodejs Angular Project
villageworkcli web-node <project name> angular --generate --project   

##Nodejs React Project
villageworkcli web-node <project name> react --generate --project 

##Nodejs Vue Project
villageworkcli web-node <project name> vue --generate --project 

##Empty Mobile Application
villageworkcli mobile <project name> --generate --project 
```

##Contact 

This is a product of Kubaki Developer Team led by Developer Prince, Lead Developer and System Technological Officer at the Techvillage. 

Automation Design and Strategy is being cordinated by Semina a Startup which looks into Engineering Solutions for Corporations and Startups. 

The Product is under the MIT Licence 

The product is meant for Village Work an Infrastructure within the Techvillage which manages workflow.

##Future 

The Village Work CLI will also adopt scafolding for the python based applications and php based web applications which will be relised in the future, therefore future realises will have the following: 

###1.)Automated Deployement Intergation
Villagework-CLI will have automated deployment for the following cloud platforms:

####Azure
####AWS
####Heroku
####Google Cloud Platform

###2.)Automated Trello Intergration
Villagework-CLI will have automated intergration to trello during project initiation and deployement 

###3.)Automated Project Documentation
Villagework-CLI will also assist and Guide developers to document their projetcts effectively

###Automated Maintenance
Villagework-CLI will have automated maintenance which invoke continous deployement and continous intergration.





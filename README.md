# Village Work CLI

A command Line Interface used for automating Project Scafolding (Codename: anolis)

## Commnads

To Initiate Project Scafolding the CLI currently supports project scaffolding for nodejs application for 3 View Types, which is Angular, React & Vue Projects and this also allows to scaffold an Empty project is you desire to be outcome. This CLI also scaffolds mobile application development by using ionic aswell. 

The Current Version which is version 1.1.0 is still in is Alpha form therefore you shall see rapid evolution of CLI as we progress with project with the Dev Team (Kubaki) 

Currently the only operating system which allows for Scaffolding is Win32 OS & Darwin.

## Requirements

Before You rock on using some crazy project automation, you need the following to be set up 

1.) node and npm should be installed (Assumptions is you are viewing this from npm js you probably have that setup) [nodejs.org](https://nodejs.org/en/)

2.) The Next step is you need to set up is hub for github cli an automation  cli, install scoop for windows using **powershell**        (This doesn't work on with cmd only **powershell**). If you are using Linux system I happy to announce that powershell is now       crossplatform there you can get it [here](https://github.com/powershell/powershell).(We will be glade to have you try this out      in linux, but it should work.)

#### NOTE: 
Powershell is now also available for Unix based system and you can execute and run powershell in an Unix Environment.
```bash

 [environment]::setEnvironmentVariable('SCOOP','C:\Applications\Scoop','User')
 $env:SCOOP='C:\Applications\Scoop'
 iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
 scoop install hub

 ```
3.) Download and install [git](https://git-scm.com/downloads) if not installed on machine.

4.) In your root folder for probably in Documents (for this you probably need to even modify to a        more secure folder setup, but just use Documents for now). generate and ssh key both public and      private key which enable you to ssh to github then once you are done you copy the public key to      github [settings](https://github.com/settings/keys)
    i) In your Root Folder to create the ssh keys run gitbash (you can do this by right click you mouse on the keypad and select the option `Git Bash Here`) a bash console should open and run the following or execute the following command:
```bash
ssh-keygen
>Generating public/private rsa key pair.
>Enter file in which to save the key (/c/Users/DeveloperPrince/.ssh/id_rsa): dev ##I called it dev
>Enter passphrase (empty for no passphrase): ##leave empty just press enter for simplicity
>Enter same passphrase again: ##since you left this empty just press enter to continue
>Your identification has been saved in dev.
>Your public key has been saved in dev.pub.
>The key fingerprint is:
>SHA256:************************************ DeveloperPrince@DESKTOP-8H2HM8A
>The key's randomart image is:
+---[RSA 2048]----+
| .+++==++        |
| ..oo=o=..       |
|    = +.+. . .   |
|     +o+  o + .  |
|     ..oS  = o ..|
|      ..o.. o o o|
|     .  .+.. o . |
|     .o o =.  E  |
|     .o+.+  ..   |
+----[SHA256]-----+

```
    Two files shall be generated one called `dev` the other called `dev.pub` in github [settings](https://github.com/settings/keys)
    Create `New ssh Key` and name it `dev` (for consistency) and open the dev.pub (public ssh key) from your machine and copy th ssh key into the Key field on github settings and `Add SSH key`.


5.) The next step is to setup ssh between your machine and git hub.
    i) Open either cmd or your bash terminal then execute the following:
```bash
eval `sha-agent`
>Agent pid 12180
```
    ii) Then after start an ssh agent the execute following:
```bash
ssh-add <path-to-private-ssh-key>

```
    If you did everything properly hopefully you should see the following: 
```bash
>Identity added: <path-to-private-ssh-key> (Your-PC-Information)
```
Once you see this then everything is good close your terminal.

6.) Install villageworkcli globally on using you terminal or console 
```bash
npm i villageworkcli-work -g 
```
---

## Commands Using Powershell , CMD or Bash

Now that we are done let do the magic I suggest for scaffolding a new project you need to used git bash if on windows if on linux just use bash. The create directory of where you want scaffold a project and run your console in th create folder perform step: 5 in the `Requirements` section once an ssh section is created then either of the following commands, and see magic happen.

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

## Contact 

This is a product of Kubaki Developer Team led by Developer Prince, Lead Developer and System Technological Officer at the Techvillage. 

Automation Design and Strategy is being cordinated by Semina a Startup which looks into Engineering Solutions for Corporations and Startups. 

The Product is under the MIT Licence 

The product is meant for Village Work an Infrastructure within the Techvillage which manages workflow.

## Future 

The Village Work CLI will also adopt scafolding for the python based applications and php based web applications which will be relised in the future, therefore future realises will have the following: 

### 1.)Automated Deployement Intergation
Villagework-CLI will have automated deployment for the following cloud platforms:

#### Azure
#### AWS
#### Heroku
#### Google Cloud Platform

### 2.)Automated Trello Intergration
Villagework-CLI will have automated intergration to trello during project initiation and deployement 

### 3.)Automated Project Documentation
Villagework-CLI will also assist and Guide developers to document their projetcts effectively

### 4.)Automated Maintenance
Villagework-CLI will have automated maintenance which invoke continous deployement and continous intergration.





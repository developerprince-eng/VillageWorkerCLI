# Village Work CLI

![DeveloperPrince](https://developerprince.herokuapp.com/static/assets/images/logo.png)

A command Line Interface used for automating Project Scaffolding (Codename: anolis)

## Commands

To Initiate Project Scaffolding the CLI currently supports project scaffolding for nodejs application for 3 View Types, which is Angular, React & Vue Projects and this also allows to scaffold an Empty project is you desire to be outcome. This CLI also scaffolds mobile application development by using ionic as well. The Scaffolding now offers python project scaffolding for flask based projects, ASP.NET Core project, php web application

The Current Version which is version 1.1.14 is still in is Alpha form therefore you shall see rapid evolution of CLI as we progress with project.

Currently the only operating system which allows for Scaffolding is Win32 OS & Unix.

## Dependencies

1. [Express-Generator](https://expressjs.com/en/starter/generator.html)
2. 

## Requirements

Before You rock on using some crazy project automation, you need the following to be set up.

1.) node and npm should be installed (Assumptions is you are viewing this from npm js you probably have that setup) [nodejs.org](https://nodejs.org/en/)

2.) The Next step is you need to set up is hub for github cli an automation  cli, install scoop for windows using **powershell**        (This doesn't work with cmd  but only with **powershell**). If you are using Linux system I happy to announce that powershell is now cross-platform there you can get it [here](https://github.com/powershell/powershell).(We will be glade to have you try this out      in linux, but it should work.)

#### NOTE: 

Powershell is now also available for Unix based system and you can execute and run powershell in an Unix Environment. Take note if you are using Legacy Unix Base OS's you are likely going to run Powershell especially on Ubuntu. In the event you are using Distros such as POP Os they don't come with libicu6 and other libraries which are essential to support and run powershell. Our Dev Community are tirelessly working on increasing support and experience for all developers and Systems.

## WARNING 

Currently the CLI works with **unix** and **linux** based environments it is currently very unstable with **windows** environment, We are working tirelessly to make it stable with Windows. You can attempt to use linux subsystem in windows but hub will not be configure therefore projects will be scaffolded with connecting to your github.


#### For Win32 Environment(For Windows)

```bash

 [environment]::setEnvironmentVariable('SCOOP','C:\Applications\Scoop','User')
 $env:SCOOP='C:\Applications\Scoop'
 iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
 scoop install hub

 ```

 #### For Unix Environment 

 For Unix Based Environment You can install hub directly without the use of a scoop as scoop is for windows based users

 ```bash
##Linux Ubuntu
sudo snap install hub --classic
```


3.) Download and install [git](https://git-scm.com/downloads) if not installed on machine.

4.) In your root folder for probably in Documents (for this you probably need to even modify to a  more secure folder setup, but just use Documents for now). generate and ssh key both public and      private key which enable you to ssh to github then once you are done you copy the public key to      github [settings](https://github.com/settings/keys)
    i) In your Root Folder to create the ssh keys run git bash (you can do this by right click you mouse on the keypad and select the option `Git Bash Here`) a bash console should open and run the following or execute the following command:
```bash
ssh-keygen
>Generating public/private rsa key pair.
>Enter file in which to save the key (/c/Users/DeveloperPrince/.ssh/id_rsa): dev ##I called it dev
>Enter passphrase (empty for no passphrase): ##leave empty just press enter for simplicity
>Enter same passphrase again: ##since you left this empty just press enter to continue
>Your identification has been saved in dev.
>Your public key has been saved in dev.pub.
>The key fingerprint is:
>SHA256:************************************ DeveloperPrince@DESKTOP-#@&9**&!
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
    i) Open either powershell or your bash terminal then execute the following:

##### powershell

```bash
eval `sha-agent`
>Agent pid 12180
```

##### unix

```bash
eval "$(ssh-agent -s)"
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

6.) Install Heroku cli on your terminal

```bash
npm i heroku -g
```

7.) Install villageworkcli globally on using you terminal or console 
```bash
npm i villageworkcli-work -g 
```

We are going to support Self configuration for Unix Developers soon 

---

## Commands Using Powershell or Bash

Or if you are less hands on and you want to get started on building you can install villageworkercli if you have nodejs and run the following to configure.

```bash
villageworkcli config <host name> 
```

Then Add the path of public ssh

```bash
villageworkcli add-ssh <path to public ssh>
```

#### NOTE: 
config might run into errors in deployment is so please contact [Developer Prince](prince@techvillage.org.zw) or manually set up. with the above steps. In addition config does not support automated HerokuCLI installation and setup

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
## Web ASPNET CORE Development support

```bash
##Empty Nodejs MVC Project:
villageworkcli web-dotnet <project name> empty --generate --project 

##ASPDOTNET Angular Project
villageworkcli web-dotnet <project name> angular --generate --project  

##ASPDOTNET  React Project
villageworkcli web-dotnet <project name> react --generate --project 

##ASPDOTNET  GRPC Project
villageworkcli web-dotnet <project name> grpc --generate --project 

##Empty ASPDOTNET API
villageworkcli web-dotnet <project name> rest --generate --project 

```

## Web PHP Developement Support 

You can scaffold a php based web project firstly using codeignter framework later will support laravel

```bash
##CODEIGNITER PROJECT USING VERSION 3 
villageworkcli web-php <project name> cod3 --generate --project 
```

## Web Python Flask Development Support

villageworkcli now supports flask development set up from you locally machine and commits a git repo both locally and remotely.
Currently the Version is highly unstable as it is undergoing rapid prototyping and alterations.

```bash
##Empty Flask MVC Project:
villageworkcli web-py <project name> empty --generate --project
```
```bash
villageworkcli web-py <project name> rest --generate --project
```
We are glad to announce the pre-release of added functionality where one can add collaborators via the interface and the list all the contributors for project on github.

```bash
##Add Collaborator
villageworkcli add-contributor <collaboID> <userGitHubID> <username> <password> <repo> 

##List Collaborators
villageworkcli list-contributors <username> <password> <repo>
```
## Contact 

Supported by  Developer Prince, Lead Developer and former System Technological Officer at the Tech Village. 

Automation Design and Strategy is being coordinated by Developer Prince. 

The Product is under the MIT Licence.

The product is meant to be an Open Source project for Village Work an Infrastructure within the Tech Village which manages workflow.

## Future 

The Village Work CLI will also adopt scaffolding for the python based applications and php based web applications which will be released in the future, therefore future releases will have the following: 

### 1.)Automated Deployment Integration

Villagework-CLI will have automated deployment for the following cloud platforms:

#### Azure

#### AWS

#### Heroku

#### Google Cloud Platform

### 2.)Automated Trello Integration

Villagework-CLI will have automated integration to Trello during project initiation and deployment 

### 3.)Automated Project Documentation

Villagework-CLI will also assist and Guide developers to document their projects effectively

### 4.)Automated Maintenance

Villagework-CLI will have automated maintenance which invoke continuos deployment and continuos integration.


## Contributors

1. Developer Prince




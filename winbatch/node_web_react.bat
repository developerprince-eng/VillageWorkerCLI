@ECHO OFF
ECHO. 
@ECHO ****************************************
@ECHO ******* CREATING A NEW PROJECT *********
@ECHO ****************************************
@ECHO "Creating a Reac App: "
call npx create-react-app %1
ECHO ****************************************
ECHO #####Lets Switch up things a little#####
ECHO ****************************************
ECHO Swicthing to Powershell
call powershell
call [environment]::setEnvironmentVariable('SCOOP','C:\Applications\Scoop','User')
call $env:SCOOP='C:\Applications\Scoop'
call iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
ECHO Setting and Install Github CommandLine Interface
call scoop install hub
ECHO ****************************************
ECHO  Now Lets Do Magic using Hub to Access Github
ECHO ****************************************
call git init 
call git add .
call git commit -m "Initial Commit, Using VillageWorkCLI"
call hub create
call git push origin
ECHO ****************************************
ECHO WE Have Successfully Pushed The Project 
ECHO ______________^(* _ *)^________________
ECHO ************* ENJOY!!! *****************
ECHO.
ECHO ************* HAPPY CODING *************


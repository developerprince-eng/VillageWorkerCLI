call [environment]::setEnvironmentVariable('SCOOP','C:\Applications\Scoop','User')
call $env:SCOOP='C:\Applications\Scoop'
call iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
ECHO Setting and Install Github CommandLine Interface
call scoop install hub
ECHO ****************************************
ECHO  Now Lets Do Magic using Hub to Access Github
ECHO ****************************************
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
call exit



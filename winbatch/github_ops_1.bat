
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
call exit



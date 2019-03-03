@ECHO OFF
ECHO. 
@ECHO ****************************************
@ECHO ******* CREATING A NEW PROJECT *********
@ECHO ****************************************
@ECHO "Setting Up Ionic ==> npm install -g ionic"
call npm install -g ionic
@ECHO "Creating an Vue App: "
call ionic %1 Blank
ECHO ****************************************
ECHO #####Lets Switch up things a little#####
ECHO ****************************************
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





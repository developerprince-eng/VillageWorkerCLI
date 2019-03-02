@ECHO OFF
ECHO. 
@ECHO ****************************************
@ECHO ******* CREATING A NEW PROJECT *********
@ECHO ****************************************
@ECHO "Setting Up Angular ==> npm install -g ionic"
call npm install -g ionic
@ECHO "Creating an Angular App: "
call ng new %1
ECHO ****************************************
ECHO ************* ENJOY!!! *****************
ECHO.
ECHO ************* HAPPY CODING *************


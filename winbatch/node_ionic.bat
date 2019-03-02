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
ECHO ************* ENJOY!!! *****************
ECHO.
ECHO ************* HAPPY CODING *************


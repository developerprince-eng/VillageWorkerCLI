@ECHO OFF
ECHO. 
@ECHO ****************************************
@ECHO ********* CREATING AN PROJECT **********
@ECHO ****************************************
@ECHO "Setting Up Vuejs ==> npm install -g ionic"
call npm install -g create-vue-app
@ECHO "Creating an Vue App: "
call create-vue-app %1
ECHO ****************************************
ECHO #####Lets Switch up things a little#####
ECHO ****************************************

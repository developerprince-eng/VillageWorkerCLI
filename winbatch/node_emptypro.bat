@ECHO OFF
ECHO. 
@ECHO ****************************************
@ECHO ******* CREATING A NEW PROJECT *********
@ECHO ****************************************
mkdir %1\models
mkdir %1\controllers
mkdir %1\views
type nul>%1/models/user.models.js
type nul>%1/models/password.models.js
type nul>%1/models/log.models.js
type nul>%1/controllers/user.controller.js
type nul>%1/controllers/password.controller.js
type nul>%1/controllers/logs.controller.js
type nul>%1/views/signin.view.ejs
type nul>%1/views/signup.view.ejs
ECHO. 
ECHO %1/models/user.models.js : ADDED
ECHO %1/models/password.models.js : ADDED
ECHO %1/models/log.models.js : ADDED
ECHO %1/controllers/user.controller.js : ADDED
ECHO %1/controllers/password.controller.js : ADDED
ECHO %1/controllers/log.controller.js : ADDED
ECHO %1/views/signin.view.ejs : ADDED
ECHO %1/views/signup.view.ejs : ADDED
ECHO.
type nul>%1/app.js
ECHO ****************************************
ECHO ************* ENJOY!!! *****************
ECHO.
ECHO ************* HAPPY CODING *************


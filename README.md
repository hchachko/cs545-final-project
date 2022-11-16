# cs545-final-project
# How to compile:

1) Have mongodb running (either manually or as a background process).

&emsp; Set up nodebb

2) Run "git clone -b v2.x https://github.com/NodeBB/NodeBB.git nodebb"

3) Run "cd nodebb"

4) Run "./nodebb setup"
    - Hit "Enter" Twice to select the default URL and secret
    - Decide whether to send anonymous plugin usage
    - Hit "Enter" to select mongo as nodebb database
    - Type modgodb://127.0.0.1:27017 and hit "Enter"
    - If prompted, create a NodeBB admin username and password. Remember these

5) run "./nodebb start"

6) Open a browser and navigate to "http://localhost:4567"

7) Hit "Login" and login with the admin credentials you set earlier

8) Hit the new settings icon in the top bar to access admin settings

9) Search for "Access-Control"

10) Scroll until you see the Access-Control-* options

11) For all of these options except "Access-Control-Allow-Origin Regular Expression", enter "*"

12) For "Access-Control-Allow-Origin Regular Expression", enter ".+"

13) Hit the save icon in the bottom left. Close the page.

&emsp; In a console window:

14) cd to the "Server" directory.

15) Run "npm install" to install the dependicies needed for the backend.

16) Run "npm run seed". This will populate the mongo server with seed data.

17) Run "npm start" to start the backend server on port 4000. 

&emsp; In a seperate console window:

18) cd to the "Frontend" directory.

19) Run "npm install" to install the dependicies needed for the frontend.

20) Run "npm start" to start the frontend on port 3000. 

**It is crucial to run both the backend and the frontend at the same time for the site to function properly!**

# cs545-final-project
# How to compile:

1) Have mongodb running (either manually or as a background process).

&emsp; Set up nodebb. If Nodebb already set up, only run steps 3 and 5, then go to step 22

2) Run "git clone -b v2.x https://github.com/NodeBB/NodeBB.git nodebb"

3) Run "cd nodebb"

4) Run "./nodebb setup"
    - Hit "Enter" Twice to select the default URL and secret
    - Decide whether to send anonymous plugin usage
    - Hit "Enter" to select mongo as nodebb database
    - Type mongodb://127.0.0.1:27017 and hit "Enter"
    - If prompted, create a NodeBB admin username and password. Remember these

5) run "./nodebb start"

6) Open a browser and navigate to "http://localhost:4567"

7) Hit "Login" and login with the admin credentials you set earlier

8) Hit the new settings icon in the top bar to access admin settings

9) Search for "Access-Control"

10) Scroll until you see the Access-Control-* options

11) For all of these options except "Access-Control-Allow-Origin Regular Expression", enter "*"

12) For "Access-Control-Allow-Origin Regular Expression", enter ".+"

13) Hit the save icon in the bottom left. 

14) From the Settings dropdown, select "API Access"

15) Select "Create Token
    - Set the User ID to 0, optionally give it a description
    - Select "Confirm"

16) Hit the Save icon in the bottom left. 

17) Search for "Paginate topics and posts" 

18) Toggle the setting to on

19) If it doesn't already exist, create a .secrets file in the Client Directory

20) In .secrets, place REACT_APP_NODEBB_MASTER_TOKEN="token", replacing token with the newly generated token. Copy .secrets to the Server directory

21) Close the NodeBB config page

&emsp; In a seperate console window:

22) cd to the "Server" directory.

23) Run "npm install" to install the dependicies needed for the backend.

24) Run "npm run seed". This will populate the mongo server with seed data.

25) Run "npm start" to start the backend server on port 4000. 

&emsp; In a seperate console window:

26) cd to the "Client" directory.

27) Run "npm install --legacy-peer-deps" to install the dependicies needed for the frontend.

28) Run "npm start" to start the frontend on port 3000. 

**It is crucial to run both the backend and the frontend at the same time for the site to function properly!**


**DISCLAIMER**

Parts of the community tab have been taken from, and inspired by, code provided publicly at
https://medium.com/@samwsoftware/building-a-forum-with-react-and-node-242a2a3c2995 

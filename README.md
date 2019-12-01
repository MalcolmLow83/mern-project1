# mern-project1

Disclaimer
This MERN project purpose is for learning a full mern stack by hands-on project. Project is created with reference and credits to Traversy Media,Learn the MERN Stack series youtube channel link (https://www.youtube.com/playlist?list=PLillGF-RfqbbiTGgA77tGO426V3hRF9iE). Repo is created to serve as learning key points of each recorded videos.

Extra Notes: 
> Consider to create and clone git repo to local machine before starting project. 
> Create or copy .gitingore file

Part 1 > Introduction

Part 2 > Express API & MongoDB (Backend)
    server cli
        > npm init, entry point => server.js
        > npm i express body-parser mongoose concurrently
        > npm i -D nodemon

    mlab 
        > build new cluster (create database)
        > Database Access (create user to access database)
        > Connect, Get connect string, connection string only (URI)

    config/keys.js
        > mongoURI

    models/Items.js
        > Schema (name, date)

    routes/api/items.js
        > router.get
        > router.post
        > router.delete

Part 3 > Client Setup, React and Navbar (Frontend)
    create client folder and cd to client cli
        > create-rect-app .
        > npm i bootstrap react-strap uuid css-transition-group
    
    create components folder
        > AppNavbar

part 4 > ShoppingList Component & Transitions
    Create ShoppingList Component
        > Create Add Item Button
        > Create Delete and show item list
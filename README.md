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
    create ShoppingList Component
        > create Add Item Button
        > create Delete and show item list

part 5 > Implementing Redux
    install redux modules by cd to client cli
        > npm i redux react-redux redux-thunk
    
    create redux application
        > create store.js // entry point to redux
    
    import store.js and include <Provider> in App.js
        > import store.js and wrap the App content with <Provider>
        > import connect
        > PropTypes // Able to use proptypes within shoppingList Component
        > Add ComponentDiMount
    
    create Actions folder, type.js file & itemActions
        > create types.js and create const types for GET_ITEMS, ADD_ITEM & DELETE_ITEM
        > create itemActions.js and create request types

    create reducers folder, root file & itemReducer file
        > import combineReducers from redux
        > itemReducer // data is temporary stored and will proceed to link to backend server
        > import types.js file
        > switch action.type, case the type and return state based on the action

part 6 > Finishing Up Redux
    create delete item feature
        > itemActions.js to create const for deleteItem and payload
        > itemReducer.js to create case for delete item with id
        > ShoppingList.js to create onDeleteClick method
    
    create modal with add item & submit feature
        > ItemModal.js with reactstrap modal form libraries tags
        > create newItem const
        > itemActions.js to create const for addItem and payload
        > itemReducer.js to create case for add item with newItem
        > ShoppingList.js to create onSubmit method
    
    Summary
        > Delete Button clicked > this.props.deleteItem(id) > itemActions (delete type with id) > itemReducers case DELETE_ITEM > return filtered data
        > Add Button clicked > opens up itemModal > fill up form & submit clicked > this.props.addItem(item) > itemActions (add type with item) > itemReducers case ADD_ITEM > return new array spread
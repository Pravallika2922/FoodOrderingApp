# namaste react

# Parcel

-Dev Build
-Created a Local Server
-HMR- Hot Module Replacement
-It uses File watching algorithm - written in C++
-Faster builds using the caching
-Image optimization
-Minification
-Bundling
-Compress
-consistent hashing
-code splitting
-differential bundling - support older browsers
-Diagnostic
-Error handling
-HTTPs
-Tree Shaking- remove unused code
-Different dev and production bundles
-JSX is not understood by browsers. Parcel transpiles this JSX code to browser understandable language with the help of Babel ( a package used to do the transpiling job)

# React Hooks

-Normal JS utility functions.
-Facebook developers wrote these functions inside the React.
-There are so many Hooks. The most important hooks are useState() and useEffect()
-useState-helps to create superpowerful state variable.

# UseEffect

-useEffect is called everytime the component renders if there is no dependency array.
-If there is an empty dependancy array,then useEffect is called only the first time the component is rendered.
-If there is a dependancy array is btnName, then useEffect is called everytime the btnName is changed.
-UseEffect hook accepts a callback function and dependancy array as arguments.
-Mutations.timers,subscriptions,loggers are not allowed in the regular code, hence useEffect is used.
-useEffect(async()=?{}) is not possible because, normally useEffect expects a timer, logging etc side effect functions. If we have to make an API call we need to write another function inside useEffect.
-Cleaning up activity- Usually useEffect creates resources which needs to be cleaned by the component before leaving the screen. useEffect returns a clean up function.
eg: useEffect(()=>{
const timer=setInterval(()=>console.log("timer running"));
return ()=>{
clearTimer(timer)
}
})

# useState

-Never create state variables inside loops, if else blocks or functions.
-They should be at the higher level of the component.
-useState component returns a state variable and a function to update the state variable.
-Lazy initial state: The initial state argument in the useState is used only during the first render. We do not need in subsequent renders. If the initial state is the result of a complex calculations, we can put them in a function.
-If the compoenent re render results in the same as the previous render, it will bail out the rendering process.
-Batching of renders is done to optimize the app.

# React-Router-DOM

- createBrowserRouter creates the browsing routing configuration
  -configuration informaiton means telling the browser about what should happen.
  -RouterProvider will provide the routing configuration to our app.
- We can also create our own Error page.
- React router DOM gives us a hook called useRouteError. It gives us more information about the error.
  -Outlet is a component provided by the React router dom. Outlet compoenent will be replaced by the path based on the route
- Never use a anchor tag to route from one page to another page. Because when the anchor tag is clicked it will reload the whole page. Instead use the Link tag.

**\*** This is the reason react is called SINGLE PAGE APPLICATIONS, even though we route to different paths the browser will not reload the whole page. In react everything is a component.\***\*\*\*\***

# 2 types of routing in web apps

1. client side routing - In client side, the URL is updated without making any network call render the new UI and then make use of fetch to make any network calls. This enables faster and dynamic user experience.
2. server side routing - In tradiitonal websites a browser requests the server for documents, it downloads and evaluates the CSS,JS and renders the HTML accordingly. if the user clicks any link the process is again followed.

# Class Based Compoenents

-Class based compoenents are nothing but simple javascript classes that are extended from React.Compoenent class.

- We need to use contructor and super keyword.

-state variables should never be changed directly. They should be changed using this.setState

# react Lifecycle Methods

-First the constructor is called , then render method and then componenetDidMount is called.

- If there is parent child relationship.
  1st parent constructor, then parent render then it realises there is children. Now the children compoenent life cycle methods are initiated. After the child compoenent life cycle methods are done. The parent component's component did mount method is called.

-ComponentDidMount method is used to make API calls.

--------Life cycle Methods---------

----Mounting------

1. constructor is called
2. render method is called with dummy data
3. Component did mount method is called and API call is made and state is changed using setstate method.
   -----Updating-----
4. render is method is again called with new API data
5. HTML page is seen with new data.
6. Compoenet Did Update method is called
   -----UnMounting----
   1.ComponentWillUnMount method is called when the component is removed from the page. Clean up activities should be taken care in unmounting phase.
   For Example: we set a setInterval in component did mount phase and go to other component, the set interval will not stop because React is a SINPLE PAGE APPLICATION the component is removed but the page is not loaded again. Hence we need to clear the intervals or timeouts if any in the unmounting phase.

**\*\*\*\*** Never Compare life cycle methods to functional components \***\*\*\*\*\*\*\***

--- the key difference is
in useEffect if we dont give dependancy array, it is called after every RENDER.
In class components, component did mount is called only once. For all the other renders COMPONENET DID UPDATE is called.

# Optimizing our App.

-Follow ++++++++++++SINGLE RESPONSIBILITY PRINCIPAL.++++++++++++++++++

-Maintain the code in modular fashion makes the code becomes reusable, testable and maintainable.
-Tracing the bugs and fixing it is easy.
-keep the components as light as possible.
-create custom Hooks for reusability. Creating custom hooks is not mandatory but using them makes the code more readable.(create hooks in utils folder, create separate files for different Hooks)

One of the most important way to optimize the app is :
Chunking or code splitting or dynamic bundling or Lazy Loading or On Demand Loading- breaking down our app into smaller chunks.

Bundlers like Parcel builds or bundles the whole into one js file in dist folder, but when we are building large scale projects the size of this JS increases and takes time to load for the user. Hence we need to enable the bundler to create separate JS files.
For example: If we have Grocery component like Swiggy InstaMart and it has lot of other components under it. We should see that Grocery data is not loaded intially untill the user clicks on Grocery link.
We can achieve this by using lazy component provided by the React.

# Suspense and fallback

-React is very fast that when we click the Grocery, the data is not ready yet to render and it throws an error. To make the react wait for the data. React provides a component called Suspense. We need to wrap the Grocery in Suspense tag and provide a fallback (the screen or message that needs to be displayed meanwhile).

# ESLint

-It is an open source library which analyzes our code for errors and enforces coding standards to be followed.
-It also helps in maintaining consistency across the codebase.
-It enables the developer to analyze and fix the issues.

# Tailwind CSS

-Installed tailwind CSS and PostCSS. PostCSS is a tool used to transform the CSS in JS. Tailwind in the backend uses PostCSS to transform the CSS in JS.
-Create a postcssrc folder and let the post css know that tailwind is using it.
-when tailwind is installed it automatically created tailwind.config file. edit the file and put the content. It tells the tailwind what kind of extension files might contain tailwind in it.

-

# Higher order component

-It is a function that takes a component and returns a component.
It takes a compoenent and enhances it and returns it back.
-Higher Order functions are pure functions. We will not change the function of the actual component, we will just enhance the component.

# Redux

- A state management tool.
- React and Redux are two different libraries.
- Using Redux is not mandatory. Zustand is alternative library to Redux.
- Redux offers two libraries: React-Redux and Redux Toolkit.
- Update the store: When add button is clicked, the action is dispatched which has a reducer function to update the slice in the store.
- Read the value from the store- As the component is subscribed to the store using a selector, the values are read easily.

Steps:
Install libraries: @reduxjs/toolkit and react-redux.
Build our store using configurestore from "@reduxjs/toolkit"
connect our store to app using Provider from "react-redux"
create a slice using createSlice from "readux toolkit"
dispatch an action
read the data using selector - using a useSelector from "react-redux". Subscribe to the exact data that you need from the store instead of subscribing to the whole store. subscribing to whole store effects the performance of the application.

# One main difference between older version of Redux to Redux Toolkit is. Older version of redux does not allow state to be mutated and returning the state is mandatory but in Redux Toolkit state mutation is allowed.

Redux toolkit uses Immer library to understand the difference between the changes in the state.

# Types of testing (developer)

-Unit testing - testing the react components in isolation.
-Integration testing - testing the integration of components.
-End to End testing (e2e testing) - testing the react application as soon as the user landing on the web app to leaving the application.
As a developer we are concerned about the first two types of testing.
DOM testing library is a base for all the framework related testing libraries.
React testing library is the mostly used library. If we built are application using create react app, it has built in testing library in it.
React testing library used Jest behind the scenes.

# Setting up our project for testing

-Install React testing library
-Install jest
-Install Babel
-Create babel.config.js file
-configure parcel config file to disable default babel transpilation. (We created babel cofig file in the prev step, but Parcel alreacy has an existing babel transpiler. In order to make parcel use the newly created config file we need to create .parcelrc file.)
-Jest configuration (initialize the jest) npx jest --init creates a configuration file for jest
-install jsdom library if we are using jest version 28 and above.
-install @babel/preset-react to make JSX work in test cases.
-include this in babel config file.
-install @testing-library/jest-dom
-test and it are both same. Just different naming conventions

-

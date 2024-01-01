{/**
1. What is the difference between Named Export, Default export and * as export?
    Named export allow multiple exports per file, whereas Default export would allow only one default export per file/module. import * as something would allow to import of all the exports available in a module in value something.
    Syntax: export default Food; 
            import Food from 'file';
            export Gallery;
            import {Gallery} from 'file';

    2. What is the importance of config.js file?
        Config.js file usually contains static or hardcoded data which could be reused throughout different components in our application.
3. What are React Hooks?
    React Hooks are functions written by Meta dev(s) which provide different functionality based on the hook type, examples would be useState Hook, useEffect Hook, etc.
4. Why do we need a useState Hook?
    React doesn't keep track of all the variables written in our component, if value of any of them is changed due to any reason and if the app/ UI of the application should reflect that change then we need to use useState Hook as it allows two way data binding which isn't available for all the other normal variables declared in our application. It helps as and when the state declared using useState Hook changed, our UI is re-rendered by React's core by using reconciliation and diff algorithm at the heart of it, which'd result in re-render of the small part of the component which is using our state. Ex: if we maintain a state as number of clicks for a button and show it somewhere in our app, when button is clicked React will update the value of clicks and reRender only the part which contains the number of clicks(since this is the only part here which has been changed).
Coding Assignment:
Clean up your code
Create a Folder Structure for your app
Make different files for each Components
Create a config file
Use all types of import and export
Create a Search Box in your App
Use useState to create a variable and bind it to the input box
Try to make your search bar work 
**/}

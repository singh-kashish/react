{
  /**
Chapter 08 - Let's get Classy
Theory Assignment:
How do you create Nested Routes react-router-dom cofiguration
    By passing children to the route, which'd be an array of objects with all the children, path will not begin with '/'. We can use Outlet component of react-router-dom
    to use as container for to be passed in children depending on the child route(this Outlet will be present in the parent component).
Read abt createHashRouter, createMemoryRouter from React Router docs.
What is the order of life cycle method calls in Class Based Components
    In class based components React works in 2 phases:-
        1. Render Phase : Constructor function is called -> Render is called : This is the phase where React batches up things into HTML, and is usually faster than commit phase.
        2. Commit Phase : Commit phase starts when React starts updating the DOM and refs, ComponentDIdMount method is called, if we need an API call we can make it at componentDidMount()-> once state is changed or new props are introduced or forced update happens React will Re-render the component after making required changes to DOM & refs
            and then componentDidUpdate lifecycle method is called. When component is unmounted/unloaded from view, componentDidUnmount lifecycle method is called where we can pass in code for clean up. Clean up code can be passed into a functional component via return() from useEffect() hook.
Why do we use componentDidMount?
    componentDidMount is used to do things like fetching from an API or updating state, after initial render with initial state (mostly handling network calls and setting up subscriptions). This'd allow the user to not see an empty screen for the time the data is loaded initially, once proper state is loaded React will render the component again with fetched data.
Why do we use componentWillUnmount? Show with example
    We use componentWillUnmount generally to write clean up code, as React allows us to create SPAs but the biggest problem is changing the component displayed on screen doesn't mean the callbacks called by older components is gone. They'd remain and consume space.
    An example:-
    In this App we have multiple routes and components with useEffects, if one of the component's useEffect initiates a this.timer=setInterval(()=>console.log('call'),1000), everytime we open that component the effect will be called and if we move to another route using the Header it'd still keep on printing 'Call' after every 1 second, if we open the component again it'd print 'Call' 2 times every 1 second, as the number of iterations grow -> number of callbacks being called will increase as well but we only wanted it to be called once. So, we can use componentWillUnmount in this case where we'll pass clearInterval(this.timer)
(Research) Why do we use super(props) in constructor?
    In JS we use super() to invoke a superclass's constuctor or to access properties on an object literal or class's[[Prototype]]. Javascript uses 'super()' to call the parent constructor
    method in the child that inherits the Parent. To access properties from the parent class we must call super(), else it'll throw an error. State is used to manage the data within the component,
    props refer to Properties which're read only. Props are used to pass data b/w different components.Props are immutable, when we miss passing props to Super() in constructor React won't assign props to this context. If we miss passing props to Super we'll be able to access this.props in render method as React will still assign them right afterward, and this.props won't work in Constructor but will work in Render method.   
(Research) Why can't we have the callback function of useEffect async?
    Async function implicitly returns a promise and useEffect expects its callback to either return nothing or a cleanup function which is called when the component unmounts. Using async here will cause a bug as cleanup function will never get called. We can either create
    a self-invoking anonymous function or create a nested named function.
Coding Assignment:
    Create a Class Based Component - Profile
    Create 2 class based child components
    Pass props from Parent to child
    Create a constructor
    Create a state variable inside child
    Use this.setState to update it
What if there are multiple state variables?
    If there are multiple state variable, react will only update state which has been passed to setState()
    Write a console.log for each lifecycle method
    Play with the console logs to find out the correct order of their execution
    Create interval inside componentDidMount?
    Use clearInterval to fix the issue caused by that interval
*/
}
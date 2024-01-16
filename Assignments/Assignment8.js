{
  /**
  Chapter 06 - Exploring the world
What is a Microservice?
    Microservice is a software architecture where software that relies on independently deployable web services( 
        is divided into several components where every components serves a particular purpose .Frontend for a web application can be one microservice, backend with APIs can be another(can be subdivided into multiple microservices), for a similar monolith architecture based web application all parts of code will be in one repository where as for Microservice architecture frontend, backEnd and other parts of application can be deployed independently as services.
What is Monolith architecture?
    Monolith architecture is a software architecture where application is built as a single unified unit where all parts of code and business logic are present in one directory while a microservice architecture is a collection of smaller, independently deployable services. 
What is the difference between Monolith and Microservice?
        Monolith architecture is a traditional model of software program, which is built as a unified unit that is self contained and independent from other applications. While microservice architecture divides and deploys this one large application into multiple components(services) which can communicate with each other and perform their own purpose independently. Scalling a large monolith application becomes a hassle as every small module change would need redeployment of the whole application and if one module fails then the whole application will fail whereas if Microservices are used and if one of the microservices fail due to some error then it's easier to debug as we'll only have to make changes in the affected service and redeploy it.
        Monolith architecture allows easier end to end testing, deployment, development for small app, when it grows big scaling will be a major concern as any change in language/frameworks affect the entire application.
        Why do we need a useEffect Hook?
        useEffect Hook lets us perform side effects within functional components, allows to run a callback function after every render depending to the passed dependency array and the state being accessed/updated. If our UI is dependent on some state then after every state change component will re-render, if we need to call an API at render or when some state changes then we can pass the callback function to call the API in the useEffect hook along with the desired dependency array(whenever the value of any element in dependency array is changed the callback function will be invoked)
What is Optional Chaining?
        Optional chaining(?.) operator allows to access an object's property or calls a function. If the accessed property or function results in an error(returns null or undefinded), then the expression shortcircuits and evaluates to undefined instead of throwing an error.
What is Shimmer UI?
        Shimmer UI is a version of the UI which doesn't really contain content, but instead mimics the layout and shapes of the content that will eventually appear once data loading is done(usaully). It can be used at other cases as well.
What is the difference between JS expression and JS statement
        A JS expression always returns a value which can be assigned to a variable, expressions can be 1+1,etc.
        A JS application comprises of various statements, multiple statements may occur on a single line if they're separated out by semi-colons. 
What is Conditional Rendering, explain with a code example
        Conditional Rendering is the process of displaying different content based on certain conditions or states.
What is CORS?
        CORS(Cross Origin Resource Sharing) is a mechanism which allows restricted resources on a web page to be accessed from another domain outside the domain from where it was initially served. CORS is a system of transmitting HTTP headers, that determines whether browsers will block frontend JS code from accessing responses from cross-origin requests.
What is async and await?
        Async and Await is new way of handling promises in JS as we don't have to pass callback functions, things will only execute after Await is finished. Async functions always return a promise, JS engine pushes async fn out of call stack till await isn't fulfilled/rejected(is in pending state). Once Await recives the value, JS engine will push the async function back into the call stack and execute it(This may look like function execution is suspended).
What is the use of `const json = await data.json();` in getRestaurants()
        data consists of a JSON object, which the .json() method will take in as input (takes a response stream->reads it to completion) and returns a promise that resolves with the result of parsing the data text as json and eventually output a JS object.
Coding Assignment :
        Play with the useEffect Hook to see when it is called?(before or after render)
        Play with dependency array in useEffect Hook
        Play with the developer console by putting a debugger in render and useEffect
        Call an actual API to get data
        Handle Error in your API call
        Build Shimmer UI when data in not loaded
        Render your UI with actual API data
        Make Search functionality work
        Make a Login Logout button which toggles with a state */
}
{
  /**
What are various ways to add images into our App? Explain with code examples
    If stored outside the repository(local copy not present)-> <img src={imageURL} />
    If stored inside repository(have a local copy)-> import Logo from "fileDirectory.fileType" -> <img src={Logo}/>
What would happen if we do console.log(useState())?
    It'll print the useState function/hook along with the methods in it.
How will useEffect behave if we don't add a dependency array ?
    It'll run the callback function every time re-render happens due to any reason. 
What is SPA?
    Single Page Application is a web application implementation that only loads a single web document, then updates the body content of that single document via JS APIs when different content needs to be shown. It doesn't need to load full web page for different routes.
What is difference between Client Side Routing and Server Side Routing?
    Server Side Routing is older way of implementing routing where when user changes the route, html is fetched from the server, parsed and shown to user(this leads to refresh/reload of the application). Whereas client side routing has code for all the routes already, so no network calls need to be made for reaching a route which's in the application(Doesn't reload the page when changing routes).
Coding Assignment:
    Add Shimmer Effect without installing a library
    Install react-router-dom
    Create a appRouter and Provide it to the app
    Create a Home, About, Contact Page with Link (use child routes)
    Make a Error page for routing errors
    Create a Restaurant Page with dynamic restaurant ID
    (Extra) - Create a login Page using Formik Library */
}

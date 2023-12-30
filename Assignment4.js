{
  /**
    1. What is JSX?
    -> JSX is HTML like syntax with full powers of Javascript. JSX is converted to React.createElement() calls using Babel which is an Object of React element which is then rendered(converted to HTML) using react-dom library.
    2. Superpowers of JSX.
    ->  - Sanitizes the javascript part of it( handles XSS) by" {React DOM escapes any values embedded in JSX before rendering them, everything is converted to a string before being rendered.}
        - Makes it easier to write and use React elements and components.
        - Ability to embed Javascript expressions in JSX using curly braces  instead{} and string using "", XSS is handled under the hood for expression related JSX due to which some user might try to inject some malicious code, but it'll be converted to string leaving it non useful.
    3. Role of type attribute in script tag? What options can be used there?
    -> Type attribute in script tag specifies the type of that element. It can used to tell whether that script is a Javascript module(processing of script content is deferred),
         a classic script,
        specification rules(JSON object that determines what resources should be prefetched or preRendered by the browser),
        importmap(JSON object that devs can use to control how browser resolves module specifiers when importing JS modules)
        Any other value-> Is treated as a data block and won't be processed by browser, all other attributes will be ignored including src.
       *Unlike classic scripts, module scripts require the use of the CORS protocol for cross-origin fetching. 
    4. {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent> </TitleComponent>} in JSX
    -> {TitleComponent} would spit out the React element whereas <TitleComponent/> will give out component which can be rendered by React DOM but won't allow component composition since it's self-enclosing tag.
        {<TitleComponent></TitleComponent>} would spit out the React component and will allow children to be passed to <TitleComponent> after here.
        ex: let TitleComponent = {
            <h1> Title </h1>
        };

*/
}

import React from "react";
import ReactDOM from "react-dom/client";
// let TitleComponent = () => {
//   return (
//     <div>
//       <h1>Title</h1>
//       <p>Comp</p>
//     </div>
//   );
// };
// console.warn(TitleComponent);
// console.warn(<TitleComponent></TitleComponent>);
// console.warn(<TitleComponent />);
const root = ReactDOM.createRoot(document.getElementById("main"));
// root.render(<TitleComponent />);
{
  /**Coding Assignment:
Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)
Create the same element using JSX
Create a functional component of the same with JSX
Pass attributes into the tag in JSX
Composition of Component(Add a component inside another)
{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX
Create a Header Component from scratch using Functional Components with JSX
Add a Logo on left
Add a search bar in middle
Add User icon on right
Add CSS to make it look nice

References
Babel: https://babeljs.io/
Attribute Type: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#attr-type
JS Modules: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
Babel Playground: https://babeljs.io/repl#
React without JSX: https://reactjs.org/docs/react-without-jsx.html
**/
}

const Head1 = React.createElement("h1", null, "Heading 1");
const Head2 = React.createElement("h2", null, "heading 2");
const Head3 = React.createElement("h3", null, "Heading 3");
const NestedHeader = React.createElement(
  "div",
  { className: "title" },
  Head1,
  React.createElement("h2", null, "heading 2"),
  React.createElement("h3", null, "Heading 3")
);
const ref = ReactDOM.createRoot(document.getElementById("replace"));
ref.render(NestedHeader);

//using jsx functional

const NestedJSXHeader = ({ number }) => {
  return (
    <div>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>jsx head 3</h3>
      <h4>{number}</h4>
    </div>
  );
};

function NavBar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" style={{width:"50px"}}/>
      <input type="text" label="Search Here" style={{ width: "90%" }}></input>
      <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconpacks.net%2Ffree-icon%2Fuser-3296.html&psig=AOvVaw0kprd9E3-6P18AiAphw-Dz&ust=1703760842867000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCOD13IS6r4MDFQAAAAAdAAAAABAE" />
    </div>
  );
}
ref.render(<NestedJSXHeader number="6" />);
root.render(<NavBar></NavBar>);

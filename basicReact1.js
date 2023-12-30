import React from "react";
import ReactDOM from "react-dom/client";

const headingViaReact = React.createElement("h5",{id:"headingReact"},"Heading via React");
const rootReact = ReactDOM.createRoot(document.getElementById("rootReact"));
const textReact = React.createElement("p",{id:"parag"},"para to nest");
rootReact.render([headingViaReact,textReact]);
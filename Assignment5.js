{
  /* Assignment
Is JSX mandatory for React?
    No
Is ES6 mandatory for React?
    No
{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX
    {TitleComp} will have the expression as declared for TitleComp, {<Title/>} refers to the component itself without any child components but we can insert children by using <Title> ....Childs </Title>
How can I write comments in JSX?
    {Just the way we write comments in Javascript}
What is <React.Fragment></React.Fragment> and <></> ?
    <React.Fragment></React.Fragment> is used to imitate a parent component. Ex: if we've some children at same level being returned from a component that's being called where a parent tag is already present but JSX will only allow 1 parent per component, we can use <React.Fragment> here to provide a parent instead of using a <div> as it'll not appear in DOM Tree. <></> are short denotions of <React.Fragment></React.Fragment>.
What is Virtual DOM?
    Virtual DOM is a representation of the actual DOM tree which React keeps track off, Reconciliation is done for this Virtual DOM and the actual DOM and then the parts which've changed or were added are rendered.
What is Reconciliation in React?
    Reconciliation in React is the algorithm React uses to diff between 2 tress here: Virtual DOM and last updated DOM tree. 
What is React Fiber?
    React Fiber is the ongoing new implementation of React's core algorithm - Reconciliation.  
Why we need keys in React? When do we need keys in React?
    Keys are tracked by React to avoid inconsistency and too many rerenders for same kind of elements being present at same level. It hints which child elments are stable across different renders.
Can we use index as keys in React?
    Yes, but only as last resort.
What is props in React? Ways to
    Props in React are properties which are passed down to a component, they can be compared to parameters in case for a function.
What is a Config Driven UI ?
    UI is driven by a configuration which is sent by backEnd, ex: if a particular property must be there with the data to present this version of UI then once we fetch the data our UI will render as per the set goals(Ex: Sale carousels are present of Amazon only during sales, this doesn't mean they make a different version of Amazon and host it- this is accomplished with the help of config driven UI).

    Coding Assignment:
Build a Food Ordering App
Think of a cool name for your app
Build a AppLayout
Build a Header Component with Logo & Nav Items & Cart
Build a Body Component
Build RestaurantList Component
Build RestaurantCard Component
Use static data initially
Make your card dynamic(pass in props)
Props - passing arguments to a function - Use Destructuring & Spread operator
Render your cards with dynamic data of restaurants
Use Array.map to render all the restaurants
PS. Basically do everything that I did in the class, in the same sequence. Don't skip small things.
References
Code Link: https://bitbucket.org/namastedev/namaste-react-live/src/master/
React without JSX: https://reactjs.org/docs/react-without-jsx.html
Virtual DOM: https://reactjs.org/docs/faq-internals.html
Reconciliation: https://reactjs.org/docs/reconciliation.html
React Fiber Architecture: https://github.com/acdlite/react-fiber-architecture
React Without ES6: https://reactjs.org/docs/react-without-es6.html
Index Keys as Anti-Pattern: https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/
*/
}

{
  /**
    Header
        - logo
        - searchBar
        - links
    Offers Carousel

    Restaurant List
        - Restaurant Card
            - img
            - name
            - cuisine
            - rating
*/
}

import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("main"));
let Header = () => {
  return (
    <div id="header">
      <div style={{ marginLeft: "10px" }}>
        <img src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"></img>
        <p>Zumbato</p>
      </div>
      <div id="searchHeader">
        <input type="text" placeholder="Search text here" />
        <button>Search</button>
      </div>
      <div id="links">
        <ul>
          <li>About</li>
          <li>Home</li>
          <li>Call</li>
        </ul>
      </div>
    </div>
  );
};
let Body = () => {
  return (
    <React.Fragment>
      <Header />
      <RestaurantList restaurants={dummyData} />
      <Footer />
    </React.Fragment>
  );
};
let dummyData = [
  {
    type: "restaurant",
    img: "https://b.zmtcdn.com/data/pictures/8/20337148/d8e64b2ed4bdba013d7fd91d87147083_o2_featured_v2.jpg?output-format=webp",
    name: "BIGGUY's",
    cuisine: ["lebanese", "american"],
    rating: 5,
  },
  {
    type: "restaurant",
    img: "https://b.zmtcdn.com/data/pictures/8/20337148/d8e64b2ed4bdba013d7fd91d87147083_o2_featured_v2.jpg?output-format=webp",
    name: "BIGGUY's",
    cuisine: ["lebanese", "american"],
    rating: 5,
  },
  {
    type: "restaurant",
    img: "https://b.zmtcdn.com/data/pictures/8/20337148/d8e64b2ed4bdba013d7fd91d87147083_o2_featured_v2.jpg?output-format=webp",
    name: "BIGGUY's",
    cuisine: ["lebanese", "american"],
    rating: 5,
  },
  {
    type: "restaurant",
    img: "https://b.zmtcdn.com/data/pictures/8/20337148/d8e64b2ed4bdba013d7fd91d87147083_o2_featured_v2.jpg?output-format=webp",
    name: "BIGGUY's",
    cuisine: ["lebanese", "american"],
    rating: 5,
  },
  {
    type: "restaurant",
    img: "https://b.zmtcdn.com/data/pictures/8/20337148/d8e64b2ed4bdba013d7fd91d87147083_o2_featured_v2.jpg?output-format=webp",
    name: "BIGGUY's",
    cuisine: ["lebanese", "american"],
    rating: 5,
  },
  {
    type: "restaurant",
    img: "https://b.zmtcdn.com/data/pictures/8/20337148/d8e64b2ed4bdba013d7fd91d87147083_o2_featured_v2.jpg?output-format=webp",
    name: "BIGGUY's",
    cuisine: ["lebanese", "american"],
    rating: 5,
  },
  {
    type: "restaurant",
    img: "https://b.zmtcdn.com/data/pictures/8/20337148/d8e64b2ed4bdba013d7fd91d87147083_o2_featured_v2.jpg?output-format=webp",
    name: "BIGGUY's",
    cuisine: ["lebanese", "american"],
    rating: 5,
  },
  {
    type: "restaurant",
    img: "https://b.zmtcdn.com/data/pictures/8/20337148/d8e64b2ed4bdba013d7fd91d87147083_o2_featured_v2.jpg?output-format=webp",
    name: "BIGGUY's",
    cuisine: ["lebanese", "american"],
    rating: 5,
  },
];
let Restaurant = (restaurant) => {
  return (
    <div id="restaurant">
      <img alt="restaurantImage" src={restaurant.img} />
      <h3>{restaurant.name}</h3>
      <h5>{restaurant.cuisine.join(", ")}</h5>
      <h6>{restaurant.rating + " stars"}</h6>
    </div>
  );
};
let RestaurantList = ({ restaurants }) => {
  return (
    <div id="restaurantList">
      {restaurants.map((rest, index) => {
        return <Restaurant {...rest} key={index} />;
      })}
    </div>
  );
};
let Footer = () => {
  return (
    <div id="Footer">
      <h1>Zumbato</h1>
      <h2>Made to explore</h2>
    </div>
  );
};
root.render(<Body></Body>);

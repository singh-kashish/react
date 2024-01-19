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

// moved code to separate files/folders.
//jumpstart your project with the thousands of components shared by the React open source community like:-
// Chakra UI and Material UI.

// component/props/states
//Pro-tip: Use a JSX Converter : We recommend using a converter to translate your existing HTML and SVG to JSX

//When you nest content inside a JSX tag, the parent component will receive that content in a prop called children

///Don’t try to “change props” instead use state for user input/interaction....

// To pass props, add them to the JSX, just like you would with HTML attributes.
// To read props, use the function Avatar({ person, size }) destructuring syntax.
// You can specify a default value like size = 100, which is used for missing and undefined props.
// You can forward all props with <Avatar {...props} /> JSX spread syntax, but don’t overuse it!
// Nested JSX like <Card><Avatar /></Card> will appear as Card component’s children prop.
// Props are read-only snapshots in time: every render receives a new version of props.
// You can’t change props. When you need interactivity, you’ll need to set state.

//A component must return something. if not want anything to render, you can return null:

//{isPacked && '✔'} --if isPacked, then (&&) render the checkmark, otherwise, render nothing”. || if isPacked false then whole expression becomes false

//JSX elements directly inside a map() call always need keys! : when Rendering Lists use keys

// Where to get your key
// Different sources of data provide different sources of keys:

// Data from a database: If your data is coming from a database, you can use the database keys/IDs, which are unique by nature.
// Locally generated data: If your data is generated and persisted locally (e.g. notes in a note-taking app), use an incrementing counter, crypto.randomUUID() or a package like uuid when creating items.

// do not generate keys on the fly, e.g. with key={Math.random()}. This will cause keys to never match up between renders, leading to all your components and DOM being recreated every time. Not only is this slow, but it will also lose any user input inside the list items. Instead, use a stable ID based on the data.

// Note that your components won’t receive key as a prop. It’s only used as a hint by React itself. If your component needs an ID, you have to pass it as a separate prop: <Profile key={id} userId={id} />.

// keeping components pure| Why does React care about purity?
//A component must be pure./ not change any obj/variable that existed before it was called/ same input: same output
// component ke under koi increment/decrement ni krna :  impure ho jyega component
// <React.StrictMode> :-  to Detect impure calculations

//your UI as a tree:
//React creates a UI tree from your components.  the UI tree is then used to render to the DOM.
//Trees are a common way to represent the relationship between entities. They are often used to model UI.
// Dependency trees are used by build tools to bundle the necessary code to ship an app.

//...............//

// Adding Interactvity ////////////
//In React, data that changes over time is called state.You can add state to any component, and update it as needed.

//Responding to Events:
// Different ways to write an event handler
// How to pass event handling logic from a parent component
// How events propagate and how to stop them

{
  /* <button onClick={() => {  
  alert('You clicked me!');
}}> */
}
// or use plain function handleClick(){alert('you clicked me')}

 //All events propagate in React except onScroll, which only works on the JSX tag you attach it to
 // to stop propagation Call: e.stopPropagation(), preventing the event from bubbling further.


 //State: it's a component’s memory
 //const [index, setIndex] = useState(0); //In this case, you want React to remember index.
 
 // index- > state variable  | setIndex-> state setter function , [] -> Array destructring 

//Hooks—functions starting with use—can only be called at the top level of your components or your own Hooks. You can’t call Hooks inside conditions, loops, or other nested functions


//  Render & commit:
//4 step process:-
// initial render: createRoot - root.render()  | Trigger
// component renders  | Render
// modify/commit changes to the DOM | commit
//After rendering is done and React updated the DOM, the browser will repaint/renders the screen

// state as snapshot:
// “Rendering” means that React is calling your component, which is a function. The JSX you return from that function is like a snapshot of the UI in time. Its props, event handlers, and local variables were all calculated using its state at the time of the render
//Unlike regular JavaScript variables, React state behaves more like a snapshot. Setting it does not change the state variable you already have, but instead triggers a re-render


//Queueing a Series of State Updates:-
// This lets you update multiple state variables—even from multiple components—without triggering too many re-renders. But this also means that the UI won’t be updated until after your event handler, and any code in it, completes. This behavior, also known as batching, makes your React app run much faster. It also avoids dealing with confusing “half-finished” renders where only some of the variables have been updated.
//setNumber(n => n + 1) //a function that calculates the next state based on the previous one in the queue
//setEnabled(enabled => !enabled), or  use a prefix like setEnabled(prevEnabled => !prevEnabled).

// Setting state does not change the variable in the existing render, but it requests a new render.
// React processes state updates after event handlers have finished running. This is called batching.
// To update some state multiple times in one event, you can use setNumber(n => n + 1) updater function.


// updating objects in state:
// Treat all state in React as immutable.
// When you store objects in state, mutating them will not trigger renders and will change the state in previous render “snapshots”.
// Instead of mutating an object, create a new version of it, and trigger a re-render by setting state to it.
// You can use the {...obj, something: 'newValue'} object spread syntax to create copies of objects.
// Spread syntax is shallow: it only copies one level deep.
// To update a nested object, you need to create copies all the way up from the place you’re updating.
// To reduce repetitive copying code, use Immer.


//
// refer-> table of common array operations
// You can put arrays into state, but you can’t change them.
// Instead of mutating an array, create a new version of it, and update the state to it.
// You can use the [...arr, newItem] array spread syntax to create arrays with new items.
// You can use filter() and map() to create new arrays with filtered or transformed items.
// You can use Immer to keep your code concise.


//.................












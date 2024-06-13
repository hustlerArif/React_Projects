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

// Adding Interactvity:
//In React, data that changes over time is called state.You can add state to any component, and update it as needed.
{
  /* <button onClick={() => {  
  alert('You clicked me!');
}}> */
}
// or use plain function handleClick(){alert('you clicked me')}





function Button({ onSmash, children }) {
  return (
    <button onClick={onSmash}>{children}</button>
  )
}

export default function App() {
  return (
    <>
      <Button onSmash={() => alert("playing games..")}>Play Game</Button>
      <Button onSmash={() => alert("downloading games..")}>
        download Game
      </Button>
    </>
  );
}

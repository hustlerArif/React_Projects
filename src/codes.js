// first react component:
// function Profile() {
//   return (
//     <>
//       <img src="https://plus.unsplash.com/premium_photo-1697945800303-2be12402095e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c21hbGwlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
//        alt="img not found"
//        ></img>
//     </>
//   );
// }

import { useState } from "react";

// export default function App() {
//   return (
//     <>
//       <Profile />
//       <Profile />
//     </>
//   );
// }

// jsx :
// import { Profile } from "./Profile";

// function Profile() {
//     return (
//       <>
//         <img src="https://plus.unsplash.com/premium_photo-1697945800303-2be12402095e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c21hbGwlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
//          alt="img not found"
//          width={100}
//          height={100}

//          ></img>

//       </>
//     );
//   }
// export default function App() {

//     const person = {
//         name: 'Gregorio Yd. Zara',
//         theme: {
//           backgroundColor: 'black',
//           color: 'pink'
//         }
//       };
//   return (
//     <>

// <h1>Hedy Lamarr's Todos</h1>

//       <Profile />
//       <Profile />
//       <br/>
//    <div style={person.theme}>
//    {person.name}
//       <ul>
//         <li>Invent new traffic lights</li>
//         <li>Rehearse a movie scene</li>
//         <li>Improve spectrum technology</li>
//       </ul>
//    </div>
//     </>
//   );
// }

// passing props
// function Profile({person,size}) {
//   return (
//     <>
//     {person.fullName}
//       <img
//         src="https://plus.unsplash.com/premium_photo-1697945800303-2be12402095e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c21hbGwlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D"
//         alt="img not found"
//         width={size}
//         height={size}
//       ></img>
//     </>
//   );
// }
// export default function App() {
//   return (
//     <>
//       <Profile person={{ fullName: "Gregorio Yd. Zara" }} size={100} />
//       <Profile person={{ fullName: "sachin" }} size={300} />

//     </>
//   );
// }

//conditional rendering with list-key
// function Item({isPacked,name}) {
//   return (
//     <>
//     <li>
//     {name} {isPacked && 'ok'}
//     </li>
//     </>
//   );
// }
// export default function App() {
//  const people = [{
//         id: 0,
//         name: 'Creola Katherine Johnson',
//         profession: 'mathematician',
//         accomplishment: 'spaceflight calculations',
//         imageId: 'MK3eW3A'
//       }, {
//         id: 1,
//         name: 'Mario José Molina-Pasquel Henríquez',
//         profession: 'chemist',
//         accomplishment: 'discovery of Arctic ozone hole',
//         imageId: 'mynHUSa'
//       }, {
//         id: 2,
//         name: 'Mohammad Abdus Salam',
//         profession: 'physicist',
//         accomplishment: 'electromagnetism theory',
//         imageId: 'bE7W1ji'
//       }, {
//         id: 3,
//         name: 'Percy Lavon Julian',
//         profession: 'chemist',
//         accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
//         imageId: 'IOjWm71'
//       }, {
//         id: 4,
//         name: 'Subrahmanyan Chandrasekhar',
//         profession: 'astrophysicist',
//         accomplishment: 'white dwarf star mass calculations',
//         imageId: 'lrWQx8l'
//       }];

//      const listItems =people.map(person=>

//        <li key={person.id}>
//          {person.name}
//        </li>
//     )

//   return (
//     <>
//    {listItems}
//      <ul>
//         <Item
//           isPacked={true}
//           name="Space suit"
//         />
//         <Item
//           isPacked={true}
//           name="Helmet with a golden leaf"
//         />
//         <Item
//           isPacked={false}
//           name="Photo of Tam"
//         />
//       </ul>

//     </>
//   );
// }

//..............................//

//Adding Interactivity:

// function Button({ onSmash, children }) {
//   return (
//     <button onClick={onSmash}>{children}</button>
//   )
// }

// export default function App() {
//   return (
//     <>
//       <Button onSmash={() => alert("playing games..")}>Play Game</Button>
//       <Button onSmash={() => alert("downloading games..")}>
//         download Game
//       </Button>
//     </>
//   );
// }

// import { useState } from "react";
// const sculptureList = [
//   {
//     name: "Homenaje a la Neurocirugía",
//     artist: "Marta Colvin Andrade",
//     description:
//       "Although Colvin is predominantly known for abstract themes that allude to pre-Hispanic symbols, this gigantic sculpture, an homage to neurosurgery, is one of her most recognizable public art pieces.",
//     url: "https://i.imgur.com/Mx7dA2Y.jpg",
//     alt: "A bronze statue of two crossed hands delicately holding a human brain in their fingertips.",
//   },
//   {
//     name: "Floralis Genérica",
//     artist: "Eduardo Catalano",
//     description:
//       "This enormous (75 ft. or 23m) silver flower is located in Buenos Aires. It is designed to move, closing its petals in the evening or when strong winds blow and opening them in the morning.",
//     url: "https://i.imgur.com/ZF6s192m.jpg",
//     alt: "A gigantic metallic flower sculpture with reflective mirror-like petals and strong stamens.",
//   },
//   {
//     name: "Eternal Presence",
//     artist: "John Woodrow Wilson",
//     description:
//       'Wilson was known for his preoccupation with equality, social justice, as well as the essential and spiritual qualities of humankind. This massive (7ft. or 2,13m) bronze represents what he described as "a symbolic Black presence infused with a sense of universal humanity."',
//     url: "https://i.imgur.com/aTtVpES.jpg",
//     alt: "The sculpture depicting a human head seems ever-present and solemn. It radiates calm and serenity.",
//   },
//   {
//     name: "Moai",
//     artist: "Unknown Artist",
//     description:
//       "Located on the Easter Island, there are 1,000 moai, or extant monumental statues, created by the early Rapa Nui people, which some believe represented deified ancestors.",
//     url: "https://i.imgur.com/RCwLEoQm.jpg",
//     alt: "Three monumental stone busts with the heads that are disproportionately large with somber faces.",
//   },
//   {
//     name: "Blue Nana",
//     artist: "Niki de Saint Phalle",
//     description:
//       "The Nanas are triumphant creatures, symbols of femininity and maternity. Initially, Saint Phalle used fabric and found objects for the Nanas, and later on introduced polyester to achieve a more vibrant effect.",
//     url: "https://i.imgur.com/Sd1AgUOm.jpg",
//     alt: "A large mosaic sculpture of a whimsical dancing female figure in a colorful costume emanating joy.",
//   },
//   {
//     name: "Ultimate Form",
//     artist: "Barbara Hepworth",
//     description:
//       "This abstract bronze sculpture is a part of The Family of Man series located at Yorkshire Sculpture Park. Hepworth chose not to create literal representations of the world but developed abstract forms inspired by people and landscapes.",
//     url: "https://i.imgur.com/2heNQDcm.jpg",
//     alt: "A tall sculpture made of three elements stacked on each other reminding of a human figure.",
//   },
//   {
//     name: "Cavaliere",
//     artist: "Lamidi Olonade Fakeye",
//     description:
//       "Descended from four generations of woodcarvers, Fakeye's work blended traditional and contemporary Yoruba themes.",
//     url: "https://i.imgur.com/wIdGuZwm.png",
//     alt: "An intricate wood sculpture of a warrior with a focused face on a horse adorned with patterns.",
//   },
//   {
//     name: "Big Bellies",
//     artist: "Alina Szapocznikow",
//     description:
//       "Szapocznikow is known for her sculptures of the fragmented body as a metaphor for the fragility and impermanence of youth and beauty. This sculpture depicts two very realistic large bellies stacked on top of each other, each around five feet (1,5m) tall.",
//     url: "https://i.imgur.com/AlHTAdDm.jpg",
//     alt: "The sculpture reminds a cascade of folds, quite different from bellies in classical sculptures.",
//   },
//   {
//     name: "Terracotta Army",
//     artist: "Unknown Artist",
//     description:
//       "The Terracotta Army is a collection of terracotta sculptures depicting the armies of Qin Shi Huang, the first Emperor of China. The army consisted of more than 8,000 soldiers, 130 chariots with 520 horses, and 150 cavalry horses.",
//     url: "https://i.imgur.com/HMFmH6m.jpg",
//     alt: "12 terracotta sculptures of solemn warriors, each with a unique facial expression and armor.",
//   },
//   {
//     name: "Lunar Landscape",
//     artist: "Louise Nevelson",
//     description:
//       "Nevelson was known for scavenging objects from New York City debris, which she would later assemble into monumental constructions. In this one, she used disparate parts like a bedpost, juggling pin, and seat fragment, nailing and gluing them into boxes that reflect the influence of Cubism’s geometric abstraction of space and form.",
//     url: "https://i.imgur.com/rN7hY6om.jpg",
//     alt: "A black matte sculpture where the individual elements are initially indistinguishable.",
//   },
//   {
//     name: "Aureole",
//     artist: "Ranjani Shettar",
//     description:
//       'Shettar merges the traditional and the modern, the natural and the industrial. Her art focuses on the relationship between man and nature. Her work was described as compelling both abstractly and figuratively, gravity defying, and a "fine synthesis of unlikely materials."',
//     url: "https://i.imgur.com/okTpbHhm.jpg",
//     alt: "A pale wire-like sculpture mounted on concrete wall and descending on the floor. It appears light.",
//   },
//   {
//     name: "Hippos",
//     artist: "Taipei Zoo",
//     description:
//       "The Taipei Zoo commissioned a Hippo Square featuring submerged hippos at play.",
//     url: "https://i.imgur.com/6o5Vuyu.jpg",
//     alt: "A group of bronze hippo sculptures emerging from the sett sidewalk as if they were swimming.",
//   },
// ];

// export default function App() {
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);
//   const hasNext= index < sculptureList.length-1

//   function handleClick() {
//     if(hasNext){
//         setIndex(index + 1);
//     }
//     else{
//         setIndex(0)
//     }
//   }
//   function handleShowDetail() {
//     setShowMore(!showMore);
//   }

//   let sculpture = sculptureList[index];
//   console.log(sculpture);

//   return (
//     <>
//       <button onClick={handleClick}>Next</button>
//       <h2>
//         {sculpture.name} by {sculpture.artist}
//       </h2>

//       <h3>
//         {index + 1} out of {sculptureList.length}
//       </h3>
//       <button onClick={handleShowDetail}>

//         {showMore ? "Hide" : "show"} detail
//       </button>
//       {showMore && <p>{sculpture.description}</p>}

//       <img src={sculpture.url} alt={sculpture.alt}></img>
//     </>
//   );
// }

// export default function App() {
//   return (
//     <Toolbar
//       onPlayMovie={() => alert("playing movie")}
//       onUploadImage={() => alert("uploading image")}
//     />
//   );
// }

// function Toolbar({ onPlayMovie, onUploadImage }) {
//   return (
//     <>
//       <Button onClick={onPlayMovie}>Play Movie</Button>
//       <Button onClick={onUploadImage}>upload Image</Button>
//     </>
//   );
// }

// function Button({ onClick, children }) {
//   return (
//     <>
//       <button onClick={onClick}>{children}</button>
//     </>
//   );
// }

// export default function App() {
//   const [to, setTo] = useState("Alice");
//   const [message, setMessage] = useState("hello");

//   function handleSubmit(event) {
//     event.preventDefault();
//     alert(`You said ${message} to ${to}`);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         To:
//         <select value={to} onChange={(event) => setTo(event.target.value)}>
//           <option value={"Alice"}>Alice</option>
//           <option value={"Bob"}>Bob</option>
//         </select>
//       </label>

//       <textarea
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       ></textarea>

//       <button type="submit">sumbit</button>
//     </form>
//   );
// }

// export default function App() {
//   const [score, setScore] = useState(0);
//   function increment() {
//     // setScore(score + 1);
//     setScore((s) => s + 1); // updater function
//   }

//   return (
//     <>
//       <button onClick={() => increment()}> +1</button>
//       <button
//         onClick={() => {
//           increment();
//           increment();
//         }}
//       >
//        {''}
//         +3
//       </button>
//       score: {score}
//     </>
//   );
// }

//If copying objects in code gets tedious, you can use a library like Immer to reduce repetitive code:-

// import { useImmer } from "use-immer";
// export default function App() {
//   // const [person, setPerson] = useState({
//   //   name: "carl max",
//   //   artwork: {
//   //     title: "GOAT of all Time",
//   //     city: "New York",
//   //   },
//   // });
//   const [person, setPerson] = useImmer({
//     name: "carl max",
//     artwork: {
//       title: "GOAT of all Time",
//       city: "New York",
//     },
//   });

//   // function handleNameChange(e) {
//   //   setPerson({ ...person, name: e.target.value });
//   // }
//   function handleNameChange(e) {
//     setPerson((draft) => {
//       draft.name = e.target.value;
//     });
//   }

//   // function handleTitleChange(e) {
//   //   setPerson({
//   //     ...person,
//   //     artwork: {
//   //       ...person.artwork,
//   //       title: e.target.value,
//   //     },
//   //   });
//   // }
//   function handleTitleChange(e) {
//     setPerson((draft) => {
//       draft.artwork.title = e.target.value;
//     });
//   }

//   console.log(person.name);
//   console.log(person.artwork.title);
//   return (
//     <>
//       <input value={person.name} onChange={handleNameChange}></input>
//       <input value={person.artwork.title} onChange={handleTitleChange}></input>
//     </>
//   );
// }

// import { useState } from 'react';
//Updating arrays in state:
// const initialList = [
//   { id: 0, title: "Big Bellies", seen: false },
//   { id: 1, title: "Lunar Landscape", seen: true },
//   { id: 2, title: "Terracotta Army", seen: true },
// ];

// export default function App() {
//   const [list, setList] = useState(initialList);

//   function handleToggle(artworkId, nextSeen) {
//     setList(
//       list.map((artwork) => {
//         if (artwork.id === artworkId) {
//           return { ...artwork, seen: nextSeen };
//         } else {
//           return artwork;
//         }
//       })
//     );
//   }

//   return (
//     <>
//       <h1>Art Bucket List</h1>
//       <h2>My list of art to see:</h2>
//       <ItemList artworks={list} onToggle={handleToggle} />
//     </>
//   );
// }

// function ItemList({ artworks, onToggle }) {
//   return (
//     <ul>
//       {artworks.map((artwork) => (
//         <li key={artwork.id}>
//           <label>
//             <input
//               type="checkbox"
//               checked={artwork.seen}
//               onChange={(e) => {
//                 onToggle(artwork.id, e.target.checked);
//               }}
//             />
//             {artwork.title}
//             {artwork.title}
//           </label>
//         </li>
//       ))}
//     </ul>
//   );
// }

// Managing State: ///////////////////////////////////////////


// choosing state structure:
// export default function App() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");

//   const fullName = firstName + " " + lastName;

//   return (
//     <>
//       <h2>Let’s check you in</h2>
//       <label>
//         First name:{" "}
//         <input
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//         />
//       </label>
//       <label>
//         Last name:{" "}
//         <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
//       </label>
//       <p>
//         Your ticket will be issued to: <b>{fullName}</b>
//       </p>
//     </>
//   );
// }


//Sharing state between components :
// export default function App() {
//     const [activeIndex, setActiveIndex] = useState(0);
//     return (
//       <>
//         <h2>Almaty, Kazakhstan</h2>
//         <Panel
//           title="About"
//           isActive={activeIndex === 0}
//           onShow={() => setActiveIndex(0)}
//         >
//           With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
//         </Panel>
//         <Panel
//           title="Etymology"
//           isActive={activeIndex === 1}
//           onShow={() => setActiveIndex(1)}
//         >
//           The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
//         </Panel>
//       </>
//     );
//   }
  
//   function Panel({
//     title,
//     children,
//     isActive,
//     onShow
//   }) {
//     return (
//       <section className="panel">
//         <h3>{title}</h3>
//         {isActive ? (
//           <p>{children}</p>
//         ) : (
//           <button onClick={onShow}>
//             Show
//           </button>
//         )}
//       </section>
//     );
//   }
  
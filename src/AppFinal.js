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
function Item({isPacked,name}) {
    return (
      <>
      <li>
      {name} {isPacked && 'ok'}
      </li>
      </>
    );
  }
  export default function App() {
   const people = [{
          id: 0,
          name: 'Creola Katherine Johnson',
          profession: 'mathematician',
          accomplishment: 'spaceflight calculations',
          imageId: 'MK3eW3A'
        }, {
          id: 1,
          name: 'Mario José Molina-Pasquel Henríquez',
          profession: 'chemist',
          accomplishment: 'discovery of Arctic ozone hole',
          imageId: 'mynHUSa'
        }, {
          id: 2,
          name: 'Mohammad Abdus Salam',
          profession: 'physicist',
          accomplishment: 'electromagnetism theory',
          imageId: 'bE7W1ji'
        }, {
          id: 3,
          name: 'Percy Lavon Julian',
          profession: 'chemist',
          accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
          imageId: 'IOjWm71'
        }, {
          id: 4,
          name: 'Subrahmanyan Chandrasekhar',
          profession: 'astrophysicist',
          accomplishment: 'white dwarf star mass calculations',
          imageId: 'lrWQx8l'
        }];
        
       const listItems =people.map(person=> 
          
         <li key={person.id}>
           {person.name}
         </li>
      )
  
    return (
      <>
     {listItems}
       <ul>
          <Item
            isPacked={true}
            name="Space suit"
          />
          <Item
            isPacked={true}
            name="Helmet with a golden leaf"
          />
          <Item
            isPacked={false}
            name="Photo of Tam"
          />
        </ul>
        
      </>
    );
  }
  
  
  
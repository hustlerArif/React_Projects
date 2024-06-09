// import { useState } from "react";
// const App=()=>{

import { useState } from "react"

//     function MyButton() {
//         const [count, setCount] = useState(0);  // increasing value here in a component
      
//         function handleClick() {
//           setCount(count + 1);
//         }
      
//         return (
//           <button onClick={handleClick}>
//             Clicked {count} times
//           </button>
//         );
//       }

// // each button remembers own count state and doesnt affect other button
//     return(
//         <div>
//         <h1>Counters that update separately</h1>
//         <MyButton />  
//         <MyButton />
//       </div>
//     )
// }

// export default  App


// sharing data btw component




//This is called “lifting state up”. By moving state up, you’ve shared it between components.
// import { useState } from "react";
// const App=()=>{

//     const [count, setCount] = useState(0); 
      
//     function handleClick() {
//       setCount(count + 1);
//     }


//     const MyButton=({count,onClick})=> {
       
//         return (
//           <button onClick={onClick}>
//             Clicked {count} times
//           </button>
//         );
//       }
    

//     return(
//         <div>
//         <h1>Counters that update together</h1>
//         <MyButton count={count} onClick={handleClick} />  
//         <MyButton count={count} onClick={handleClick} />  
       
//       </div>
//     )
// }

// export default  App



// self practice

const App=()=>{

    const [count,setCount] =useState(0)

    const handleClick=()=>{
        setCount(count+1)
    }
    

    const ButtonComp=({count,onClick})=>{

        return(
            <>
            <div>

            <button onClick={onClick}>clicked {count} times</button>
            </div>
            </>
        )
    }

    return(

        <>
        
        counters that change together
        <ButtonComp count={count} onClick={handleClick} />
        <ButtonComp count={count} onClick={handleClick} />
        

        </>

    )
}

export default  App




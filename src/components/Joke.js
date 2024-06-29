import React, { useState } from 'react'
import Button from './Button'

function Joke() {

    const [joke,setJoke]=useState('')

    const fetchApi=()=>{
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
     .then(res=>res.json())
     .then(data=> setJoke(data.joke))

    }

  return (
    <div>
        
        <Button callApi={fetchApi} />
        {joke}
      {/* <button onClick={fetchApi}>next</button> */}
        </div>
  )
}

export default Joke
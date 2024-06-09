import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const App = () => {
  const [message, setMessage] = useState("hi");
  const [counter, setCounter] = useState(0);
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  const FirstName = "Sam";
  const data = {
    item: "key",
    price: 230,
  };

  // let message='hi '
  const handleEvent = () => {
    // message='bye'
    // console.log(message)

    setMessage("bye");
  };

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    setCounter(counter - 1);
  };

  const updateColor = () => {
    // setCar({color:'blue'}) // When state is updated, the entire state gets overwritten
    setCar((pstate) => {
      return {
        ...pstate,
        color: "blue",
      };
    });
  };

  let isLoggedIn = true;

  const MissedGoal = () => {
    return <h1>Missed!</h1>;
  };
  const MadeGoal = () => {
    return <h1>Goal Acheived now!</h1>;
  };

  const Goal = (isGoal) => {
    const isGoals = isGoal;

    // if(isGoals){
    //   return <MadeGoal/>
    // }
    // return <MissedGoal/>
    return <>{isGoals ? <MadeGoal /> : <MissedGoal />}</>;   // component nesting
  };

  const Car = (props) => {
    return <li> i am a {props.brand}</li>;
  };

  const Garage = () => {
    // const cars=['bmw','mercedes','AMZ']  // each child in the list should have unique key prop
    const cars = [
      { id: 1, brand: "bmw" },
      { id: 2, brand: "mercedes" },
      { id: 3, brand: "AMZ" },
    ];

    return (
      <>
        {/* {cars.map((car)=> <Car brand={car} /> )} */}
        {cars.map((car) => (
          <Car key={car.id} brand={car.brand} />
        ))}
      </>
    );
  };

  const Timer = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let timer = setTimeout(() => {
        setCount(count + 1);
      }, 1000);

      return () => clearTimeout(timer); //cleanup process
    }, []);

    return (
      <>
        <div> I have rendered this {count} times</div>
      </>
    );
  };

  useEffect(() => {
    // Network call using fetch API
    async function getItem() {
      const promise = await fetch(
        "https://react-app-a5d67-default-rtdb.asia-southeast1.firebasedatabase.app/items.json"
      );
      // console.log(response)
      // .then(res=>console.log(res.json()))
      const response = await promise.json();
      console.log(response);
    }

    getItem();
  }, []);


  // form handling using React
  const MyForm = (data) => {
    const [name, setName] = useState("");
    console.log(data)
    const handleSubmit = (event) => {
      event.preventDefault();
      alert(`name you entered is ${name} and result is ${data}`);
    };

    return (
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setName(e.target.value)}></input>
      </form>
    );
  };

  const MyForm1 = () => {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(inputs);
    };

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            name="username"
            // value={inputs.username || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter your age:
          <input
            type="number"
            name="age"
            // value={inputs.age || ""}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
    );
  };

  const MyForm2 = () => {
    //control the values of more than one input field by adding a name attribute to each element.
    //To access the fields in the event handler use the event.target.name and event.target.value syntax.
    //To update the state, use square brackets [bracket notation] around the property name.

    const [input, setInput] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInput((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(input);
    };

    return (
      <form onSubmit={handleSubmit}>
        <label>
         
          Enter your fav Name
          <input type="text" name="userName" onChange={handleChange}></input>
        </label>

        <label>
       
          Enter your age
          <input type="number" name="age" onChange={handleChange}></input>
        </label>
        <button>save</button>
      </form>
    );
  };

  // let data1='message1'

  const [results,setResults] =useState('message allowed')


  return (
    <>
      <p>
       
        Hello {FirstName} {data.item}{" "}
      </p>
      {/* <Pages brand="Ford"></Pages> */}
      {message}
      <button onClick={handleEvent}>submit</button>

      <button onClick={decreaseCounter}>-</button>
      <span>{counter}</span>
      <button onClick={increaseCounter}>+</button>

      <div>
        {" "}
        It is a {car.color} {car.model} from {car.year}.
      </div>
      <button type="button" onClick={updateColor}>
        Blue
      </button>
      {/* When state is updated, the entire state gets overwritten. */}

      {isLoggedIn ? `isLoggedin:${isLoggedIn}` : "no"}

      {/* <MissedGoal></MissedGoal>   */}
      <Goal isGoal={true} />

      <Garage />

      <Timer />

      <MyForm data={results} />
      <MyForm1 />
      <MyForm2 />

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      {/* <Route path="/contact" element={<Contact/>}></Route> */}

    </Routes>
    </BrowserRouter>

    </>
  );
};

export default App;

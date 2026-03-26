import { useState , useEffect } from "react"; // Importing the useState hook from React to manage state in the Counter component
export default function Counter() {
    const [count, setCount] = useState(0); // Destructuring assignment to get count and setCount from useState
    function increment() {
        // setCount(count + 1); // like this after applying all setCount 4 times it will only increment by 1 because of how state updates are batched in React. So to ensure that each update is based on the previous state, we have to pass a function to setCount instead of a value. This function will receive the previous state as an argument and return the new state.  
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        setCount(prevCount => {
            return prevCount + 1; // Using the functional form of setState to ensure that each update is based on the previous state
        });
        setCount(prevCount => {
            return prevCount + 1;
        });
        setCount(prevCount => {
            return prevCount + 1;
        });
        setCount(prevCount => {
            return prevCount + 1;
        }); // now it will increment by 4 because each update is based on the previous state
        console.log(count);
    }

    useEffect( function hello() { 
        console.log("Count changed:", count);
    }, [count]); // useEffect is a hook that allows you to perform side effects in function components. It takes a function as an argument and an optional array of dependencies. The function will be called after the component renders and whenever any of the dependencies change. In this case, the function will be called after every render and whenever the count state changes. The return value of the function will be ignored, so returning "Hello World" does not have any effect.
    // if [] mai empty Array pass karunga to useEffect sirf component ke first render pe chalega (means 1st time run hoga bus), aur agar mai [count] pass karunga to useEffect count state ke change hone pe chalega. Agar mai kuch bhi pass nahi karunga to useEffect har render pe chalega.
 
    return ( 
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}
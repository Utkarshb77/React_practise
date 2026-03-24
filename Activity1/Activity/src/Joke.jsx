import { useState, useEffect } from "react";

export default function Joke() {
    const [joke, setJoke] = useState("");
    const url = "https://v2.jokeapi.dev/joke/Any?type=single";
    const getNewJoke = async () => {
        let responce = fetch(url);
        let jsonResponce = await responce.json();
        setJoke(jsonResponce.joke);
    }
    
    useEffect(() =>{
        async function getFirstJoke() {
            let responce = await fetch(url);
            let jsonResponce = await responce.json();
            setJoke(jsonResponce.joke);
        }
        getFirstJoke(); // This will cause an infinite loop of fetching jokes, which is not ideal. Consider removing this line to fetch only one joke on component mount.
    }, []);

    return (
        <div>
            <h1>Here's a joke for you:</h1>
            <p>{joke}</p>
        </div>
    );
}
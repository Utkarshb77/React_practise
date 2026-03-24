import { useState } from "react"
import {v4 as uuidv4} from "uuid"; // used to generate unique ids for each todo item

export default function Todolist() {
    const [todos, setTodos] = useState([{ task : "task1", id: uuidv4() }]); // initialize the todos state with an object containing a task and a unique id
    const [newTodo, setNewTodo] = useState("");

    let addTask = () => {
        setTodos(prevtodos => {
            return [...prevtodos, { task: newTodo, id: uuidv4() , isdone: false }];
        });
        setNewTodo("");
    }

    let handleInputChange = (event) => {
        setNewTodo(event.target.value);
    }

    let deletetodo = (id) => {
        setTodos((prevtodos) => prevtodos.filter(todo => todo.id !== id));
    }

    let markasdone = (id) => {
        setTodos((todos) => 
            todos.map((prevtodos) => {
            if (prevtodos.id === id) {
                return { ...prevtodos, isdone: !prevtodos.isdone,
                };
            }
            return prevtodos;
        }));
    }

    let doneall = () => {
        setTodos((prevtodos) => prevtodos.map(todo => {
            return { ...todo, isdone: true };
        }));
    }

    return (
        <div>
            <h1>Todo List</h1>
            <br />
            <input placeholder="add a task" value={newTodo} onChange={handleInputChange} />
            <button onClick={addTask}>Add Task</button>
            <h2>Task to do:</h2>
            <ul>
                { // map through the todos and display them as list items
                    todos.map((todo, id) => (
                        <li key={id}>
                            <span style={todo.isdone ? {textDecorationLine : "line-through"} : {}}>{todo.task}</span>
                            &nbsp;
                            <button onClick={() => deletetodo(todo.id)}>Delete</button>  &nbsp;
                            <button onClick={() => markasdone(todo.id)}>Done</button>
                        </li>
                    )) // agar hum delete mai arrow function nahi banate toh without clicking voh execut ho jaata hai aur saare todos delete ho jaate hain, isliye hum arrow function ka use karte hain taki delete tabhi execute ho jab user button pe click kare (Array function is used to create a new array by filtering out the todo item with the specified id)
                } 
            </ul>
            <br />
            <button onClick={doneall}>All Tasks Completed</button>
        </div>
    )
}
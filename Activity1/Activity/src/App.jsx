import './App.css'
import Product from './product'
import Button from './button'
import Form from './Form'
import Counter from './Counter'
import Likebtn from './Likebtn'
import Ludo from './Ludo'
import Todolist from './Todolist'
import Lottery from './Lottery'
import Lottery2 from './Lottery2'
import { sum } from './Lotteryfunc'
import CommentForm from './CommentForm'
import Joke from './Joke'


let winCondition = (ticket) => sum(ticket) === 15;

function App() {
  let styles = {backgroundColor: 'lightblue', padding: '10px', borderRadius: '5px', height: '100px'}
  return (
    <div >
      <Product style={styles}  name="Laptop" />
      <Product style={styles} name="Smartphone" />
      <Product style={styles} name="Headphones" /> 
      <Button />
       <Counter />
       <Likebtn style={styles} text="Like" />
       <Ludo />
       <Todolist />

        <Lottery />
        <Lottery2 n={3} winCondition={winCondition} /> 
        <Form />
        <CommentForm/>
        <Joke /> 
    </div>
  )
}

export default App
// passing winCondition as a prop to Lottery2 allows us to define the winning condition outside of the component, making it more flexible and reusable. The Lottery2 component can now use this function to determine if the generated ticket is a winning ticket based on the provided condition.
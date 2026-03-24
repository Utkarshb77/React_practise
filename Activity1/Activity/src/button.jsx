function printHello(){
    console.log("Hello, world!");
}

function print(){
    console.log("Hello jii");
}
export default function Button(props) {
    return (
        <div>
        <button onClick={printHello}>Click me!</button>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe, magnam?</p>
        <button onMouseOver={print}>Click me!</button>
        </div>
    )
}
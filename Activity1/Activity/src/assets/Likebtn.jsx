import { useState } from 'react'

export default function Likebtn(props) {
    const [isLiked, setIsLiked] = useState(false);
    const [clicks , setClicks] = useState(0);
    function handleClick() {
        setIsLiked(!isLiked);
        setClicks(clicks + 1);
    } 
    return (
        <p style={props.style} onClick={handleClick}>
            <i className={`fa-regular fa-heart ${isLiked ? 'fa-solid' : ''}`}></i>
            <span className="counter">{clicks}</span>
        </p>
    )
}
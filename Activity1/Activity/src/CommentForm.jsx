import { useState } from 'react'

export default function CommentForm() {
    let [formData, setFormData] = useState({
        username: '',
        Remarks: '',
        rating: ''
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value }; // here we're using the name attribute of the input field to dynamically update the corresponding property in the formData state.  This allows us to handle multiple input fields with a single change handler, making our code more efficient and easier to maintain. 
            // we have to give the   same name attribute to the input field as the property name in the formData state for this to work correctly.
        });
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            username: '',
            Remarks: '',
            rating: ''
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input type="text" 
            name="username" 
            placeholder='Enter your name'
            id='username' 
            value={formData.username} 
            onChange={handleInputChange} />

<br /><br />
            <label htmlFor="Remarks">Remarks:</label>
            <textarea
            name="Remarks"
            placeholder='Enter your remarks'
            id='Remarks' value={formData.Remarks}
            onChange={handleInputChange} />
<br /><br />
            <label htmlFor="rating">Rating:</label>
            <input type="number"
            name="rating"
            placeholder='Enter your rating'
            id='rating' value={formData.rating}
            onChange={handleInputChange} />
<br /><br />
            <button>Submit</button>

        </form>
    )
}
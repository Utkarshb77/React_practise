import {useState} from 'react'

export default function Form() {
    let [formData , setFormData] = useState({
        fullname: '',
        email: '',
        password: ''
    });

    let handleInputChange = (event) => {
        setFormData((currData) => { 
            return  {...currData, [event.target.name]: event.target.value}; // here we're using the name attribute of the input field to dynamically update the corresponding property in the formData state.  This allows us to handle multiple input fields with a single change handler, making our code more efficient and easier to maintain. 
            // we have to give the   same name attribute to the input field as the property name in the formData state for this to work correctly.
        });
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullname: '',
            email: '',
            password: ''
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Username:</label>
            <input type="text" name="fullname"
            placeholder='Enter your name' 
            id='fullname' 
            value={formData.fullname} 
            onChange={handleInputChange} />

            <br /><br />

            <label htmlFor="email">Email:</label>
            <input type="email" 
            name="email" 
            placeholder='Enter your email' 
            id='email' 
            value={formData.email}
            onChange={handleInputChange} />

            <br /><br />

            <label htmlFor="password">Password:</label>
            <input type="password" 
            name="password" 
            placeholder='Enter your password' 
            id='password' 
            value={formData.password} 
            onChange={handleInputChange} />
            
            <br /><br />
            
            <button>Submit</button>

        </form>
    )
}
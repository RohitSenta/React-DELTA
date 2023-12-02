import { useState } from "react";

export default function Form() {
    // let[fullName, setFullName] = useState("");
    // let[username, setUsername] = useState("");
    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: "",
    });

    // let handleNameChange = (event) => {
    //     setFullName(event.target.value);
    // }
   
    // let handleUsername = (event) => {
    //     setUsername(event.target.value);
    // }

    let handleInputChange = (event) => {
        // let fieldName = event.target.name;
        // let newValue = event.target.value;
        // console.log(newValue);  // fullName

        setFormData( (currData) => {
            return{
                ...currData, [event.target.name] : event.target.value
            };
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            username: "",
            password: "",
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Forms In React</h1>
            <div>
                <label htmlFor="fullName">Full Name</label>
                <input placeholder="Enter your full name" type="text" value={formData.fullName} onChange={handleInputChange} id="fullName" name="fullName" />
                <br /><br />
                
                <label htmlFor="username">Username</label>
                <input placeholder="Enter username" type="text" value={formData.username} onChange={handleInputChange} id="username" name="username" />
                <br /><br />
                
                <label htmlFor="passworld">Password</label>
                <input placeholder="Enter password" type="password" value={formData.password} onChange={handleInputChange} id="password" name="password" />
                <br /><br />
            </div>
            <button>Submit</button>
            <br /><br />
            <hr /><hr />
        </form>
    )
}
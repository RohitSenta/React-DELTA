import { useState } from "react"

export default function CommentsForm() {
    let [formData, setFormData] = useState({
        username: "",
        remarks: "",
        rating: 3,
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return{ ...currData, [event.target.name] : event.target.value };
        });
    };

    let handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
        setFormData({
            username: "",
            remarks: "",
            rating: 3,
        })
    }

    return (
        <div>
            <h3>Give a comment!</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username2">Username</label>
                <input type="text" placeholder="username" id="username2" value={formData.username} onChange={handleInputChange} name="username"/> 
                <br /><br />
                
                <label htmlFor="remarks">Comment</label>
                <textarea placeholder="add few remarks" id="remarks" value={formData.remarks} onChange={handleInputChange} name="remarks"></textarea>
                <br /><br />
                
                <label htmlFor="rating">Rating</label> &nbsp;&nbsp;&nbsp;&nbsp;
                <input type="number" min={1} max={5} placeholder="rating" id="rating" value={formData.rating} onChange={handleInputChange} name="rating"/>
                <br /><br />
                
                <button>Add Comment</button>
            </form>
            <br />
            <hr /><hr />
        </div>
    )
}
function handleFromSubmit(event) {
    event.preventDefault();
    console.log("form was submitted");
}

export default function Form() {
    return (
        <form onSubmit={handleFromSubmit}>
            <input placeholder="Write something" /> &nbsp;&nbsp;
            <button>Submit</button>
        </form>
    )
}
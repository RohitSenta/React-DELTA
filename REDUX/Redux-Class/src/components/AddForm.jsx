import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
// import EditForm from "../components/EditForm";

export default function AddFrom() {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const submitHandler = (evt) => {
        evt.preventDefault();
        console.log(task);
        dispatch(addTodo(task));
        setTask("");
    }

    return(
        <>
            <form onSubmit={submitHandler}>
                <input type="text" value={task} onChange={(e) => setTask(e.target.value)}/>
                <br /><br />
                <button>Add Task</button>
                <br /><br /><hr />
            </form>
        </>
    )
}
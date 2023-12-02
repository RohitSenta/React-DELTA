import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([ {task: "sample-task", id: uuidv4(), isDone: false} ]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        if(newTodo !== ""){
            setTodos((prevTodos) => {
                return [...prevTodos, {task: newTodo, id: uuidv4(), isDone: false}]
            });
        }
        setNewTodo("");
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    }

    let inputStyles = { 
        height: "30px",
        borderRadius: "10px"
    }

    let upperCaseAll = () => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase()
                };
            })
        ));
        // console.log(newArr);
    }

    let upperCaseOne = (id) => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                if(todo.id == id) {
                    return {
                        ...todo,
                        task: todo.task.toUpperCase()
                    };
                } else {
                    return todo;
                }
            })
        ));
    }

    let markAsDone = (id) => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                if(todo.id == id) {
                    return {
                        ...todo,
                        isDone: true,
                    };
                } else {
                    return todo;
                }
            })
        ));
    }

    let allTaskDone = () => {
        setTodos((prevTodos) => (
            prevTodos.map((todo) => {
                return {
                    ...todo,
                    isDone: true,
                };
            })
        ));
    }

    return (
        <div>
            <input style={inputStyles} placeholder="Add a task" value={newTodo} onChange={updateTodoValue}></input>
            <br /><br />
            <button onClick={addNewTask}>Add Task</button>
            <br /><br />
            <hr />
            <h4>Tasks Todo</h4>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={ todo.id }>
                            <span style={todo.isDone == true ? {textDecoration: "line-through"} : {}}>{ todo.task }</span> 
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            &nbsp;&nbsp;
                            <button onClick={() => upperCaseOne(todo.id)}>UpperCase One</button>
                            &nbsp;&nbsp;
                            <button onClick={() => markAsDone(todo.id)}>Task Done</button>
                        </li>
                    ))
                }
            </ul>
            <br />
            <button onClick={upperCaseAll}>UpperCase All</button>
            &nbsp;&nbsp;
            <button onClick={allTaskDone}>All Task Done</button>
            <br /><br /><hr /><hr />
        </div>
    )
}
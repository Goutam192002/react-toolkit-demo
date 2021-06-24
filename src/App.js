import './App.css';
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, markComplete, markIncomplete, removeTodo} from "./todo/todoSlice";

function App() {
    const [inputValue, setInputValue] = useState('');
    const todos = useSelector((state) =>  state.todos);

    const dispatch = useDispatch();

    const onChange = e => {
        setInputValue(e.target.value);
    }

    const add = () => {
        dispatch(addTodo(inputValue));
        setInputValue('');
    }

    const remove = (index) => () => {
        dispatch(removeTodo(index));
    }

    const complete = (index) => () => {
        dispatch(markComplete(index));
    }

    const incomplete = (index) => () => {
        dispatch(markIncomplete(index));
    }

    return (
        <div className="container">
            <div>
                <input type="text" onChange={onChange} value={inputValue} />
                <button onClick={add} disabled={!inputValue}>Add Todo</button>
            </div>
            {
                todos.length === 0 ? <p>You haven't created any todos yet</p> : (
                    <ul>
                        {
                            todos.map(
                                (todo, index) => (
                                    <li>
                                        {todo.title}
                                        {
                                            todo.completed ?
                                            <button onClick={incomplete(index)}>Mark Incomplete</button>
                                            :
                                            <button onClick={complete(index)}>Mark Complete</button>
                                        }
                                        <button onClick={remove(index)}>Delete Todo</button>
                                    </li>
                                )
                            )
                        }
                    </ul>
                )
            }
        </div>
    );
}

export default App;

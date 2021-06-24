import {configureStore} from "@reduxjs/toolkit";
import { TodoReducer } from "./todo/todoSlice";

export default configureStore({
    reducer: {
        todos: TodoReducer
    }
});

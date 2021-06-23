import {configureStore} from "@reduxjs/toolkit";
import FriendsReducer from "./friends/friendsSlice";

export default configureStore({
    reducer: {
        friends: FriendsReducer
    }
});

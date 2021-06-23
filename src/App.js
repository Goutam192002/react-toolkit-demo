import './App.css';
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllUsers} from "./friends/friendsSlice";

function App() {
    const status = useSelector((state) =>  state.friends.status);
    const friends = useSelector((state) => state.friends.list);

    const dispatch = useDispatch();

    useEffect(() => {
        console.log(status, friends);
    }, [status, friends]);

    const onGetFriends = () => {
        dispatch(fetchAllUsers());
    }

    return (
        <div>
            <button onClick={onGetFriends}>Get My Friends</button>
            {
                status === 'loading' ? (
                    <h1>Hang On</h1>
                ) : (
                    <ul>
                        {
                            friends.map( (friend, index) =>
                                <li key={index}>{`${friend.name.title} ${friend.name.first} ${friend.name.last}`}</li>
                            )
                        }
                    </ul>
                )
            }
        </div>
    );
}

export default App;

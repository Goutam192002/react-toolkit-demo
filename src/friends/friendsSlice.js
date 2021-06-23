import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchAllUsers = createAsyncThunk(
    'friends/fetchAll',
    async () => {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const json = await response.json();
        return json.results;
    }
)

export const friendsSlice = createSlice({
    name: 'friends',
    initialState: {
        status: 'idle',
        list: []
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchAllUsers.pending, (state, action) => {
            state.status = 'loading';
        });
        builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
            state.status = 'finished';
            state.list = action.payload;
        });
        builder.addCase(fetchAllUsers.rejected, (state, action) => {
            state.status = 'failed';
            state.list = action.payload;
        });
    }
});

export default friendsSlice.reducer;

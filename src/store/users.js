import { createSlice, createStore } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        addUser: (users, action) => {
            users.push({
                id: ++lastId,
                name: action.payload.name,
                bugs: []
            })
        },

        assignBug: (users, action) => {
            users.map(user => {
                if (user.name === action.payload.name) {
                    user.bugs.push(action.payload.bugId)
                }
                return user
            })
        }
    }
})

export const { addUser, assignBug } = slice.actions

export default slice.reducer
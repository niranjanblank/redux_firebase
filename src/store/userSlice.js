import { createSlice, current } from "@reduxjs/toolkit"
import { collection } from "firebase/firestore"


const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: []
    },
    reducers: {
        getData: (state,action) => {
            console.log('prev',action.payload)
            // const data = {...action.payload}
            state.data = action.payload
            // state.data.push(action.payload)
            console.log(current(state))
        }
    }
})

export const userActions = userSlice.actions;

export default userSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const TodoSlice=createSlice({
    name:"Todo",
    initialState:{
        task:[]
    },
    reducers:{
        addTask:(state) =>{
            console.log(action.payload)
            state.task.push(actions.payload)
        }
    }
})

export const {addTask} = TodoSlice.actions;
export default TodosliceSlice.reducer

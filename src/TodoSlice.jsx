import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "Todo",

  initialState: {
    task: []
  },

  reducers: {

    addTask: (state, action) => {
      state.task.push({
        work: action.payload.work,
        status: false
      })
    },

    deleteTask: (state, action) => {
      state.task.splice(action.payload, 1)
    },

    completeTask: (state, action) => {
      state.task[action.payload].status = true
    },

    incompleteTask: (state, action) => {
      state.task[action.payload].status = false
    }

  }

})

export const { addTask, deleteTask, completeTask, incompleteTask } = TodoSlice.actions;

export default TodoSlice.reducer;
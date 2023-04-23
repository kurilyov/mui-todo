import { createSlice } from '@reduxjs/toolkit'

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
    },
    reducers: {
        getTasks(state, { payload }) {
            state.tasks = payload.tasks
        },
        createTask(state, { payload }) {
            state.tasks.push(payload.task)
        },
        updateTask(state, { payload }) {
            state.tasks = state.tasks.map(task =>
                task.id === payload.task.id ? payload.task : task,
            )
        },
        removeTask(state, { payload }) {
            state.tasks = state.tasks.filter(task => task.id !== payload.id)
        },
    },
})

export const { getTasks, createTask, updateTask, removeTask } =
    tasksSlice.actions
export default tasksSlice.reducer

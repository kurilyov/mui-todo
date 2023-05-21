import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { API_URL } from '../config'

export const getAllTasks = createAsyncThunk(
    'tasks/getAll',
    async (_, { rejectWithValue, getState }) => {
        try {
            const { user } = getState()

            const tasks = await axios.get(`${API_URL}/tasks/`, {
                headers: {
                    Authorization: 'Bearer ' + user.user.token,
                },
                data: {
                    user: { _id: user.user._id },
                },
            })
            return tasks.data
        } catch (error) {
            return rejectWithValue(error)
        }
    },
)

export const createTask = createAsyncThunk(
    'tasks/updateTask',
    async (task, { rejectWithValue, getState }) => {
        try {
            const { user } = getState()
            const newTask = await axios.post(`${API_URL}/tasks/`, {
                headers: {
                    Authorization: 'Bearer ' + user.user.token,
                },
                data: {
                    user: { _id: user.user._id },
                    task,
                },
            })
            return newTask.data
        } catch (error) {
            return rejectWithValue(error)
        }
    },
)

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        status: null,
        error: null,
    },
    reducers: {
        // getTasks(state, { payload }) {
        //     state.tasks = payload.tasks
        // },
        // createTask(state, { payload }) {
        //     state.tasks.push(payload.task)
        // },
        // updateTask(state, { payload }) {
        //     state.tasks = state.tasks.map(task =>
        //         task.id === payload.task.id ? payload.task : task,
        //     )
        // },
        // removeTask(state, { payload }) {
        //     state.tasks = state.tasks.filter(task => task.id !== payload.id)
        // },
    },
    extraReducers: {
        [getAllTasks.pending]: state => {
            state.status = 'loading'
            state.error = null
        },
        [getAllTasks.fulfilled]: (state, { payload }) => {
            state.status = 'resolved'
            state.tasks = payload
        },
        [getAllTasks.rejected]: (state, { payload }) => {
            state.status = 'error'
            state.error = payload.error
        },
    },
})

// export const { getTasks, createTask, updateTask, removeTask } = tasksSlice.actions
export const { getTasks, updateTask, removeTask } = tasksSlice.actions
export default tasksSlice.reducer

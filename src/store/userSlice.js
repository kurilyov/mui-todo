import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { API_URL } from '../config'

export const registerUser = createAsyncThunk(
    'user/register',
    async (userData, { rejectWithValue }) => {
        try {
            await axios.post(`${API_URL}/user/register`, userData)
            return
        } catch (error) {
            return rejectWithValue(error.message)
        }
    },
)

export const loginUser = createAsyncThunk(
    'user/login',
    async (userData, { rejectWithValue }) => {
        try {
            const user = await axios.post(`${API_URL}/user/login`, userData)
            return user.data
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    },
)

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        loading: false,
        error: null,
    },
    extraReducers: {
        [registerUser.pending]: state => {
            state.status = 'loading'
            state.error = null
        },
        [registerUser.fulfilled]: state => {
            state.status = 'resolved'
        },
        [registerUser.rejected]: (state, { payload }) => {
            state.status = 'error'
            state.error = payload
        },
        [loginUser.pending]: state => {
            state.status = 'loading'
            state.error = null
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            state.status = 'resolved'
            state.user = payload
        },
        [loginUser.rejected]: (state, { payload }) => {
            state.status = 'error'
            state.error = payload.error
        },
    },
})

export default userSlice.reducer

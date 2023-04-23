import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'

import { createTask } from '../store/tasksSlice'

import { TextField, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

function TaskForm({ onSubmit }) {
    const [title, setTitle] = useState('')
    const [isError, setIsError] = useState(false)

    const handleTitleChange = event => {
        const text = event.target.value
        if (text.trim().length && isError) {
            setIsError(false)
        }
        setTitle(text.trimStart())
    }

    const handleSubmit = event => {
        event.preventDefault()
        if (!title) {
            setIsError(true)
            return
        }
        onSubmit({ id: uuidv4(), title, isCompleted: false })
        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label='Title'
                error={isError}
                helperText={isError && 'This field cannot be empty'}
                sx={{ width: '100%', mb: 1 }}
                value={title}
                onChange={handleTitleChange}
            />
            <Button
                variant='contained'
                startIcon={<AddIcon />}
                sx={{ float: 'right' }}
                type='submit'
            >
                Add
            </Button>
        </form>
    )
}

function AddTask() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleAddTask = task => {
        dispatch(createTask({ task }))
        navigate('/')
    }

    return <TaskForm onSubmit={handleAddTask} />
}

export default AddTask

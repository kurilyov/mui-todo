import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { TextField, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

export function Form({ onSubmit }) {
    const [isError, setIsError] = useState(false)
    const [title, setTitle] = useState('')

    const handleTitleChange = event => {
        const text = event.target.value.trimStart()
        const isTextValid = text.length > 0

        setTitle(text)
        if (isTextValid && isError) {
            setIsError(false)
        }
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

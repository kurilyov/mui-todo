import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateTask, removeTask } from '../store/tasksSlice'
import {
    IconButton,
    ListItem,
    ListItemText,
    Paper,
    Checkbox,
    TextField,
    Typography,
} from '@mui/material'
import ClickAwayListener from '@mui/base/ClickAwayListener'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'

function TaskItem({ task }) {
    const { id } = task
    const dispatch = useDispatch()

    const [isEditing, setIsEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(task.title)
    const [isCompleted, setIsCompleted] = useState(task.isCompleted)

    const startEditing = () => setIsEditing(true)
    const endEditing = () => {
        setNewTitle(task.title)
        setIsEditing(false)
    }

    const toggleCompletion = () => {
        // setIsCompleted(prev => !prev)
        // Прочитал в доках, что надо так.
        // Chatgpt сказал сделать так:
        setIsCompleted(!isCompleted)
        handleSave()
    }

    const updateTitle = event => setNewTitle(event.target.value)

    const handleSave = () => {
        const task = { id, title: newTitle, isCompleted }
        dispatch(updateTask({ task }))

        setIsEditing(false)
    }

    const handleDelete = () => dispatch(removeTask({ id }))

    const textStyle = {
        textDecoration: isCompleted ? 'line-through' : 'none',
    }

    return (
        <ClickAwayListener onClickAway={endEditing}>
            <ListItem component={Paper} square sx={{ width: '100%', mb: 1.5 }}>
                <Checkbox
                    checked={isCompleted}
                    onChange={toggleCompletion}
                    sx={{ mr: 1 }}
                />
                {isEditing ? (
                    <>
                        <TextField
                            variant='standard'
                            sx={{ width: '100%' }}
                            autoFocus
                            value={newTitle}
                            onChange={updateTitle}
                        />
                        <IconButton onClick={handleSave}>
                            <CheckIcon />
                        </IconButton>
                        <IconButton onClick={endEditing}>
                            <CloseIcon />
                        </IconButton>
                    </>
                ) : (
                    <>
                        <ListItemText
                            primary={
                                <Typography sx={textStyle}>
                                    {task.title}
                                </Typography>
                            }
                        />
                        <IconButton onClick={startEditing}>
                            <EditIcon />
                        </IconButton>
                        <IconButton onClick={handleDelete}>
                            <DeleteIcon />
                        </IconButton>
                    </>
                )}
            </ListItem>
        </ClickAwayListener>
    )
}

export default TaskItem

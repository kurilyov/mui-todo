import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { updateTask, removeTask } from '../../store/tasksSlice'

export function useTask(task) {
    const { id } = task
    const dispatch = useDispatch()

    const [isEditing, setIsEditing] = useState(false)
    const [title, setTitle] = useState(task.title)
    const [isCompleted, setIsCompleted] = useState(task.isCompleted)

    const startEditing = useCallback(() => {
        setIsEditing(true)
    }, [])
    const endEditing = useCallback(() => {
        setTitle(task.title)
        setIsEditing(false)
    }, [task.title])

    const handleSave = useCallback(() => {
        const task = { id, title: title, isCompleted }
        dispatch(updateTask({ task }))

        setIsEditing(false)
    }, [dispatch, id, title, isCompleted])

    const handleDelete = useCallback(() => {
        dispatch(removeTask({ id }))
    }, [dispatch, id])

    const updateTitle = useCallback(event => setTitle(event.target.value), [])

    const toggleCompletion = useCallback(() => {
        setIsCompleted(prev => !prev)
        handleSave()
    }, [handleSave])

    return {
        isEditing,
        title,
        isCompleted,
        startEditing,
        endEditing,
        toggleCompletion,
        updateTitle,
        handleSave,
        handleDelete,
    }
}

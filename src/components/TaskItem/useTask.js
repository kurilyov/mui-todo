import { useState, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateTask, deleteTask } from '../../store/tasksSlice'

export function useTask(task) {
    const { _id, description, by } = task
    const dispatch = useDispatch()

    const [isEditing, setIsEditing] = useState(false)
    const [title, setTitle] = useState(task.title)
    const [isCompleted, setIsCompleted] = useState(task.isCompleted)

    // Добавил потому, что при использовании isCompleted в useEffect
    // сохранение в стор триггерилось при рендере.
    // А если вызывать handleSave в toggleCompletion после setIsCompleted,
    // то в стор летело прошлое значение.
    const [isModified, setIsModified] = useState(false)

    const startEditing = useCallback(() => {
        setIsEditing(true)
    }, [])
    const endEditing = useCallback(() => {
        setTitle(task.title)
        setIsEditing(false)
    }, [task.title])

    const handleSave = useCallback(() => {
        const task = { _id, title, description, isCompleted, by }
        dispatch(updateTask({ task }))
        setIsEditing(false)
        setIsModified(false)
    }, [dispatch, _id, title, isCompleted, description, by])

    const handleDelete = useCallback(() => {
        dispatch(deleteTask({ _id }))
    }, [dispatch, _id])

    const updateTitle = useCallback(event => setTitle(event.target.value), [])

    const toggleCompletion = useCallback(() => {
        setIsCompleted(prev => !prev)
        setIsModified(true)
    }, [])

    useEffect(() => {
        if (isModified) handleSave()
    }, [isModified, handleSave])

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

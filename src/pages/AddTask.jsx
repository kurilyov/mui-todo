import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'

import { createTask } from '../store/tasksSlice'

import { Form } from '../components/Form'

function AddTask() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleAddTask = task => {
        dispatch(createTask({ task })).then(() => navigate('/'))
    }

    return <Form onSubmit={handleAddTask} />
}

export default AddTask

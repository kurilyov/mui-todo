import { useDispatch, useSelector } from 'react-redux'
import { List, Typography } from '@mui/material'
import TaskItem from '../components/TaskItem'
import { useEffect } from 'react'
import { getAllTasks } from '../store/tasksSlice'

function Home() {
    const dispatch = useDispatch()
    const tasks = useSelector(store => store.tasks.tasks)

    useEffect(() => {
        dispatch(getAllTasks())
    }, [dispatch])

    if (!tasks)
        return (
            <Typography variant='h4' textAlign='center'>
                List is empty
            </Typography>
        )

    return (
        <List>
            {tasks.map(task => (
                <TaskItem key={task._id} task={task} />
            ))}
        </List>
    )
}

export default Home

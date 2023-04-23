import { useSelector } from 'react-redux'
import { List, Typography } from '@mui/material'
import TaskItem from '../components/TaskItem'

function Home() {
    const tasks = useSelector(store => store.tasks.tasks)

    if (!tasks.length)
        return (
            <Typography variant='h4' textAlign='center'>
                List is empty
            </Typography>
        )

    return (
        <List>
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
        </List>
    )
}

export default Home

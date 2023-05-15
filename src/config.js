import AddIcon from '@mui/icons-material/Add'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'

export const paths = {
    '/': {
        title: 'To Do',
        link: {
            path: 'add-task',
            text: 'Add Task',
            icon: <AddIcon />,
        },
    },
    '/add-task': {
        title: 'Add Task',
        link: {
            path: '/',
            text: 'Go back',
            icon: <NavigateBeforeIcon />,
        },
    },
}

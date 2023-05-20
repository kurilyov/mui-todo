import AddIcon from '@mui/icons-material/Add'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import PersonIcon from '@mui/icons-material/Person'

export const PATHS = {
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
    '/login': {
        title: 'Login',
        link: {
            path: 'register',
            text: 'Register',
            icon: <PersonIcon />,
        },
    },
    '/register': {
        title: 'Register',
        link: {
            path: 'login',
            text: 'Login',
            icon: <PersonIcon />,
        },
    },
}

export const API_URL = 'http://localhost:3001/api'

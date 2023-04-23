import { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'

import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'

function Navbar() {
    const { pathname } = useLocation()

    // Сhatgpt сказал лучше задать начальное состояние.
    // До этого стейты создавались пустыми.
    // Как правильно? Мне кажется, что хранить одно и то же
    // в разных местах усложнит будущее редактирование.
    const [title, setTitle] = useState('To Do')
    const [link, setLink] = useState({
        path: 'add-task',
        text: 'Add Task',
        icon: <AddIcon />,
    })

    useEffect(() => {
        switch (pathname) {
            case '/add-task':
                setTitle('Add Task')
                setLink({
                    path: '/',
                    text: 'Go back',
                    icon: <NavigateBeforeIcon />,
                })
                break
            default:
                setTitle('To Do')
                setLink({
                    path: 'add-task',
                    text: 'Add Task',
                    icon: <AddIcon />,
                })
                break
        }
    }, [pathname])

    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h6' component='div'>
                    {title}
                </Typography>
                <Button
                    component={Link}
                    to={link.path}
                    color='inherit'
                    startIcon={link.icon}
                    sx={{ ml: 'auto' }}
                >
                    {link.text}
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar

import { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { PATHS } from '../config'

import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import { clearUser } from '../store/userSlice'

function Navbar() {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.user)
    const { pathname } = useLocation()
    const [title, setTitle] = useState(PATHS['/'].title)
    const [link, setLink] = useState(PATHS['/'].link)

    useEffect(() => {
        setTitle(PATHS[pathname].title)
        setLink(PATHS[pathname].link)
    }, [pathname])

    function logout() {
        dispatch(clearUser())
    }

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
                {user && (
                    <IconButton onClick={logout}>
                        <LogoutIcon sx={{ color: 'white' }} />
                    </IconButton>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar

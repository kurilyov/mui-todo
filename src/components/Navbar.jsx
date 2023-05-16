import { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'

import { PATHS } from '../config'

import { AppBar, Button, Toolbar, Typography } from '@mui/material'

function Navbar() {
    const { pathname } = useLocation()
    const [title, setTitle] = useState(PATHS['/'].title)
    const [link, setLink] = useState(PATHS['/'].link)

    useEffect(() => {
        setTitle(PATHS[pathname].title)
        setLink(PATHS[pathname].link)
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

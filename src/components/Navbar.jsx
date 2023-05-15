import { useEffect, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'

import { AppBar, Button, Toolbar, Typography } from '@mui/material'

import { paths } from '../config'

function Navbar() {
    const { pathname } = useLocation()
    const [title, setTitle] = useState(paths['/'].title)
    const [link, setLink] = useState(paths['/'].link)

    useEffect(() => {
        setTitle(paths[pathname].title)
        setLink(paths[pathname].link)
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

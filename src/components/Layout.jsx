import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Container from '@mui/material/Container'

function Layout() {
    return (
        <div>
            <Navbar />
            <Container maxWidth='sm' sx={{ mt: 3 }}>
                <Outlet />
            </Container>
        </div>
    )
}

export default Layout

import { Navigate, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import AddTask from './pages/AddTask'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { AuthRequired } from './hoc/AuthRequired'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: (
                    <AuthRequired>
                        <Home />
                    </AuthRequired>
                ),
            },
            {
                path: 'add-task',
                element: (
                    <AuthRequired>
                        <AddTask />
                    </AuthRequired>
                ),
            },
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'register',
                element: <Register />,
            },
        ],
    },
    {
        path: '*',
        element: <Navigate to='/' />,
    },
])

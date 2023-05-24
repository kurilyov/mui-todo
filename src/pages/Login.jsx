import { useDispatch, useSelector } from 'react-redux'
import { UserForm } from '../components/UserForm'
import { loginUser } from '../store/userSlice'
import { useNavigate } from 'react-router-dom'
import { Alert, Backdrop, CircularProgress, Snackbar } from '@mui/material'

export function Login() {
    const navigate = useNavigate()
    const { user, status, error } = useSelector(store => store.user)
    const dispatch = useDispatch()
    const login = async data => dispatch(loginUser(data))
    if (user) navigate('/')
    return (
        <>
            <Backdrop open={status === 'loading'} sx={{ zIndex: 5 }}>
                <CircularProgress />
            </Backdrop>

            <Snackbar open={status === 'error'}>
                <Alert severity='error'>{error}</Alert>
            </Snackbar>
            <UserForm onSubmit={login} buttonText='Login' />
        </>
    )
}

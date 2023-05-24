import { registerUser } from '../store/userSlice'
import { UserForm } from '../components/UserForm'
import { useDispatch, useSelector } from 'react-redux'
import { Backdrop, CircularProgress, Snackbar, Alert } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export function Register() {
    const { status, error } = useSelector(store => store.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const register = data => {
        dispatch(registerUser(data))
        // console.log(status)
        // if (status === 'resolved') navigate('/login')
    }

    return (
        <>
            <Backdrop open={status === 'loading'} sx={{ zIndex: 5 }}>
                <CircularProgress />
            </Backdrop>

            <Snackbar open={status === 'error'}>
                <Alert severity='error'>{error}</Alert>
            </Snackbar>
            <UserForm onSubmit={register} buttonText='Register' />
        </>
    )
}

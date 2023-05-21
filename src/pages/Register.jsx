import { registerUser } from '../store/userSlice'
import { UserForm } from '../components/UserForm'
import { useDispatch, useSelector } from 'react-redux'

export function Register() {
    const error = useSelector(store => store.user.error)
    const dispatch = useDispatch()
    const register = data => dispatch(registerUser(data))
    // const register = data => console.log(data)

    return (
        <>
            {/* <Backdrop open={isLoading} sx={{ zIndex: 5 }}>
                <CircularProgress />
            </Backdrop>
            <Snackbar open={message.show}>
                <Alert severity={message.severity}>{message.text}</Alert>
            </Snackbar> */}
            {error}
            <UserForm onSubmit={register} buttonText='Register' />
        </>
    )
}

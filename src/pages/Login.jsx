import { useDispatch, useSelector } from 'react-redux'
import { UserForm } from '../components/UserForm'
import { loginUser } from '../store/userSlice'
import { useNavigate } from 'react-router-dom'

export function Login() {
    const navigate = useNavigate()
    const { user, error } = useSelector(store => store.user)
    const dispatch = useDispatch()
    const login = async data => dispatch(loginUser(data))
    if (user) navigate('/')
    return (
        <>
            {error}
            {user && user._id}
            <UserForm onSubmit={login} buttonText='Login' />
        </>
    )
}

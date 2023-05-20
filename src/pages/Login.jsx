import { UserForm } from '../components/UserForm'

export function Login() {
    const onSubmit = data => {
        console.log(data)
    }
    return <UserForm onSubmit={onSubmit} buttonText='Login' />
}

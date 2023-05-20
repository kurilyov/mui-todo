import axios from 'axios'
import { UserForm } from '../components/UserForm'

import { API_URL } from '../config'

export function Register() {
    const register = async ({ username, password }) => {
        await axios
            .post(`${API_URL}/user/register`, {
                username,
                password,
            })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
    }
    return <UserForm onSubmit={register} buttonText='Register' />
}

import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export function AuthRequired({ children }) {
    const { user } = useSelector(store => store.user)

    if (!user) return <Navigate to='/login' />

    return children
}

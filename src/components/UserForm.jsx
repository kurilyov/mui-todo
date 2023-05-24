import { useForm } from 'react-hook-form'
import { TextField, Button } from '@mui/material'

export function UserForm({ onSubmit, buttonText }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const passwordErrors = {
        minLength: 'Password must be at least 8 characters long',
        required: 'This field cannot be empty',
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                label='Username'
                error={Boolean(errors.username)}
                helperText={errors.username && 'This field cannot be empty'}
                sx={{ width: '100%', mb: 1 }}
                {...register('username', { required: true })}
            />
            <TextField
                label='Password'
                type='password'
                error={Boolean(errors.password)}
                helperText={
                    errors.password && passwordErrors[errors.password.type]
                }
                sx={{ width: '100%', mb: 1 }}
                {...register('password', { required: true, minLength: 8 })}
            />
            <Button variant='contained' sx={{ float: 'right' }} type='submit'>
                {buttonText}
            </Button>
        </form>
    )
}

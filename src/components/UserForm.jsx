import { useForm } from 'react-hook-form'
import { TextField, Button } from '@mui/material'

export function UserForm({ onSubmit, buttonText }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

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
                helperText={errors.password && 'This field cannot be empty'}
                sx={{ width: '100%', mb: 1 }}
                {...register('password', { required: true })}
            />
            <Button variant='contained' sx={{ float: 'right' }} type='submit'>
                {buttonText}
            </Button>
        </form>
    )
}

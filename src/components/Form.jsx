import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import { TextField, Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

export function Form({ onSubmit }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    function createTask(data) {
        onSubmit({ ...data, id: uuidv4(), isCompleted: false })
    }

    return (
        <form onSubmit={handleSubmit(createTask)}>
            <TextField
                label='Title'
                error={errors.title}
                helperText={errors.title && 'This field cannot be empty'}
                sx={{ width: '100%', mb: 1 }}
                {...register('title', { required: true })}
            />
            <TextField
                label='Description'
                error={errors.description}
                helperText={errors.description && 'This field cannot be empty'}
                sx={{ width: '100%', mb: 1 }}
                {...register('description', { required: true })}
            />
            <Button
                variant='contained'
                startIcon={<AddIcon />}
                sx={{ float: 'right' }}
                type='submit'
            >
                Add
            </Button>
        </form>
    )
}

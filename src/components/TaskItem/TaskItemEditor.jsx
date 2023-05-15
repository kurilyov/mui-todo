import { IconButton, TextField } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'

export function TaskItemEditor({ value, onChange, onSave, onAbort }) {
    return (
        <>
            <TextField
                variant='standard'
                sx={{ width: '100%' }}
                autoFocus
                value={value}
                onChange={onChange}
            />
            <IconButton onClick={onSave}>
                <CheckIcon />
            </IconButton>
            <IconButton onClick={onAbort}>
                <CloseIcon />
            </IconButton>
        </>
    )
}

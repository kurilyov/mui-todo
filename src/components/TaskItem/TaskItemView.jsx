import { IconButton, ListItemText, Tooltip, Typography } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

export function TaskItemView({ title, isCompleted, onEdit, onDelete }) {
    const textStyle = {
        textDecoration: isCompleted ? 'line-through' : 'none',
    }

    return (
        <>
            <ListItemText
                primary={<Typography sx={textStyle}>{title}</Typography>}
            />
            <IconButton onClick={onEdit}>
                <EditIcon />
            </IconButton>
            <IconButton onClick={onDelete}>
                <DeleteIcon />
            </IconButton>
        </>
    )
}

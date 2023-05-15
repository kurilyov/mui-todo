import { useTask } from './useTask'
import { ListItem, Paper, Checkbox } from '@mui/material'
import ClickAwayListener from '@mui/base/ClickAwayListener'
import { TaskItemView } from './TaskItemView'
import { TaskItemEditor } from './TaskItemEditor'

function TaskItem({ task }) {
    const {
        isEditing,
        title,
        isCompleted,
        startEditing,
        endEditing,
        toggleCompletion,
        updateTitle,
        handleSave,
        handleDelete,
    } = useTask(task)

    return (
        <ClickAwayListener onClickAway={endEditing}>
            <ListItem component={Paper} square sx={{ width: '100%', mb: 1.5 }}>
                <Checkbox
                    checked={isCompleted}
                    onChange={toggleCompletion}
                    sx={{ mr: 1 }}
                />
                {isEditing ? (
                    <TaskItemEditor
                        value={title}
                        onChange={updateTitle}
                        onSave={handleSave}
                        onAbort={endEditing}
                    />
                ) : (
                    <TaskItemView
                        title={title}
                        isCompleted={isCompleted}
                        onEdit={startEditing}
                        onDelete={handleDelete}
                    />
                )}
            </ListItem>
        </ClickAwayListener>
    )
}

export default TaskItem

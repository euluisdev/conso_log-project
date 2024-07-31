import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import { Paper } from '@mui/material'

const TodoItem = ({ item }) => {

    return (
        <>
            <Paper>
                <ListItem
                    secondaryAction={
                        <IconButton onClick={() => deleteTodo(item.id)} edge="end" aria-label="delete" >
                            <DeleteIcon />
                        </IconButton>
                    }
                    disablePadding
                >
                    <ListItemButton role={undefined} dense>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                tabIndex={-1}
                                disableRipple
                            />
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItemButton>
                </ListItem>
            </Paper>
        </>
    );
};

export default TodoItem; 

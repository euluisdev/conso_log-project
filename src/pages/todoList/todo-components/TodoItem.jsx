import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import { Paper } from '@mui/material'

const TodoItem = () => {

    return (
        <>
            <Paper>
                <ListItem
                    secondaryAction={
                        <IconButton edge="end" aria-label="delete">
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
                        <ListItemText primary={`Line item`} />
                    </ListItemButton>
                </ListItem>
            </Paper>
        </>
    );
};

export default TodoItem; 

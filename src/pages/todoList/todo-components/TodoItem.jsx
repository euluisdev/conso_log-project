import React, { useState, useEffect } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import { Paper } from '@mui/material'
import EditDialog from './EditDialog';

const TodoItem = ({ item, deleteTask, editTask }) => {
    const [openDialog, setOpenDialog] = useState(false);  
    const [isChecked, setIsChecked] = useState(false); 
    
    const dialogHandler = () => { 
        setOpenDialog(!openDialog);
    }; 

    useEffect(() => {
        const storedChecked = JSON.parse(localStorage.getItem(`isChecked-${item.id}`)) || false; 
        setIsChecked(storedChecked);
    }, [item.id]); 

    const handleCheckboxChange = () => {
        const newChecked = !isChecked;
        setIsChecked(newChecked);
        localStorage.setItem(`isChecked-${item.id}`, JSON.stringify(newChecked));
    }; 

    return (
        <>
            <EditDialog editTask={editTask} openDialog={openDialog} dialogHandler={dialogHandler} item={item} />
            <Paper>
                <ListItem
                    secondaryAction={
                        <IconButton onClick={() => deleteTask(item.id)} edge="end" aria-label="delete" >
                            <DeleteIcon />
                        </IconButton>
                    }
                    disablePadding
                >
                    <ListItemButton role={undefined} dense>
                        <ListItemIcon>
                            <Checkbox
                                className='itemBox'
                                edge="start"
                                tabIndex={-1}
                                disableRipple 
                                checked={isChecked} 
                                onChange={handleCheckboxChange} 
                            />
                        </ListItemIcon>
                        <ListItemText 
                            primary={item.text} 
                            className='itemText' 
                            onClick={() => setOpenDialog(true)} 
                            sx={{ 
                                textDecoration: isChecked ? 'line-through' : 'none' 
                            }} 
                        />
                    </ListItemButton>
                </ListItem>
            </Paper>
        </>
    );
};

export default TodoItem; 

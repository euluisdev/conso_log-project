import { useState, forwardRef } from 'react';

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TextField } from '@mui/material';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const EditDialog = ({ editTask, openDialog, dialogHandler, item }) => {
  const [editedText, setEditedText] = useState(item.text); 

  const textHandler = () => {
    editTask(item.id, editedText);

    dialogHandler()
  }

  return (
      <Dialog
        open={openDialog}
        onClose={dialogHandler}
        TransitionComponent={Transition}
        aria-labelledby="dialog-title"   
        aria-describedby="dialog-description" 
        fullWidth 
        disableScrollLock
      >
        <DialogTitle id="dialog-title" className='dialogTxt'>{`Edite sua tarefa:`}</DialogTitle>
        <DialogContent id="dialog-description" className='dialogContainer'>
            <TextField 
              fullWidth 
              value={editedText} 
              onChange={(e) => setEditedText(e.target.value)} 
              InputProps={{ //another way to apply style with material-ui
                style: { fontSize: 17, color: 'blue' } 
              }}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogHandler}>Cancelar</Button>
          <Button onClick={textHandler}>Confirmar</Button>
        </DialogActions>
      </Dialog>
  );
};

export default EditDialog;

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
        keepMounted
        aria-describedby="alert-dialog-slide-description" 
        fullWidth 
      >
        <DialogTitle className='dialogTxt'>{`Edite sua tarefa:`}</DialogTitle>
        <DialogContent className='dialogContainer'>
            <TextField 
              fullWidth 
              defaultValue={editedText} 
              onChange={(e) => setEditedText(e.target.value.trim())}
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

import { useState, forwardRef } from 'react';

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

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
        <DialogTitle>{`Edite sua tarefa:`}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running. Trazer a task para cá
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={textHandler}>Confirmar</Button>
        </DialogActions>
      </Dialog>
  );
};

export default EditDialog;

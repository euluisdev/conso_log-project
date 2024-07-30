import { Button, Paper, TextField } from "@mui/material";
import { useState } from "react";

const TodoForm = () => {
    const [text, setText] = useState('');

    return (
        <Paper className="formContainer">
            <div className="formContete">
                <TextField
                    id="outlined-basic" 
                    label='tarefas' 
                    variant="outlined" 
                    fullWidth  
                />
                <Button variant="text">Add</Button>
            </div>
        </Paper>
    );
};

export default TodoForm; 

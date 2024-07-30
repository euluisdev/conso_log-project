import { Button, Paper, TextField } from "@mui/material";
import { useState } from "react";

const TodoForm = () => {
    const [text, setText] = useState('');

    const TodoCreate = (text) => {
        console.log(text);
    }

    return (
        <Paper className="formContainer">
            <div className="formContete">
                <TextField
                    id="outlined-basic" 
                    label='tarefas' 
                    onChange={(e) => setText(e.target.value)}
                    variant="outlined" 
                    fullWidth  
                />
                <Button variant="text" onClick={() => TodoCreate(text)} >Add</Button>
            </div>
        </Paper>
    );
};

export default TodoForm; 

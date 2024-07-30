import { Button, Paper, TextField } from "@mui/material";
import { useState } from "react";

const TodoForm = () => {
    const [text, setText] = useState('');

    const TodoCreate = (text) => {
        if (!text.trim()) return;

        const TodoObj = { text: 'text', id: 'id' }; 
    };

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

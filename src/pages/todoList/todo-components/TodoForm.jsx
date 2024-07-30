import { Button, Paper, TextField } from "@mui/material";
import { useState } from "react";

const TodoForm = ({ addTask }) => {
    const [text, setText] = useState(''); 
    const [id, setId] = useState(0);

    const TodoCreate = (text) => {
        if (!text.trim()) return;

        const TodoObj = { text: 'text', id: 'id' }; 
        console.log(TodoObj.id);
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

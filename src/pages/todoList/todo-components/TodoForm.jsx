import { Button, Paper, TextField } from "@mui/material";
import { useState } from "react";

const TodoForm = ({ addTask }) => {
    const [text, setText] = useState('');
    const [id, setId] = useState(0);

    const TodoCreate = (text) => {
        if (!text.trim()) return;

        const TodoObj = { text: text, id: id };
        setId(id + 1);
        addTask(TodoObj);
        setText('');
    };

    return (
        <Paper className="formContainer">
            <div className="formContente">
                <TextField
                    id="outlined-basic"
                    label="Tarefas"
                    variant="outlined"
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                    fullWidth
                    required
                />
            </div>
            <Button variant="text" onClick={() => TodoCreate(text)} >Add</Button>
        </Paper>
    );
};

export default TodoForm; 

import { Button, Paper, TextField } from "@mui/material";

const TodoForm = () => {
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

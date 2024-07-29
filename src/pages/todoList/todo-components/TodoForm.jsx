import { Paper, TextField } from "@mui/material";

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
            </div>
        </Paper>
    );
};

export default TodoForm; 

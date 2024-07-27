import { Grid } from "@mui/material";

const TodoHomePage = () => {
  return (
    <div className="todo-wrapper"> 
      <Grid className="top-section">
        <Grid className="text-section">
            <h2 className="title-todo">Faz o seguinte...</h2>
        </Grid>
      </Grid>
    </div>
  )
}

export default TodoHomePage;

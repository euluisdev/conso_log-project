import { Grid } from "@mui/material";
import TodoCalendar from "./todo-components/TodoCalendar";

const TodoHomePage = () => {
    return (
        <div className="todo-wrapper">
            <Grid className="top-section">
                <Grid className="text-section">
                    <h2 className="title-todo">Faz o seguinte...</h2>
                    <p className="textStyled">
                        &nbsp;&nbsp;&nbsp;&nbsp;"Organize suas tarefas diárias com facilidade usando nossa nova aplicação de Lista de Tarefas em React! Com acesso rápido e intuitivo a uma interface simples, você pode adicionar, marcar como concluído, editar e excluir tarefas com apenas alguns cliques. Precisa criar uma lista de afazeres, lembrar de compromissos ou acompanhar suas metas diárias? Nossa aplicação oferece todas essas funcionalidades e muito mais. Além disso, suas tarefas são salvas automaticamente localmente, garantindo que você nunca perca seu progresso, mesmo se fechar o navegador  📝.<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;Com um design limpo e fácil de usar, nossa aplicação torna a gestão de tarefas uma experiência agradável. A interface intuitiva permite que você navegue facilmente entre suas tarefas, marque aquelas concluídas e edite ou exclua conforme necessário. Não importa se você está organizando seu dia de trabalho ou acompanhando suas metas pessoais, nossa Lista de Tarefas em React é a ferramenta perfeita para simplificar sua rotina diária.
                        Então, por que esperar? Comece a aumentar sua produtividade e gerenciar suas tarefas de forma eficiente hoje mesmo. Acesse meu GITHUB, para entender todo código fonte da aplicação, e faça um clone agora e transforme a maneira como você lida com suas tarefas diárias. Mas antes, desfrute da nossa aplicação rodando no navegador!"
                    </p>
                </Grid>
                <Grid className="calendar"> 
                    <TodoCalendar />
                </Grid>
            </Grid>
        </div>
    )
}

export default TodoHomePage;

import { GrFormNext, GrFormPrevious } from "react-icons/gr";

function FormSteps() {  
  const formComponents = [];

  return (
    <div className="form-app">
      <div className="form-header">
        <h2>Deixe sua avaliação:</h2>
        <p>
          Ficamos Felizes com seu acesso, utilize o formulário para avaliar nossa Aplicação. 
        </p>
      </div>  
      <div className="form-container">
        <p>etapas</p>
        <form>
          <div className="form-inputs"></div>
          <div className="actions">
            <button type="button">  
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            <button type="submit">
              <span>Avançar</span>
              <GrFormNext />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormSteps;

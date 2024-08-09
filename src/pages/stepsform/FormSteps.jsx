

function FormSteps() {
  return (
    <div className="form-app">
      <div className="form-header">
        <h2>Deixe sua avaliação:</h2>
        <p>Ficamos Felizes com seu acesso, utilize o formulário para avaliar nossa Aplicação.</p>
      </div>  
      <div className="form-container">
        <p>etapas</p>
        <form>
          <div className="action">
            <button type="button">Voltar</button>
            <button type="submit">Avançar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormSteps;



const FormHandlerSteps = ({ currentStep }) => {
  return (
    <div className="steps">
        <div className="step active">
            <p>Identificação</p>
        </div>
        <div className="step">
            <p>Avaliação</p>
        </div>
        <div className="step">
            <p>Envio</p>
        </div>
      
    </div>
  );
};   

export default FormHandlerSteps;  


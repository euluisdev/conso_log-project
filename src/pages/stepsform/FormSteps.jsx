import { GrFormNext, GrFormPrevious } from "react-icons/gr";  
import { FiSend } from "react-icons/fi";  

import FormUser from "./form-components/FormUser";  
import FormReview from "./form-components/FormReview";  
import FormThanks from "./form-components/FormThanks";  

//hook
import useForm from "./hooks/useForm";  

import "./form-styles/FormImputs.css";

function FormSteps() {  
  const formComponents = [ 
    <FormUser />, 
    <FormReview />, 
    <FormThanks />, 
  ];  

  const { currentStep, currentComponent, changeSteps, isLastStep, isFirstStep } = useForm(formComponents);

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
        <form onSubmit={(e) => changeSteps(currentStep + 1, e)}>
          <div className="form-inputs">{currentComponent}</div>
          <div className="actions">
            {
              !isFirstStep && (
                <button type="button" onClick={() => changeSteps(currentStep - 1)}>
                  <GrFormPrevious />
                  <span>Voltar</span>
                </button>
              )
            }
            {
              !isLastStep ? (
                <button type="submit">
                  <span>Avançar</span>
                  <GrFormNext />
                </button>
              ) : (
                <button type="button">  
                  <span>Enviar</span>     
                  <FiSend />             
                </button>
              )
            }
          </div>
        </form>
      </div>
    </div>
  )
}

export default FormSteps;

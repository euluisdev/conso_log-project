import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import FormUser from "./form-components/FormUser";
import FormReview from "./form-components/FormReview";
import FormThanks from "./form-components/FormThanks";

//hook
import useForm from "./hooks/useForm";

function FormSteps() {  
  const formComponents = [ 
    <FormUser />, 
    <FormReview />, 
    <FormThanks />,  
  ];  

  const {currentStep, currentComponent} = useForm(formComponents);  

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

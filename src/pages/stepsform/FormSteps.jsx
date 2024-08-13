import { GrFormNext, GrFormPrevious } from "react-icons/gr";  
import { FiSend } from "react-icons/fi";  
import { Modal, Box, Typography, Button } from '@mui/material';

//components
import FormUser from "./form-components/FormUser";  
import FormReview from "./form-components/FormReview";   
import FormThanks from "./form-components/FormThanks";    
import FormHandlerSteps from "./form-components/FormHandlerSteps";  

//hooks
import useForm from "./hooks/useForm";  
import { useState } from "react";

import "./form-styles/FormImputs.css";

const formAnswer = {
  name: "",
  email: "", 
  review: "", 
  comment: "", 
};

const FormSteps = () => {  
  const [data, setData] = useState(formAnswer); 
  const [openModal, setOpenModal] = useState(false);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [ 
    <FormUser data={data} updateFieldHandler={updateFieldHandler} />, 
    <FormReview data={data} updateFieldHandler={updateFieldHandler} />, 
    <FormThanks data={data} />, 
  ];  

  const { 
    currentStep,  
    currentComponent,  
    changeSteps,  
    isLastStep,  
    isFirstStep  
  } = useForm(formComponents); 

  const handleSendMessageWpp = () => {
    const message = `Nome: ${data.name}\nEmail: ${data.email}\nSatisfação: ${data.review}\nComentário: ${data.comment}`;   
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+5581998136237&text=${encodeURIComponent(message)}`;  
    window.open(whatsappUrl, "_blank");  

    setOpenModal(true); 
  };  

  const handleClose = () => setOpen(false);  

  return (
    <div className="form-app">
      <div className="form-header">
        <h2>Deixe sua avaliação:</h2>
        <p>
          Ficamos Felizes com seu acesso, utilize o formulário para avaliar nossa Aplicação.
        </p>
      </div>
      <div className="form-container">
        <FormHandlerSteps currentStep={currentStep} />
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
                <button type="button" onClick={handleSendMessageWpp}>  
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

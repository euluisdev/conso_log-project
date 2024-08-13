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
  const [open, setOpen] = useState(false);

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

  const handleSend = () => {
    const message = `Nome: ${data.name}\nEmail: ${data.email}\nSatisfação: ${data.review}\nComentário: ${data.comment}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=+5581998136237&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setOpen(true);

/*     alert(`Olá ${data.name}, sua mensagem foi enviada com sucesso! Obrigado.`);   */
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

      <Modal open={open} onClose={handleClose}>
      <Box sx={{ p: 8, backgroundColor: 'white', borderRadius: 2 }}>
        <Typography variant="h2" component="h2">
          Sucesso!
        </Typography>
        <Typography variant="h3" sx={{ mt: 2 }}>
          Olá {data.name}, sua mensagem foi enviada com sucesso! Obrigado.
        </Typography>
        <Button sx={{ p: 8, fontSize: '2rem',  }} onClick={handleClose}>Fechar</Button>
      </Box>
      </Modal>

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
                <button type="button" onClick={handleSend}>  
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

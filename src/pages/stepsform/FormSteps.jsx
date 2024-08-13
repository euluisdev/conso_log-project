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

  const formReset = () => {
    setData(formAnswer);
    changeSteps(0);
  };

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

  const handleClose = () => {
    setOpen(false);
    formReset()
  };

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
          <Button sx={{ p: 8, fontSize: '2rem', }} onClick={handleClose}>Fechar</Button>
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
      <section className="text-tecnic">
        <div className="half-width highlighted-text">
          <h2>/* Documentação React Utilizada: */</h2>
          <p>
            &nbsp;&nbsp;&nbsp;Durante o desenvolvimento desta aplicação em REACT, foram consultadas e aplicadas algumas seções da documentação oficial do React. Acesse cada parte da Documentação REACT, através do link em azul, que aparece nesta sessão:
            <br />&nbsp;&nbsp;&nbsp;##Introdução ao JSX:
            Utilizado para escrever a interface da calculadora de forma declarativa, permitindo a criação de elementos React utilizando uma sintaxe semelhante ao HTML.
            <a href="https://reactjs.org/docs/jsx-in-depth.html"> JSX In Depth.  </a>
            <br />&nbsp;&nbsp;&nbsp;##Componentes e Props:
            A calculadora é dividida em componentes reutilizáveis, como Button, Display, CalculatorHistory, e Calculator. As props são usadas para passar dados e funções entre esses componentes.
            <a href="https://reactjs.org/docs/components-and-props.html"> Components and Props.  </a>
            <br></br>&nbsp;&nbsp;&nbsp;##Estado e Ciclo de Vida:
            Utilizados para gerenciar o estado interno da calculadora. O estado é mantido em variáveis como num, oldNumber, fourOperation e history, que armazenam o valor atual, o valor antigo, a operação selecionada e o histórico de cálculos, respectivamente.
            <a href="https://reactjs.org/docs/state-and-lifecycle.html"> State and Lifecycle.  </a>
            <br></br>&nbsp;&nbsp;&nbsp;##Manipulação de Eventos:
            Para capturar e tratar eventos de clique nos botões da calculadora, permitindo que a interface reaja às ações do usuário.
            <a href="https://reactjs.org/docs/handling-events.html"> Handling Events.  </a>
            <br></br>&nbsp;&nbsp;&nbsp;##Listas e Chaves:
            São utilizadas para renderizar os botões da calculadora de forma eficiente, garantindo que cada botão tenha uma chave única, otimizando a renderização.
            <a href="https://reactjs.org/docs/lists-and-keys.html"> Lists and Keys.  </a>
            <br></br>&nbsp;&nbsp;&nbsp;##Hooks
            useState é usado para gerenciar o estado local dos componentes funcionais, permitindo o controle dos valores e operações da calculadora de forma eficiente.
            &nbsp;<a href="https://reactjs.org/docs/hooks-intro.html">Introducing Hooks.  </a>
            &nbsp;&nbsp;<a href="https://reactjs.org/docs/hooks-state.html">Using the State Hook.  </a>
            <br></br>&nbsp;&nbsp;&nbsp;##Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE no meu GITHUB para obter mais informações.
          </p>
        </div>
      </section>
    </div>
  )
}

export default FormSteps;

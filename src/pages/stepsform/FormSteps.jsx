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

import "../../media-query/FormMediaQuery.css";

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
        <Box
          sx={{
            p: 8,
            backgroundColor: 'white',
            borderRadius: 2,
            width: '50%',
            maxWidth: '600px', // Isso limita a largura máxima, ajuste conforme necessário
            margin: 'auto',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)', // Centraliza vertical e horizontalmente 
            boxShadow: 24, // Adiciona uma sombra agradável
          }}
        >
          <Typography variant="h2" component="h2">
            Sucesso!
          </Typography>
          <Typography variant="h3" sx={{ mt: 2 }}>
            Olá {data.name}, sua mensagem foi enviada com sucesso! Obrigado.
          </Typography>
          <Button sx={{ p: 6, fontSize: '2rem' }} onClick={handleClose}>Fechar</Button>
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
          <h2><strong>Sobre Este Projeto</strong><br /><br /></h2>
          <p>
            Este formulário de avaliação foi desenvolvido com React e destaca várias práticas modernas de desenvolvimento web.<br /><br />

            <strong>Funcionalidades Principais</strong><br /><br />

            - Formulário Multi-Etapas: Dividido em três etapas - dados do usuário, avaliação e agradecimento - com navegação intuitiva.<br />
            - Envio via WhatsApp: Os dados preenchidos são enviados diretamente para um número de WhatsApp.<br />
            - Modal de Confirmação: Após o envio, um modal confirma o sucesso da operação e reseta o formulário.<br /><br />

            <strong>Tecnologias Utilizadas</strong><br /><br />

            - <a href="https://reactjs.org/">React</a>: Utilizei componentes reutilizáveis e hooks personalizados para gerenciar o estado e o fluxo das etapas.<br />
            - <a href="https://mui.com/">Material UI</a>: Para estilização e criação de um modal personalizado, seguindo a documentação oficial.<br />
            - <a href="https://react-icons.github.io/react-icons/">React Icons</a>: Adicionei ícones para melhorar a experiência de usuário.<br /><br />

            <strong>Detalhes Técnicos</strong><br /><br />

            - Hooks Personalizados: Um hook personalizado (<a href="https://reactjs.org/docs/hooks-custom.html">useForm</a>) foi criado para controlar o fluxo das etapas do formulário.<br />
            - CSS Customizado: Estilos personalizados foram aplicados além dos componentes do Material UI para garantir um design coeso.<br /><br />

            <strong>Documentação Consultada</strong><br /><br />

            - <a href="https://reactjs.org/docs/getting-started.html">React Documentation</a> - para hooks e componentização.<br />
            - <a href="https://mui.com/material-ui/getting-started/overview/">Material UI Documentation</a> - para modais e estilos personalizados.<br />
            - <a href="https://react-icons.github.io/react-icons/">React Icons Documentation</a> - para a integração de ícones.<br /><br />

            Este projeto faz parte do meu portfólio e está disponível no GitHub. Fique à vontade para explorar o código e as demais implementações <a href="https://github.com/euluisdev/conso_log-project">aqui</a>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default FormSteps;  

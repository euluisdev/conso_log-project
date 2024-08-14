# Projeto CONSOL DOT LOG 




# Formulário de Avaliação com React

Este é um projeto de formulário de avaliação construído com React, utilizando componentes reutilizáveis e hooks personalizados para gerenciar etapas do formulário e controlar o estado dos dados inseridos pelos usuários.

## Funcionalidades

- **Formulário Multi-Etapas**: O formulário é dividido em três etapas: informações do usuário, avaliação e mensagem de agradecimento. Cada etapa é um componente separado, permitindo um fluxo de preenchimento intuitivo.
- **Validação Simples de Campos**: Utiliza um `useState` para gerenciar o estado dos dados inseridos e atualizá-los dinamicamente conforme o usuário preenche os campos.
- **Envio de Dados via WhatsApp**: O formulário permite que o usuário envie os dados coletados para um número de WhatsApp, utilizando uma URL formatada dinamicamente.
- **Modal de Confirmação**: Após o envio dos dados, um modal é exibido confirmando o envio com uma mensagem personalizada.
- **Reset do Formulário**: O formulário é automaticamente redefinido e retorna à primeira etapa após o fechamento do modal de confirmação, proporcionando uma experiência de usuário limpa e profissional.

## Tecnologias Utilizadas

### **React**
- **Hooks**: Utilizamos `useState` para gerenciar o estado do formulário e `useEffect` para controlar a mudança de etapas e a abertura do modal. Além disso, foi implementado um hook personalizado, `useForm`, para controlar o fluxo entre as etapas do formulário.
- **Componentização**: O projeto é organizado em componentes reutilizáveis e independentes, seguindo boas práticas de desenvolvimento em React.

### **React Icons**
- Utilizamos as bibliotecas `react-icons/gr` e `react-icons/fi` para adicionar ícones ao formulário, melhorando a experiência do usuário com botões visuais.

### **Material UI**
- **Modal e Estilização**: A biblioteca `@mui/material` foi utilizada para criar o modal que exibe a mensagem de confirmação ao usuário, além de componentes de estilização como `Box`, `Typography`, e `Button`. 
  - Documentação oficial: [Material UI Modal](https://mui.com/material-ui/react-modal/)
- **Estilos customizados**: Utilizamos a capacidade de customização do Material UI para aplicar estilos personalizados no modal.

### **CSS**
- **Estilização Personalizada**: Além do Material UI, foi utilizada estilização personalizada em CSS para garantir que o design do formulário correspondesse à identidade visual do projeto como um todo.

### **Hooks Personalizados**
- **useForm**: Um hook personalizado que gerencia as etapas do formulário, verificando se é a primeira ou última etapa, e controlando as transições de etapas.

## Estrutura do Projeto

- **form-components/**: Contém os componentes específicos de cada etapa do formulário (FormUser, FormReview, FormThanks).
- **form-styles/**: Contém os arquivos .css de estilo customizados para o formulário.
- **hooks/**: Contém o hook personalizado `useForm`, utilizado para controlar as etapas do formulário.

## Fluxo de Trabalho

1. **Primeira Etapa**: O usuário insere seu nome e e-mail.
2. **Segunda Etapa**: O usuário insere sua avaliação utilizando icons e comentários adicionais.
3. **Terceira Etapa**: Uma mensagem de agradecimento é exibida, junto com  todos os dados coletados do usuário e o botão para enviar os dados via API do WHATSSAPP.

Após o envio:
- **Modal**: Um Modal aparece confirmando o envio, com uma mensagem personalizada com nome inserido no input, e um botão para fechar o Modal.
- **Redefinição**: Ao fechar o Modal, o formulário é redefinido para a primeira etapa, com todos os campos limpos, como podemos verificar no próprio projeto eme seu endereço.









## Como Executar o Projeto

Para rodar o projeto localmente:

1. Clone o repositório:
   ```bash
   git clone 
  

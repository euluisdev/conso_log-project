# Projeto CONSO DOT LOG ... in progress...







# Navegação e Página Inicial com Slider Interativo

Este projeto é uma aplicação desenvolvida em React que inclui uma barra de navegação dinâmica e uma página inicial com um carrossel de imagens interativo. O objetivo do projeto é fornecer uma interface intuitiva e responsiva que permita aos usuários explorar diferentes funcionalidades de forma simples e eficaz.

## Funcionalidades Principais

### **1. Barra de Navegação Fixa**
- **Navegação Intuitiva**: A barra de navegação está fixada no topo da página, facilitando o acesso a diferentes seções da aplicação, incluindo Calculadora, Lista de Tarefas, Filmes e Formulário de Avaliação.
- **Ícones Representativos**: Cada link na barra de navegação é acompanhado por um ícone relevante, melhorando a usabilidade e a experiência visual.
- **Menu Responsivo**: Um ícone de menu permite a visualização de um menu lateral em dispositivos menores, garantindo que a navegação seja fácil em qualquer dispositivo.

### **2. Página Inicial com Slider de Imagens**
- **Carrossel Interativo**: A página inicial apresenta um slider de imagens que destaca as principais funcionalidades da aplicação. O carrossel foi construído utilizando Swiper.js, proporcionando uma navegação suave e controles intuitivos.
- **Título Dinâmico**: O título da página inicial é dinâmico, adaptando-se ao conteúdo do slider para manter a interface envolvente.
- **Texto Explicativo**: Abaixo do slider, um texto detalhado explica as imagens exibidas, descrevendo como cada funcionalidade resolve problemas específicos dos usuários.

### **3. Responsividade**
- **Design Adaptável**: O layout da aplicação é completamente responsivo, assegurando uma experiência de usuário consistente em todos os dispositivos, desde smartphones até desktops.
- **Estilização Customizada**: A aplicação foi estilizada utilizando uma combinação de CSS puro e Material UI, oferecendo um design moderno e atraente.

## Tecnologias Utilizadas

### **React**
- **Componentização**: O projeto é dividido em componentes reutilizáveis, como `NavBar`, `HomeTitle`, e `HomeSlider`, seguindo as melhores práticas de desenvolvimento em React.
- **React Router**: Implementado para gerenciar a navegação entre diferentes páginas da aplicação de forma eficiente e organizada.

### **Swiper.js**
- **Slider de Imagens**: Utilizado para criar o carrossel de imagens na página inicial, permitindo a adição de navegação, paginação e transições suaves entre slides.

### **Material UI**
- **Ícones**: A biblioteca `@mui/icons-material` foi utilizada para adicionar ícones que representam as diferentes seções na barra de navegação.
- **Estilização**: A Material UI também foi utilizada para fornecer componentes estilizados, como botões e tipografia.

### **CSS**
- **Estilos Customizados**: O CSS foi utilizado para garantir que a aparência da aplicação corresponda à identidade visual pretendida. Arquivos CSS específicos foram criados para estilizar a barra de navegação e a página inicial.

## Estrutura do Projeto

- **src/components/**: Contém os componentes React que formam a estrutura da aplicação, incluindo a barra de navegação (`NavBar.jsx`), o título da página inicial (`HomeTitle.jsx`), e o slider de imagens (`HomeSlider.jsx`).
- **src/styles/**: Contém os arquivos CSS responsáveis pela estilização da aplicação, como `NavBar.css` e `PageHome.css`.
- **public/assets/**: Armazena as imagens e outros recursos estáticos utilizados na aplicação, especialmente no slider de imagens.

## Fluxo de Trabalho

1. **Barra de Navegação**: Facilita o acesso a diferentes partes da aplicação, com links diretos para as funcionalidades principais.
2. **Página Inicial**: Apresenta as funcionalidades da aplicação através de um slider de imagens, com um título dinâmico e um texto explicativo.
3. **Exploração das Funcionalidades**: O usuário pode interagir com o slider para visualizar diferentes funcionalidades e utilizar a barra de navegação para acessar seções específicas da aplicação.










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
  

import { Box, Container } from "@mui/material";
import { useState } from "react";

import './Calculator.css';


const Calculator = () => {
  const [num, setNum] = useState(0);
  const [oldNumber, setOldNumber] = useState(0);
  const [fourOperation, setFourOperation] = useState();
  const [history, setHistory] = useState([]);

  const UsageExemples = () => {
    return (
      <div className="usage-examples">
        <h2>Exemplos de Uso</h2>
        <ul>
          <li>adição: 12+ 8 = 20</li>
          <li>Subtração: 20 - 5 = 15</li>
          <li>Multiplicação: 6 * 7 = 42</li>
          <li>Divisão: 30 / 5 = 6</li>
        </ul>
      </div>
    );
  };

  const TipsAndTricks = () => {
    return (
      <div className="tips-and-tricks">
        <h2>Dicas e Truques</h2>
        <ul>
          <li>Faça uma operação matemática e verifique seu histórico de Cálculos.</li>
          <li>Pressione "C" para limpar rapidamente a tela.</li>
          <li>Experimente funções como porcentagem e inversão de sinal para cálculos mais avançados.</li>
        </ul>
      </div>
    );
  };

  const CalculatorHistory = () => {
    return (
      <div className="calculator-history">
        <h2>Histórico de Cálculos</h2>
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }

  /* calculator start */

  function updateScreen(e) {
    const inputValue = e.target.innerText;

    if (inputValue === '.' && num.toString().includes('.')) {
      return;
    }

    if (num === 0) {
      setNum(inputValue);
    } else {
      setNum(num + inputValue);
    }
  };

  const clear = () => {
    setNum(0);
  };

  const handlesReverseSignal = () => {
    setNum(prevNum => -prevNum);
  };

  const percentage = () => {
    setNum(num / 100);
  };

  const changeOperation = (e) => {
    const operation = e.target.innerText;
    setFourOperation(operation);
    setOldNumber(num);
    setNum(0);
  };

  const processEqual = () => {
    let result;
    if (fourOperation === '/') {
      result = oldNumber / num;
    } else if (fourOperation === '*') {
      result = oldNumber * num;
    } else if (fourOperation === '-') {
      result = oldNumber - num;
    } else if (fourOperation === '+') {
      result = parseFloat(oldNumber) + parseFloat(num);
    }
    setNum(result);
    setHistory([...history, `${oldNumber} ${fourOperation} ${num} = ${result}`]);
  }

  return (
    <div className='cont-ainer'>
      <div className="calculator-bg">
        <section className="full-width">
          <h2>Cópia simples da Calculadora iOS</h2>
          <p>
            Simplifique suas operações matemáticas com nossa nova aplicação React! 🧮 Com acesso rápido e fácil a uma calculadora intuitiva, você pode realizar cálculos básicos e avançados com apenas alguns cliques.
            Precisa fazer uma adição, subtração, multiplicação ou divisão? Nossa calculadora cobre todas essas operações e muito mais.
            Nosso design limpo e amigável torna a experiência de cálculo ainda mais agradável. Com uma interface intuitiva e botões de fácil acesso, você dominará a matemática em pouco tempo.
          </p>
        </section>
        <section className='examples-tricks'>
          <UsageExemples />
          <TipsAndTricks />
        </section>
      </div>
      <section className='flex-cont-ainer'>
        <div className="calculator">
          <Box m={9} />
          <Container maxWidth="xs">
            <div className="wrapper">
              <h3>Calculator</h3>
              <h1 className="resOperation">{num}</h1>
              <Box m={9} />
              <button className="btn-all" onClick={clear}>AC</button>
              <button className="btn-all" onClick={handlesReverseSignal}>+/-</button>
              <button className="btn-all" onClick={percentage}>%</button>
              <button className="btn-all orange" onClick={changeOperation}>/</button>
              <button className="btn-all gray" onClick={updateScreen}>7</button>
              <button className="btn-all gray" onClick={updateScreen}>8</button>
              <button className="btn-all gray" onClick={updateScreen}>9</button>
              <button className="btn-all orange" onClick={changeOperation}>*</button>
              <button className="btn-all gray" onClick={updateScreen}>4</button>
              <button className="btn-all gray" onClick={updateScreen}>5</button>
              <button className="btn-all gray" onClick={updateScreen}>6</button>
              <button className="btn-all orange" onClick={changeOperation}>-</button>
              <button className="btn-all gray" onClick={updateScreen}>1</button>
              <button className="btn-all gray" onClick={updateScreen}>2</button>
              <button className="btn-all gray" onClick={updateScreen}>3</button>
              <button className="btn-all orange" onClick={changeOperation}>+</button>
              <button className="btn-all gray wide" onClick={updateScreen}>0</button>
              <button className="btn-all gray" onClick={updateScreen}>.</button>
              <button className="btn-all orange" onClick={processEqual}>=</button>
            </div>
          </Container >
          <section className='history-calc'>
            <CalculatorHistory />
          </section>
        </div>

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
  );
};

export default Calculator;

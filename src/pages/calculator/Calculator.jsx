import { Box, Container } from "@mui/material";
import { useState } from "react";


const Calculator = () => {
  const [num, setNum] = useState(0); 

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
        <section className='examples-tricts'>

        </section>
      </div>
      <section className='flex-cont-ainer'>
        <div className="calculator">
          <Box m={9} />
          <Container maxWidth="xs">
            <div className="wrapper">
              <h3>Calculator</h3>
              {/* <h1 className="resOperation">23</h1> */}
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
            
          </section> 
        </div> 
      </section> 
    </div> 
  ) 
}; 

export default Calculator;

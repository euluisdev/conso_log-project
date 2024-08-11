import { AiOutlineStar, AiOutlineUser } from "react-icons/ai";  
import { FiSend } from "react-icons/fi";


const FormHandlerSteps = ({ currentStep }) => {
  return (
    <div className="steps">
        <div className="step active">
            <AiOutlineUser />
            <p>Identificação</p>
        </div>
        <div className="step">  
            <AiOutlineStar />  
            <p>Avaliação</p>
        </div>
        <div className="step">
            <FiSend />  
            <p>Envio</p>  
        </div>
    </div>
  );
};   

export default FormHandlerSteps;  


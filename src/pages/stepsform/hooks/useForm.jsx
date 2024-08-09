import { useState } from "react";


const useForm = () => {
    const [currentStep, setCurrentStep] = useState(0);  

    const changeSteps = (i, e) => {  
        if (e) e.preventDefault();  

        if (i < 0 || i > currentStep.length) return;  

        setCurrentStep(i);
    };  

  return {
    currentStep, 
    currentComponent: steps[currentStep], 
    changeSteps: changeSteps,
  }
};  

export default useForm;  

import { useState } from "react";


const useForm = (steps) => {
    const [currentStep, setCurrentStep] = useState(0);  

    const changeSteps = (i, e) => {  
        if (e) e.preventDefault();  

        if (i < 0 || i >= steps.length) return;  

        setCurrentStep(i);
    };  

  return {
    currentStep: currentStep, 
    currentComponent: steps[currentStep], 
    changeSteps: changeSteps,  
    
  }
};  

export default useForm;  

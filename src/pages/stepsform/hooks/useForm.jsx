import { useState } from "react";


const useForm = () => {
    const [currentStep, setCurrentStep] = useState(0);

  return {
    currentStep, 
  }
};  

export default useForm;  

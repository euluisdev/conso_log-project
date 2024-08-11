

const FormReview = () => {
  return (
    <div className="form-review">  
      <div className="form-control score-container">
        <label className="radio-container">
          <input 
            type="radio" 
            value="unsatisfield" 
            name="review" 
          />
          <p>Insatisfeito</p>
        </label>  
        <label className="radio-container">
          <input
            type="radio"
            value="neutral"
            name="review"
          />
          <p>Poderia ser melhor</p>
        </label>
        <label className="radio-container">
          <input
            type="radio"
            value="satisfied"
            name="review"
          />
          <p>Satisfeito</p>
        </label>
        <label className="radio-container">
          <input
            type="radio"
            value="very_satisfied"
            name="review"
          />
          <p>Muito Satisfeito</p>
        </label>
      </div>      
    </div> 
  );  
};  

export default FormReview;  




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
      </div>      
    </div> 
  );  
};  

export default FormReview;  


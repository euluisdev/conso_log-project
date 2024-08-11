import { 
  BsFillEmojiFrownFill, 
  BsFillEmojiHeartEyesFill, 
  BsFillEmojiNeutralFill, 
  BsFillEmojiSmileFill
} from "react-icons/bs";  
 
 
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
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>  
        <label className="radio-container">
          <input
            type="radio"
            value="neutral"
            name="review"
          />
          <BsFillEmojiNeutralFill />
          <p>Poderia ser melhor</p>
        </label>
        <label className="radio-container">
          <input
            type="radio"
            value="satisfied"
            name="review"
          />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>
        <label className="radio-container">
          <input
            type="radio"
            value="very_satisfied"
            name="review"
          />
          <BsFillEmojiHeartEyesFill />
          <p>Muito Satisfeito</p>
        </label>
      </div>      
    </div> 
  );  
};  

export default FormReview;  


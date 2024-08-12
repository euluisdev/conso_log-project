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
      <div className="form-control">
        <label htmlFor="comment">Comentário</label>  
        <textarea 
          name="comment" 
          id="comment"  
          placeholder="Conte como foi sua experiência..."
          /* required */
        ></textarea>
      </div> 
    </div> 
  );  
};  

export default FormReview;  


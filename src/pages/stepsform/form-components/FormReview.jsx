import { 
  BsFillEmojiFrownFill, 
  BsFillEmojiHeartEyesFill, 
  BsFillEmojiNeutralFill, 
  BsFillEmojiSmileFill
} from "react-icons/bs";  
 
 
const FormReview = ({ data, updateFieldHandler }) => {
  return (
    <div className="form-review">  
      <div className="form-control score-container">
        <label className="radio-container">
          <input 
            type="radio" 
            value="unsatisfield" 
            name="review" 
            required 
            checked={data.review === "unsatisfied"}
            onChange={(e) => updateFieldHandler('review', e.target.value)}
          />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>  
        <label className="radio-container">
          <input
            type="radio"
            value="neutral" 
            name="review"  
            required
            checked={data.review === 'neutral'}
            onChange={(e) => updateFieldHandler('review', e.target.value)}
          />
          <BsFillEmojiNeutralFill />
          <p>Poderia ser melhor</p>
        </label>
        <label className="radio-container">
          <input
            type="radio"
            value="satisfied"
            name="review"  
            required
            checked={data.review === 'satisfied'} 
            onChange={(e) => updateFieldHandler('review', e.target.value)}  
          />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>
        <label className="radio-container">
          <input
            type="radio"
            value="very_satisfied"
            name="review"  
            required
            checked={data.review === 'very_satisfied'}
            onChange={(e) => updateFieldHandler('review', e.target.value)}
          />
          <BsFillEmojiHeartEyesFill />
          <p>Muito Satisfeito</p>
        </label>
      </div>     
      <div className="form-control">
        <label className="label-comment" htmlFor="comment">Comentário</label>  
        <textarea 
          name="comment" 
          id="comment"  
          placeholder="Conte como foi sua experiência..."
          required 
          value={data.comment || ''} 
          onChange={(e) => updateFieldHandler('comment', e.target.value)}  
        ></textarea> 
      </div> 
    </div> 
  );  
};  

export default FormReview;  


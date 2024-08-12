import { 
  BsFillEmojiFrownFill, 
  BsFillEmojiHeartEyesFill, 
  BsFillEmojiNeutralFill, 
  BsFillEmojiSmileFill
} from "react-icons/bs"; 

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />
};

const FormThanks = ({ data }) => {
  return (
    <div className="thanks-container" >
      <h2>Falta pouco</h2>
      <p>
        A sua opinião é muito importante para a avaliação da aplicação em geral, e assim que concluir, verá suas repostas em tempo real, e as mesmas serão enviadas para o autor da aplicação.    
      </p>  
      <p>Para concluir sua avaliação, clique no botão Enviar, abaixo.</p>   
      <h3>Aqui está o resumo da sua avaliação, {data.name}: </h3>  
      <p className="review-data">
        <span>Satisfação com o produto: </span>
        {emojiData[data.review]}
      </p>
      <p className="review-data">  
        <span>Comentário: </span> 
        {data.comment}
      </p> 
    </div>  
  );   
};    
 
export default FormThanks;   
 
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
      <h1>Falta pouco</h1>
      <p>
        A sua opinião é muito importante para a avaliação da aplicação em geral, e assim que concluir, verá suas repostas em tempo real, e as mesmas serão enviadas para o autor da aplicação.
      </p>
      <p>Para concluir sua avaliação, clique no botão Enviar, abaixo.</p>
      <div className="review-data">
        <h3>Aqui está o resumo da sua avaliação, {data.name}: </h3>
        <p>
          <span>Satisfação com a aplicação: </span>
          <span className="emoji-data">{emojiData[data.review]}</span>
        </p>
        <p>
          <span>Seu comentário: </span>
          {data.comment}
        </p>
      </div>
    </div>
  );
};

export default FormThanks;

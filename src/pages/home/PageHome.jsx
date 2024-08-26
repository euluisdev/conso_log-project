import HomeTitle from './HomeTitle.jsx';
import HomeSlider from './HomeSlider.jsx';

import { register } from 'swiper/element/bundle';
register();

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './home.css/PageHome.css'

function PageHome() {
  const title = ' `Explore our inspiring <projects />` '

  return (
    <section className='homePage-cont'>
      <div className='initial-text'>
        <HomeTitle title={title} />
      </div>
      <div>
        <HomeSlider />
      </div>
      <div className="txt-end">
        <p>
          As imagens acima oferecem um resumo de alguns dos problemas diários enfrentado por nós, e nossa aplicação resolve cada um desses problemas de forma simples e direta, e  cada uma projetada para interatividade dinâmica. Você pode explorar todas essas aplicações em pleno funcionamento em nosso servidor, através da barra de navegação localizada no TOPO do site, e fixada. Nossa aplicação foi cuidadosamente desenvolvida para operar sem problemas ou bugs em qualquer tamanho de tela ou dispositivo, garantindo uma experiência incrível para você. Após verificar todas as funcionalidades, há um breve formulário, onde pode ser acessado na barra de menu fixada acima, e poderá avaliar toda a plicação, verificar sua avaliação, e enviar, para que possamos melhorar cada vez mais sua experiência com a aplicação.
        </p>
      </div>
    </section>
  ); 
}; 

export default PageHome;  

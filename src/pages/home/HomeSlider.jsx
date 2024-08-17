import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'; 
import './home.css/HomeSlider.css'
 
const HomeSlider = () => { 
    const data = [ 
        { id: 1, text: 'Resolva seus cálculos matemáticos utilizando nossa calculadora.', src: 'src/pages/home/img-home/1+1=3.jpg' }, 
        { id: 2, text: 'Organize sua lista de afazeres diários com a nossa ToDo list.', src: 'src/pages/home/img-home/home-todo.jpg' }, 
        { id: 3, text: 'Viaje no mundo Cinematográfico, desbravando toda descrição do seu fime preferido.', src: 'src/pages/home/img-home/movie.jpg' }, 
        { id: 4, text: 'Avalie toda nossa aplicação pelo nosso formulário incrível!', src: 'src/pages/home/img-home/form.jpg' },   
    ]; 


    return (  
        <div className='slider-container'>  
            <Swiper 
                slidesPerView={1} 
                pagination={{ clickable: true }} 
                navigation 
            > 
                { 
                    data.map((item) => ( 
                        <SwiperSlide key={item.id}>
                            <img src={item.src} alt="Slider" className='slide-item' />
                            <h1 className='slide-txt'>{item.text}</h1>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    ) 
} 

export default HomeSlider;  

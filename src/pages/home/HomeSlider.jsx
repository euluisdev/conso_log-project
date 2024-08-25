import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css'; 
import './home.css/HomeSlider.css'

import img1 from './img-home/1+1=3.jpg';
import img2 from './img-home/home-todo.jpg';
import img3 from './img-home/movie.jpg';
import img4 from './img-home/form.jpg';
 
const HomeSlider = () => { 
    const data = [ 
        { id: 1, text: 'Resolva seus cálculos matemáticos utilizando nossa calculadora.', src: img1 }, 
        { id: 2, text: 'Organize sua lista de afazeres diários com a nossa ToDo list.', src: img2 }, 
        { id: 3, text: 'Viaje no mundo Cinematográfico, desbravando toda descrição do seu fime preferido.', src: img3 }, 
        { id: 4, text: 'Avalie toda nossa aplicação pelo nosso formulário incrível!', src: img4 },   
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

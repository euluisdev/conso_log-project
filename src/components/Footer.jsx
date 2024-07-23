import {
    BsLinkedin,
    BsGithub,
    BsInstagram,
} from 'react-icons/bs';

import "./cssComponents/Footer.css"

const Footer = () => {
  return (
    <footer className="footer-container">
        <div className="footer-icons">
            <ul>
                <li><a href="https://github.com/euluisdev"><BsLinkedin /></a></li> 
                <li><a href="https://github.com/euluisdev"><BsGithub /></a></li> 
                <li><a href="https://github.com/euluisdev"><BsInstagram /></a></li> 
            </ul>
        </div>
        <div className="developed">
            <p>Desenvolvido por: <a href="https://github.com/euluisdev">euluis-dev</a></p> 
            <p>Todos os direitor reservados: &copy; 2024 CONSO.LOG</p> 
        </div>
    </footer>
  )
}

export default Footer;

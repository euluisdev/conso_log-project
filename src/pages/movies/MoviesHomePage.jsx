import { Outlet } from "react-router-dom";
/* import MoviesNavbar from "./moviesComponents/MoviesNavbar"; */  

import MoviesBarNav from "./moviesComponents/MoviesBarNav";

import './style/MoviesImport.css';


const MoviesHomePage = () => {
    return (
        <div className="movies-app">
            <section className="double-text">
                <section className="movies-txts form-text-end">
                    <h2>Explore o Universo Cinematográfico</h2>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;Descubra o universo cinematográfico em suas mãos com nossa nova aplicação React! Nossa aplicação foi desenvolvida utilizando as tecnologias mais modernas e robustas para garantir uma experiência de usuário fluida e eficiente. Imagine ter acesso a um vasto catálogo de filmes, todos ao alcance de um clique. Com nossa ferramenta, você pode explorar e pesquisar seus filmes favoritos em segundos, graças à integração perfeita com a API do <strong>TMDB</strong>.
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;Quer saber mais sobre um filme específico? Sem problemas! Basta digitar o título do seu filme preferido em nossa barra de navegação abaixo, e nossa aplicação exibirá uma riqueza de filmes e informações, desde a imagem da capa até detalhes cruciais como avaliações, sinopse e muito mais.
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;Além disso, nossa interface amigável e intuitiva garante que você navegue facilmente por entre os filmes, tornando a experiência de descoberta ainda mais cativante.
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;Mais Detalhes para explorar o código-fonte completo desta aplicação, incluindo instruções de instalação e execução, visite meu repositório no GitHub, e no Arquivo README.md do projeto, você encontrará informações adicionais sobre a estrutura do projeto, funcionalidades implementadas e outros detalhes relevantes.
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;Nesta página ainda encontrará os termos Técnicos da aplicação, e a mesma rodando no navegador.
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;Então, por que esperar? Junte-se a nós e mergulhe no mundo do cinema com facilidade e estilo. Digite agora mesmo seu filme preferido e comece sua jornada cinematográfica! <span className="emoji">🍿</span>
                    </p>
                </section>
                <section className="movies-txts2 form-text-end">
                    <h2>Termos Técnicos da Aplicação</h2>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;Na nossa Aplicação completa, ulizamos a Biblioteca 'lib' <a href="https://react.dev/">React </a> para criar componentes reutilizáveis que gerenciam eficientemente o estado da aplicação, permitindo uma experiência de usuário dinâmica e responsiva. 
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;##Utilizamos os <a href="https://react.dev/reference/react/hooks">Hooks</a>, useState para gerenciar o estado local dos componentes, e podendo ser alterado posteriormente. Documentação <a href="https://react.dev/reference/react/useState"> useState</a>. 
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;##Foi utilizado também o Hook useEffect para realizar operações após a renderização do componente. Documentação <a href="https://react.dev/reference/react/useEffect">useEffect</a>. 
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;##Foi implementado a lib React Router para permitir a navegação fluida entre diferentes páginas da aplicação, mantendo a experiência do usuário intuitiva e sem recarregamentos desnecessários.
                        Documentação Oficial da Biblioteca <a href="https://reactrouter.com/en/main/start/overview">React Router</a>. 
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;##Foi implementado a react-icons, biblioteca permite que você utilize ícones de diferentes coleções (como Font Awesome, Material Design Icons, e outros) de uma maneira simples e consistente., melhorando a usabilidade e a estética da sua aplicação.
                        Documentação <a href="https://react-icons.github.io/react-icons/">React-Icons</a>. 
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;##Utilizamos o VITE, um bundler leve para gerenciar e construir nossa aplicação React de maneira rápida e eficiente durante o desenvolvimento.
                        Documentação do <a href="https://vitejs.dev/guide/">VITE</a>. 
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;##Foi utilizado Git para controle de versão do código-fonte da aplicação, permitindo colaboração eficiente e histórico de alterações.
                        Documentação <a href="https://git-scm.com/doc">Git</a>. 
                        <br />&nbsp;&nbsp;&nbsp;&nbsp;##A API do TMDB permite acesso a informações detalhadas sobre milhares de títulos. Integramos esta API para oferecer aos usuários uma experiência rica e informativa.
                        Documentação do <a href="https://developers.themoviedb.org/3/getting-started/introduction">TMDB API</a>.
                    </p>
                </section>
            </section>

            <section className="nave-two">
                <MoviesBarNav />
                <Outlet />
            </section>
        </div>
    );
};

export default MoviesHomePage;

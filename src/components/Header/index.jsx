import React from 'react';
import '../Header/style.css';

function Header() {
    return(
        <div>
            <header className="header">
                <button>
                    Intruções
                </button>
                <button>
                    Localização
                </button>
                <button>
                    Telefone
                </button>
                <button>
                    Sobre nós
                </button>
                <img className="imga" src= {process.env.PUBLIC_URL + "/images.png"} alt="logo" />
                <img className="img_cent" src={process.env.PUBLIC_URL + "/imagem_cataratas.jpg"} alt="imagem" />
            </header>
            <div>
                <h1 className="texto">
                    Como é linda as cataratas do iguaçu
                </h1>
            </div>
            <footer className="footer">
                <div>
                    <img className="icone_w" src={process.env.PUBLIC_URL + "/icone1.png"} alt="whatsapp" />
                    <button className="num">
                        91242-3531
                    </button>
                    <img className="icone_f" src={process.env.PUBLIC_URL + "/icone2.png"} alt="facebook" />
                    <button className="facebook">
                        Joao Pinheiro das Neves
                    </button>
                    <img className="icone_i" src={process.env.PUBLIC_URL + "/icone3.png"} alt="instagram" />
                    <button className="instagram">
                        joao_pinheiroo96
                    </button>
                </div>
            </footer>
        </div>
    );
}
export default Header;
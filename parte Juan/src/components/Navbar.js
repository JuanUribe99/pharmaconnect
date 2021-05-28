import React from 'react';

function NavBar() {
    return (
        <div className="Navbar">

            <div className="leftSide">
                <div className="links">
                    <a href="/home">Home</a>
                    <a href="/aboutus">Acerca de</a>
                    <a href="/Soporte">Soporte</a>
                    <a href="/Carrito">Carrito</a>
                </div>
            </div>

            <div className="rightSide">
                <input type="text" placeholder="Busca tu producto" />
                <button>Buscar</button>
            </div>
        </div> 
    );
}

export default NavBar;
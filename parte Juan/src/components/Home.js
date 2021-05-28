import React from 'react';
import product_card from "../data/product_data"
import dolex from '../images/dolex.jpg';
import azitro from '../images/azitro.jpg';
import aspirina from '../images/aspirina.jpg';
import omeprazol from '../images/omeprazol.jpg';

const Home = () => {

    const listItems = product_card.map((item) =>
        <div className="card" key={item.id}>
            <div className="card_img">
                <img src={dolex} alt="img"/>
            </div>
            <div className="card_header">
                <h2>{item.product_name}</h2>
                <p>{item.price}</p>
                <div className="btn">Agregar al carrito</div>
            </div>

        </div>
    )
    return(
        <div className="main_content">
            {listItems}
        </div>
    )


}

export default Home
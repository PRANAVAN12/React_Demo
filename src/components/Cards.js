import React from 'react';
import CardItem from './CardItem';
import './Cards.css';


function Cards() {
    return (
        <div className='cards'>
            <h1>Explore the world with us</h1>
            <div className="cards__container">
                <div className="cards_wrapper">
                     <ul className="cards__items">
                        <CardItem 
                        src="images/cherry.jpg"
                        text="The Cherry Blossom season in Japan 
                        is an extremely beautiful site and it is 
                        an ideal time to visit the country."
                        label='Japan'
                        path='/packages'
                        />
                        <CardItem 
                        src="images/bora.jpg"
                        text="Bora Bora is a small island in the South 
                        Pacific. Its a heaven on earth with 
                        turquoise lagoons, coral reefs and 
                        overwater bungalows."
                        label='Bora Island'
                        path='/packages'
                        />
                        <CardItem 
                        src="images/machu.jpg"
                        text="Machu Picchu is a famous world heritage
                        located in Peru. It has an astounding 
                        architecture with a beautiful view of the
                        surrounding mountains."
                        label='Machu Picchu'
                        path='/packages'
                        />
                     </ul>
                </div>
            </div>
         </div>
    )
}

export default Cards;

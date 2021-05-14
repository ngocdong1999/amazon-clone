import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            />
            {/* Product id, title, price, rating, image */}
            <div className="home__row">
                <Product 
                    id="1"
                    title="The Learn Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={45.99}
                    rating={5}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
                <Product 
                    id="2"
                    title="Amazone Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={25.99}
                    rating={5}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="3"
                    title="Samsung LC49RG90SSUXEN 45' Curved LED Gaming Moniter"
                    price={199.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />
                <Product 
                    id="4"
                    title="Amazone Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99}
                    rating={5}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
                <Product 
                    id="5"
                    title="Amazone Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={100.99}
                    rating={5}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
            </div>
            <div className="home__row">
            <Product 
                    id="6"
                    title="Amazone Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={16.99}
                    rating={5}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
            </div>

            {/* Product */}
        </div>
    )
}

export default Home

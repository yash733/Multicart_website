import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/PSS/Personal-Safety_3000x1200._CB668022827_.jpg"
          alt=""
        />

        <div className="home__row">
          <div className="zoom">
            <Product
              id="12321341"
              title="Sapiens: A Brief History of Humankind"
              price={199}
              image="https://images-eu.ssl-images-amazon.com/images/I/81EOCTUSCLL._AC_UL320_SR320,320_.jpg"
              rating={5}
            />
          </div>
          <div className="zoom">
            <Product
              id="49538094"
              title="Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Grey (4th Generation)"
              price={39990}
              image="https://images-na.ssl-images-amazon.com/images/I/811aBwuSuIL._SL1500_.jpg"
              rating={4}
            />
          </div>
        </div>

        <div className="home__row">
          <div className="zoom">
            <Product
              id="4903850"
              title="Symphony Sumo 75 XL Powerful Desert Air Cooler 75-litres"
              price={1050}
              image="https://images-na.ssl-images-amazon.com/images/I/71%2B1hl5TUOL._SL1500_.jpg"
              rating={4}
            />
          </div>
          <div className="zoom">
            <Product
              id="23445930"
              title="V-Guard VGSD 50 Smart Refrigerator Stabilizer"
              price={4299}
              image="https://images-na.ssl-images-amazon.com/images/I/716CZjTKFVL._SL1500_.jpg"
              rating={3}
            />
          </div>
          <div className="zoom">
            <Product
              id="3254354345"
              title="Sujata Powermatic Plus 900 Watts Juicer Mixer Grinder"
              price={3300}
              image="https://images-na.ssl-images-amazon.com/images/I/71MRuaxRzAL._SL1500_.jpg"
              rating={4}
            />
          </div>
        </div>

        <div className="home__row">
          <div className="zoom">
            <Product
              id="90829332"
              title="Butterfly Smart Glass 3 Burner Gas Stove"
              price={10399}
              image="https://images-na.ssl-images-amazon.com/images/I/51TYBmz4JXL._SL1184_.jpg"
              rating={4}
            />
          </div>
          <div className="zoom">
            <Product
              id="90829344"
              title="Pigeon by Stovekraft Basics Aluminium Non-stick Cookware Set, Set of 3"
              price={1148}
              image="https://images-na.ssl-images-amazon.com/images/I/61JlllBcGpL._SL1390_.jpg"
              rating={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

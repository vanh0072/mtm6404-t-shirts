import React from 'https://unpkg.com/react/umd/react.development.js';
import ReactDOM from 'https://unpkg.com/react-dom/umd/react-dom.development.js';
import { tshirts } from './t-shirts.js';

const TShirtItem = ({ tshirt }) => {
    const [quantity, setQuantity] = React.useState(1);

    const handleBuy = () => {
        if (tshirt.stock >= quantity) {
            tshirt.stock -= quantity; // Decrease stock
            setQuantity(1); // Reset quantity after purchase
        }
    };

    return (
        <div className="tshirt">
            <h3>{tshirt.title}</h3>
            <img src={tshirt.image} alt={tshirt.title} />
            <p>Price: ${tshirt.price.toFixed(2)}</p>
            {tshirt.stock > 0 ? (
                <>
                    <p>Stock: {tshirt.stock}</p>
                    <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                        {[...Array(tshirt.stock)].map((_, index) => (
                            <option key={index} value={index + 1}>{index + 1}</option>
                        ))}
                    </select>
                    <button onClick={handleBuy}>Buy</button>
                </>
            ) : (
                <p>Out of Stock</p>
            )}
        </div>
    );
};

export default TShirtItem;

const TShirtList = () => {
    return (
        <div>
            {tshirts.map((tshirt, index) => (
                <TShirtItem key={index} tshirt={tshirt} />
            ))}
        </div>
    );
};

const App = () => {
    return (
        <div>
            <h1>T-Shirt Store</h1>
            <TShirtList />
        </div>
    );
};

// Render the App
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
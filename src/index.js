import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];


function App() {
    return (
        <div className='container'>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
};

function Header() {
    // const styling = { color: "red", fontSize: "40px", textTransform: "uppercase" }
    const styling = {}
    return (
        <header className='header'>
            <h1 style={styling}>First react pizza.in</h1>
        </header>
    );
};

function Menu() {
    const pizzas = pizzaData;
    // const pizzas = [];
    const numPizzas = pizzas.length;

    return (
        <main className='menu'>
            <h2>Our menu</h2>

            {numPizzas > 0 ? (
                <>
                    <p>
                        Athentic Italian cuisine, 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
                    </p>
                    <ul className='pizzas'>
                        {pizzas.map((pizza) =>
                            // <Pizza name={pizza.name} photoName={pizza.photoName}/>)}
                            <Pizza pizzaObj={pizza} key={pizza.name} />)}
                    </ul>
                </>
            ) : (<p>We're still working on our menu. Please come back later :)</p>
            )}

            {/* <Pizza name="Pizza Spinaci" ingredients="Tomato, mozarella, spinach, and ricotta cheese" photoName="pizzas/spinaci.jpg" price={10} />
             <Pizza name="Pizza Funghi" ingredients="Tomato, mushroom with cheez" photoName="pizzas/funghi.jpg" price={12} /> */}

        </main>
    );
};

function Pizza({ pizzaObj }) {
    // console.log(propsObj);
    // if (pizzaObj.soldOut) return null

    return (
        <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ""}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
            </div>
        </li>
    );
};

function Footer() {
    const hour = new Date().getHours();
    const openingHour = 12;
    const closingHour = 22;
    const isOpen = hour >= openingHour && hour <= closingHour;
    console.log(isOpen);

    // if (hour >= openingHour && hour <= closingHour) alert("We're currently open"); else alert("Sorry we're closed");

    //if (isOpen) not open
    // if (!isOpen) return <p>CLOSED.</p>
    //else ↓
    return (
        <footer className='footer'>{isOpen ? (
            <Order closingHour={closingHour} openingHour={openingHour} />
        ) : (
            <p>We're happy to welcome you between {openingHour}:00 and {closingHour}:00 </p>
        )}
        </footer >

        // React.createElement("footer", null, "Hello Homelander");
    );
};

function Order({ closingHour, openingHour }) {
    return (
        <div className='order'>
            <p>We're open from {openingHour}:00 to {closingHour}:00 . Come visit us order online.</p>
            <button className='btn'>Open</button>
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(<App />);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
import { pizzaData } from "../../public/data.js"
import Pizaa from "./Pizaa.jsx"

// pizzaData = [];
// const numPizzas = pizzaData.length
function Menu() {

    return (
        <>
            <main className='menu'>

                <h2>Our Menu</h2>
                <ul className='pizzas'>
                    {(
                        pizzaData.map((pizza, i) =>
                            <Pizaa pizza={pizza} key={i} />
                        ))
                    }
                </ul>
            </main>
        </>
    )
}



export default Menu
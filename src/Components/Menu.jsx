import { pizzaData } from "../../public/data.js"
import Pizaa from "./Pizaa.jsx"

const pizzaDatas = pizzaData;
const numPizzas =  0
function Menu() {

    return (
        <>
            <main className='menu'>

                <h2>Our Menu</h2>
                {
                    numPizzas > 0 ? (
                        <ul className='pizzas'>
                            {(
                                pizzaData.map((pizza, i) =>
                                    <Pizaa pizza={pizza} key={i} />
                                ))
                            }
                        </ul>
                    ) 
                    :
                    (
                        <p>Pizza is finished</p>
                    )
                }

            </main>
        </>
    )
}



export default Menu
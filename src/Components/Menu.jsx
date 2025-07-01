import { pizzaData } from "../../public/data.js"
import Button from "./Button.jsx";
import Pizaa from "./Pizaa.jsx"

const pizzaDatas = pizzaData;
const numPizzas =  pizzaDatas
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
                            <Button/>
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
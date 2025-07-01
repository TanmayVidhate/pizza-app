let Pizaa = ({pizza}) => {
    let { name, ingredients, price, photoName, soldOut } = pizza

    return (
        <>
            <li className='pizza'>
                <img src={photoName} alt={name} />
                <div>
                    <h3>{name}</h3>
                    <p>{ingredients}</p>
                    <span>{soldOut ? "Sold Out" : price}</span>
                </div>
            </li>
        </>
    )
}


export default Pizaa
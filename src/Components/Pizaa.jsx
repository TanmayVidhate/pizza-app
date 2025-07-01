let Pizaa = ({pizza :{ name, ingredients, price, photoName, soldOut }}) => {
    
    return (
        <>
            <li className={`pizza ${soldOut?"sold-out":""}`}>
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
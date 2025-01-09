function Card({data, clickHandler}){
    const capitalizedName = data.name.charAt(0).toUpperCase() + data.name.slice(1);

    return (
        <div onClick={clickHandler} className="card">
            <img src={data.sprites.front_default} alt={capitalizedName}></img>
            <p>{capitalizedName}</p>
        </div>
    )

}

export default Card;
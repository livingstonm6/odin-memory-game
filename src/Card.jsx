function Card({data}){
    console.log(data);
    return (
        <div className="card">
            <img src={data.sprites.front_default} alt={data.name}></img>
            <p>{data.name}</p>
        </div>
    )

}

export default Card;
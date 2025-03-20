export function Cards (props) {
    const {id , image , name , type} = props;
    return(
        <div className="card-container">
            <div className="card"> 
                <h2>{name}</h2>
                <p>{type}</p>
                <img src={image}/>
                <div className="container-button">
                    <button className="detail-button">Detalhes</button>
                    <button className="detail-button">Remover</button>
                </div>
            </div>
        </div>
    )
}
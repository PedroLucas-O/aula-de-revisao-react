export function Cards (props) {
    const {id , image , name , type, removeCharacters, changePage} = props;
    return(
        <div className="card-container">
            <div className="card"> 
                <h2>{name}</h2>
                <p>{type}</p>
                <img src={image} alt="" className="card-img"/>
                <div >
                    <button className="log-button" onClick={() => changePage ("detailsPage", id)}>Detalhes</button>
                    <button className="log-button" onClick={() => removeCharacters (id)}>Remover</button>
                </div>
            </div>
        </div>
    )
}
export function DetailPage (props) {
    
const {characters, id, changePage} = props
const [character] = characters.filter((char) => char.id===id)    

    return(
        <div className="app-general">
            <h2>{character?.name}</h2>
            <img src={character?.image} alt="" className="detail-page-img" />
            <p>{character?.type}</p>
            <p>{character?.details}</p>
            <button className="log-button" onClick={() => changePage("home")}>
                Voltar
            </button>
    </div>
    )
}
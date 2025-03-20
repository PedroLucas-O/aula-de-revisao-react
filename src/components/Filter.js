export function Filter (props) {
    return(
        <div className="search-container">
            <input className="search-input" type="text" onChange={props.handleName} value={props.filtroNome}/>
            <select onChange={props.handleOrdem} value={props.ordenacao}>
                <option value=''> Ordenar </option>
                <option value='cresc'> Crescente </option>
                <option value='desc'> Decrescente </option>
            </select>
        </div>
    )
}
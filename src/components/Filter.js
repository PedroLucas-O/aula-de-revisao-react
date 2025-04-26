export function Filter (props) {

    return(
        <div className="add-characters-container">
            <input 
            type="text" 
            onChange={props.handleName} value={props.filtroNome}
            placeholder="Busque Por Nome"
            />

            <select 
            onChange={props.handleOrdem} 
            value={props.ordenacao}
            className="filter-select"
            >

                <option value=''> Ordenar </option>
                <option value='cresc'> Crescente </option>
                <option value='desc'> Decrescente </option>
            </select>
        </div>
    )
}
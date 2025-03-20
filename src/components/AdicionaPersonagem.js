export function AdicionaPersonagem (props) {
    const {nome , tipo , imagem , handleNome , handleTipo , handleImagem , addPersonagem} = props;
    return(
        <div className="search-container">
            <aside className="form">
                <form action="">
                    <h2>AdicionarPersonagem</h2>
                    <label htmlFor="nome">name:</label>
                    <input
                    className="search-input"
                    id="nome"
                    type="text"
                    onChange={handleNome}
                    value={nome}
                    />
                    <label htmlFor="tipo">Type:</label>
                    <input
                    className="search-input"
                    id="tipo"
                    type="text"
                    onChange={handleTipo}
                    value={tipo}
                    />
                    <label htmlFor="imagem">Image:</label>
                    <input
                    className="search-input"
                    id="imagem"
                    type="text"
                    onChange={handleImagem}
                    value={imagem}
                    />
                    <button className="detail-button" onClick={addPersonagem}>Cadastrar</button>
                </form>
            </aside>
        </div>
    )
}
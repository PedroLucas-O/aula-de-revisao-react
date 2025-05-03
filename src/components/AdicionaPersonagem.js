export function AdicionaPersonagem(props) {
    const {
      nome,
      tipo,
      imagem,
      handleNome,
      handleTipo,
      handleImagem,
      addPersonagem,
      isFormValid,
    } = props;
    return (
      <div className="add-characters-container">
        <aside className="form">
          <form action="">
            <h1>Adicione Um Personagem:</h1>
            <label htmlFor="nome" className="name-character-container">
              <h3>Escreva o Nome do Personagem:</h3>
            </label>
            <input
              className="name-character-input"
              id="nome"
              type="text"
              onChange={handleNome}
              value={nome}
            />
            <label htmlFor="tipo" className="type-character-container">
              <h3>Escreva o Tipo do Personagem:</h3>
            </label>
            <input
              className="type-character-input"
              id="tipo"
              type="text"
              onChange={handleTipo}
              value={tipo}
            />
            <label htmlFor="imagem" className="type-character-container">
              <h3>Coloque a URL de uma Imagem do Personagem:</h3>
            </label>
            <input
              className="image-character-input"
              id="imagem"
              type="text"
              onChange={handleImagem}
              value={imagem}
            />
            <button
              className="log-button"
              onClick={addPersonagem}
            >
              <h2>Cadastre</h2>
            </button>
          </form>
        </aside>
      </div>
    );
  }
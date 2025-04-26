import { AdicionaPersonagem } from "../components/AdicionaPersonagem"
import { Cards } from "../components/Cards"
import { Filter } from "../components/Filter"

export function HomePage (props) {
    const {characters, removeCharacters} = props
    const {addPersonagem} = props
    const {ordenacao , filtroNome , nome , tipo , imagem} = props.states
    const {handleNome , handleImagem , handleTipo} = props.handles
    const {handleName , handleOrdem} = props
    const {changePage} = props
    const renderList = characters
    .filter(
        (person) => filtroNome === '' || person.name.toLowerCase().includes(filtroNome.toLowerCase())
      )
      
.sort((a,b)=> ordenacao === '' || (ordenacao === 'cres' && a.name > b.name)?1:-1)
.sort((a,b)=> ordenacao === '' || (ordenacao === 'desc' && a.name > b.name)?-1:1)

   .map((person) => {
    return(
        <Cards
        id={person.id}
        image={person.image}
        type={person.type}
        name={person.name} 
        removeCharacters={removeCharacters}
        changePage = {changePage}
        />
    )
   })
    return(
        <div>
            <AdicionaPersonagem
            nome = {nome}
            tipo = {tipo}
            imagem = {imagem}
            handleNome = {handleNome}
            handleTipo = {handleTipo}
            handleImagem = {handleImagem}
            addPersonagem = {addPersonagem}
            />

        <div className="app-filter-area">
          <Filter 
            filtroNome = {filtroNome} 
            handleName = {handleName} 
            ordenacao = {ordenacao} 
            handleOrdem = {handleOrdem}
          />
        </div>

            <div
            className="container-main"
            >{renderList}</div>
        </div>
    )
}
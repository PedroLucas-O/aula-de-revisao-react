import { AdicionaPersonagem } from "../components/AdicionaPersonagem"
import { Cards } from "../components/Cards"

export function HomePage (props) {
    const {characters} = props
    const {addPersonagem} = props
    const {ordenacao , filtroNome , nome , tipo , imagem} = props.states
    const {handleNome , handleImagem , handleTipo} = props.handles
   const renderList = characters
   .filter(
    (person) => filtroNome === '' || person.name.toLowerCase().includes(filtroNome)
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
            <main>{renderList}</main>
        </div>
    )
}
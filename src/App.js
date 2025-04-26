import './App.css';
// import { Filter } from './components/Filter';
import { useEffect, useState } from 'react';
import data from './data.json';
import { HomePage } from './pages/HomePage';
import { DetailPage } from './pages/DetailPage'

function App() {

  const [characters, setCharacters] = useState([]);
  
  const [filtroNome , setFiltroNome] = useState("");
  const [ordenacao ,  setOrdenacao] = useState("");

  const [nome , setNome] = useState("")
  const [tipo , setTipo] = useState("")
  const [imagem , setImagem] = useState("")
  const [page , setPage] = useState("home")
  const[id , setId] = useState(0)

  const handleName = (event) => {
    setFiltroNome (event.target.value)
  }

  const handleOrdem = (event) => {
    setOrdenacao (event.target.value)
  }

  const handleNome = (event) => setNome(event.target.value)
  const handleTipo = (event) => setTipo(event.target.value)
  const handleImagem = (event) => setImagem(event.target.value)

  useEffect(() => {
    setCharacters(data)
  } , [])

const addPersonagem = (event) => {
  event.preventDefault()
  const newPersonagem = {
    name:nome,
    type:tipo,
    image:imagem
  }

  const newPersonagemList = [...characters,newPersonagem]
  setCharacters(newPersonagemList)
  setNome('')
  setTipo('')
  setImagem('')
}

const removeCharacters = (id) => {
  const filterRemoveCharacters = characters.filter((personagens) => {
    return personagens.id !== id
  })
  setCharacters(filterRemoveCharacters)
}

const changePage = (page, id) => {
  setPage(page)
  setId(id)
}

const randerPage = () => {
  switch (page) {
    case"home":
    return(
      <div className="app-general">

        <div className="app-home-area">
          <HomePage
            characters={characters} 
            addPersonagem={addPersonagem} 
            states = {{ordenacao , filtroNome , nome , tipo , imagem}} 
            handles = {{handleNome , handleImagem , handleTipo}} 
            removeCharacters = {removeCharacters}
            changePage = {changePage}
            filtroNome = {filtroNome} 
            handleName = {handleName} 
            ordenacao = {ordenacao} 
            handleOrdem = {handleOrdem}
          />
        </div>

        {/* <div className="app-filter-area">
          <Filter 
            filtroNome = {filtroNome} 
            handleName = {handleName} 
            ordenacao = {ordenacao} 
            handleOrdem = {handleOrdem}
          />
        </div> */}
      </div>
    );
    case"detailsPage":
    return(
        <DetailPage
      characters={characters}
      id={id}
      changePage={changePage}
      />
      
    )
    default:
      alert("Algo deu Errado, Verifique ")
  }
}

  return (
    <>
      {randerPage()}
    </>
  );
}

export default App;

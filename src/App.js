import logo from './logo.svg';
import './App.css';
import { Filter } from './components/Filter';
import { AdicionaPersonagem } from './components/AdicionaPersonagem';
import { Cards } from './components/Cards';
import { useEffect, useState } from 'react';
import data from './data.json';
import { HomePage } from './pages/HomePage';

function App() {

  const [characters, setCharacters] = useState([]);
  
  const [filtroNome , setFiltroNome] = useState("");

  const [ordenacao ,  setOrdenacao] = useState("");

  const [nome , setNome] = useState("")
  const [tipo , setTipo] = useState("")
  const [imagem , setImagem] = useState("")

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
    nome ,
    tipo ,
    imagem
  }

  const newPersonagemList = [...characters,newPersonagem]
  setCharacters(newPersonagemList)
  setNome('')
  setTipo('')
  setImagem('')
}

  return (
    <div className="App">
      <Filter filtroNome = {filtroNome} handleName = {handleName} ordenacao = {ordenacao} handleOrdem = {handleOrdem}/>
      {/* <Cards characters={characters}/> */}
      <HomePage characters={characters} addPersonagem={addPersonagem} states = {{ordenacao , filtroNome , nome , tipo , imagem}} handles = {{handleNome , handleImagem , handleTipo}}/>
    </div>
  );
}

export default App;

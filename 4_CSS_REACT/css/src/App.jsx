import './App.css'
import MyComponent from './components/MyComponent'
import { useState } from 'react'
import Title from './components/Title';

function App() {
  const n = 15
  const [name] = useState("Guilherme");
  const redTitle = false;

  return (
    <>
      {/*CSS Global*/}
      <h1>React com CSS</h1>

      {/*CSS de componente*/}
      <MyComponent/>
      <p>Este parágrafo é do App.jsx</p>

      {/*Inline css*/}
      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline</p>
      <p style={{color: "magenta", padding: "25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline</p>
      <p style={{color: "red", padding: "25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline</p>

      {/*CSS Inline dinâmico*/}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>
        CSS Dinâmico
      </h2>

      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>
        CSS Dinâmico
      </h2>

      <h2 style={
        name === "Guilherme" ? 
        ({color: "green", backgroundColor: "black"}) 
        : null}>
        Teste Nome
      </h2>

      {/*Classe dinâmica*/}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>

      {/*CSS Modules*/}
      <Title/>
    </>
  )
}

export default App

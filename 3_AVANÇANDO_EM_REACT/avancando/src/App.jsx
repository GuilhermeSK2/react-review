import './App.css';

//Importando imagem fora de public
import City from "./assets/city.jpg";

//Importando componentes
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
//import { useState } from 'react';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  //const name = "Joaquim"
  //const [userName] = useState("Maria")

  /*const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0 },
    { id: 2, brand: "Toyota", color: "Branco", newCar: false, km: 12000 },
    { id: 3, brand: "Honda", color: "Vermelho", newCar: false, km: 45000 },
    { id: 4, brand: "Subaru", color: "Azul", newCar: false, km: 9000 },
  ]*/

  /*function showMessage(){
    console.log("Evento do componente pai!");
  }*/

  //const [message, setMessage] = useState("")

  /*const handleMessage = (msg) => {
    setMessage(msg)
  }*/

  const users = ([
    {id: 1, name: "Guilherme", job: "Programador", age: 20},
    {id: 2, name: "Maria", job: "Dentista", age: 22},
    {id: 3, name: "João", job: "Analista de sistemas", age: 17},
    {id: 4, name: "Giovana", job: "Analista de dados", age: 16},
    {id: 5, name: "Julia", job: "Avogada", age: 23}
])

  return (
    <>
      <h1>Avançando em React</h1>

      {/*Desafio*/}
      {users.map((user) => (
        <UserDetails 
        key={user.id} 
        name={user.name} 
        job={user.job} 
        age={user.age}/>
      ))}
    </>
  )
}

export default App

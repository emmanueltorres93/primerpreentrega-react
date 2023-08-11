import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer"

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="hola mundo!!" />
    </div>
  )
}

export default App

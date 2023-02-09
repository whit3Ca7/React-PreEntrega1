import './App.css'
import ItemListContainer from '../../ItemListContainer/ItemListContainer';
import NavBar from '../NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
     <> 
      <NavBar />
      <ItemListContainer saludo='itemContainer' />
     </>
  )
}

export default App


import './App.css'
import Ulist from './components/itemList'
import LogoNav from './components/navBar'
import Titulo from './components/Titulo'
import Formulario from './components/Formulario'
import 'bootstrap/dist/css/bootstrap.min.css' 
import CardW from './components/cards'
import BotonB from './components/ItemListContainer'
import FormS from './components/search'


function App() {
   
  const styleApp = { fontFamily: 'Arial'}
  const titulo = 'Titulo de la app'
  const subTitulo = 'Subtitulo de la app'
  
  const busqueda = () => {
    alert('Lo siento, no pudimos realizar su busqueda')
  }


  return (
      
    <div 
      className="App"
      style={styleApp}
    >
    
      <div style={{fontSize: 40, backgroundColor: 'black', color : 'white' , marginTop : 0, padding : 0}}>
        
        <LogoNav />
        <Ulist titulo ={ titulo }  subTitulo = {subTitulo}/>
        
      </div>

      <div>
        <CardW />
        <FormS />
        <BotonB />
        
      </div>

    </div>
  )
}

export default App
import './App.css'
import Header from './components/Header/Header'
import Logo from './assets/logo.svg'
import Perfil from './assets/foto-perfil.jpg'
import Principal from './components/Principal/Principal'

function App() {
  
  return (
    <>
      <div>
        <Header logo = {Logo}
         perfil = {Perfil}/>
      </div>
      <hr/>
      <div>
          <Principal/>
      </div>
    </>
  )
}

export default App

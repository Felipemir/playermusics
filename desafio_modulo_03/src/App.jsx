import './App.css'
import Header from './components/Header/Header'
import Logo from './assets/logo.svg'
import Perfil from './assets/foto-perfil.jpg'
import stop from './assets/stop.svg'
import previous from './assets/previous.svg'
import pause from './assets/pause.svg'
import next from  './assets/next.svg'
import play from './assets/play.svg'
import Principal from './components/Principal/Principal'
import Footer from './components/Footer/Footer'

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
      <div>
        <Footer 
        stop={stop}
        previous={previous}
        pause = {pause}
        next={next}  
        />
      </div>
    </>
  )
}

export default App

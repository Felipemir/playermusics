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
import { useState } from 'react'
import { musics } from './components/Principal/musics'


function App() {


  const [estaTocando, setEstaTocando] = useState(false);
  const [musicaAtual, setMusicaAtual] = useState(null);


  const handlePlayPause = () => {
    setEstaTocando(!estaTocando);
  }
  
  const handleSelectMusic = (music, play) => {
    setMusicaAtual(music);
    if(play) {
      setEstaTocando(true);
    }
    
  }

  const handleNext = () => {

    const indexAtual = musics.findIndex((music) => music === musicaAtual);

    setMusicaAtual(musics[(indexAtual + 1) % musics.length])
    console.log("proxima musica", indexAtual);
  };


  const handlePrevious = () => {

    const atualIndex = musics.findIndex((music) => music === musicaAtual);

    setMusicaAtual(musics[(atualIndex - 1 + musics.length) % musics.length]);

    console.log("musica annterior", atualIndex);
  };



  return (
    <>
      <div>
        <Header logo = {Logo} perfil = {Perfil}/>
      </div>
      <hr/>
      <div>
          <Principal onSelectMusic = {handleSelectMusic} estaTocando={estaTocando}/>
      </div>
      <div>
        <Footer 
        stop={stop}
        play={play}
        previous={previous}
        pause = {pause}
        next={next}  
        estaTocando = {estaTocando}
        onPlayPause = {handlePlayPause}
        onNext = {handleNext}
        onPrevious =  {handlePrevious}
        />
      </div>
    </>
  )
}

export default App

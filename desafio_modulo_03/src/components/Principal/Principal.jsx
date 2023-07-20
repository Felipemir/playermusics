import { useEffect, useRef, useState } from "react";
import styles from "./Principal.module.css";
import { musics } from "./musics";

function Principal({ onSelectMusic, estaTocando, }) {
  const [musicaAtual, setMusicaAtual] = useState();
  const audioRef = useRef()

  useEffect(() => {
    if (musicaAtual && audioRef.current) {
      if (estaTocando) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [estaTocando, musicaAtual]);

  const handleClick = (index) => {
    const musicaSelecionada = musics[index];
    setMusicaAtual(musicaSelecionada);
    onSelectMusic(musicaSelecionada, true);
  };
  

  return (
    <div>
      <main>
        <div className={styles.main_principal}>
          <p className={styles.best_list}>The best play list</p>
          <p className={styles.paragrafo_borda}></p>
          <ul className={styles.img}>
            {musics.map((music, index) => (
              <li key={music.id}>
                <img src={music.cover} alt="" onClick={() => handleClick(index)} />
                <h3>{music.title}.</h3>
                <p className={styles.p}>{music.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <audio ref={audioRef} src={musicaAtual ? musicaAtual.url : null} />
    </div>
  );
}

export default Principal;

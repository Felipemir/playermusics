import styles from "./Principal.module.css"
import { musics } from "./musics"

function Principal() {
  return (
    <div>
      <main>
        <div className={styles.main_principal} >
          <p className={styles.best_list}>The best play list</p>
          <p className={styles.paragrafo_borda}></p>
          <ul className={styles.img}>
            {musics.map((music) =>

              <li key={music.id}>
                <img src={music.cover} alt="" />
                <h3>{music.title}.</h3>
                <p className={styles.p}>{music.description}</p>
              </li>

            )}
          </ul>
        </div>
      </main>
    </div>
  )
}

export default Principal
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Feed from '../components/Feed'
import MenuNavBar from '../components/MenuNavBar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bleep News</title>
        <meta name="description" content="Cobertura de arte e ensaios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <MenuNavBar />
        {/* <nav>
          <a href="#">bleep</a>
          <a href="#">Newsletter</a>
          <a href="#">Playlists</a>
          <a href="#">Eventos</a>
          <a href="#">Listas</a>
          <a href="#">Contato</a>
        </nav> */}
      </header>
      <main className={styles.main}>
        <Feed />
      </main>
      <footer className={styles.footer}>
        &#169; Kayê Holanda - { new Date().getFullYear() }
      </footer>
    </div>
  )
}

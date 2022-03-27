import Head from 'next/head';
import MenuNavBar from '../components/MenuNavBar';

import styles from '../styles/Home.module.css'

export default function Layout({children}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Bleep News</title>
                <meta name="description" content="Cobertura de arte e ensaios" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                <MenuNavBar />
            </header>
            <main className={styles.main}>
                {children}
            </main>
            <footer className={styles.footer}>
                &#169; Kayê Holanda - { new Date().getFullYear() }
            </footer>
        </div>
    )
}
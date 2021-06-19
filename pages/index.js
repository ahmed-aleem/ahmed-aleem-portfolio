import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coming Soon!</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Ahmed Aleem welcomes you!
        </h1>

        <p className={styles.description}>
          This site is under construction!!
        </p>

        <h2>Coming soon! </h2>
      </main>
    </div>
  )
}

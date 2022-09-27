import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Laboratorio de aplicaciones web!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Bienvenidos!" />
        <p className="description">
          Esta es la página web estática hecha por el equipo:
          Mathew, Ulises, Paco y Joel. 
        </p>
      </main>

      <Footer />
    </div>
  )
}

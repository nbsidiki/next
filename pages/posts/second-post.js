import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'
export default function FirstPost() {
    return (
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <main>
          <h1 className='return'>Second Post</h1>
          <h2>
            <Link href="/">
              <a className="return">Back to home</a>
            </Link>
          </h2>
          <div className="grid">
          <p>
          D'un baccalaurérat sciences mathématiques(équivalent d'un baccalaurat S en France), actuellement je suis en première année Informatique à ENIGMA-SCHOOl,
          Je suis en recherche de stage pour l'été 2022 avec une durée minimuum de deux mois.
          Mon ojectif pour l'instant dans ma formation à enigma est de finir developeur web et mobile au terme de mes  cinq années de formations chez ENIGMA-SCHOOL.
          j'espère être aidé au mieux dans le processus de façonnement de mes experiences professionnelles par les entreprises dans lesquels j'aurai l'honneur de faire une quelconque intervention (stage ou alternance future).
          j'espère que ce petit texte vous aidera à mieux comprendre mon parcours et mes objectifs. 
          </p> 
          </div>  
          </main>
          <style jsx>{`

.return{
  color: grey;
}
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }
        p{
          font-family: keep-calm;
        }`}
        </style>
        </Layout>

    )
}
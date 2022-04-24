import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <main>
        <h1 className='return'>First Post</h1>
        <h2>
          <Link href="/">
            <a className="return">Back to home</a>
          </Link>
        </h2>

        <div className="cv">
        <div className="gauche">
            <div className="imageperso"><br></br>
                <Image src="/images/Capture d’écran 2022-03-19 153525.png" 
                 height={144} // Desired size with correct aspect ratio
                 width={144}
                alt="AboubacarPhoto"/>
            </div>
            <br></br><br></br><br></br>
            <div className="Rperso">
                <h3 className="titreR">COORDONNEES</h3>
                <p className="PersoC" >
                    Adresse: <br></br>
                    21 rue des vétérans <br></br><br></br>
                    Code Postal: 59650 <br></br>
                    Ville: Villeneuve d’Ascq <br></br><br></br>
                    Tel:  <a className="tel" href="tel:+33758536008">0758536008</a> <br></br><br></br>
                    Mail:  <a className="mail" href="mailto: sidikinabe10@gmail.com">sidikinabe10@gmail.com</a>
                    
                     <br></br><br></br>
                    LinkedIn :
                    <a className="Link" href="https://www.linkedin.com/in/aboubacar-sidiki-nabe-159575222/">LinkedInAboubacar</a>
                    </p> <br></br><br></br>
                <h3 className="titreR">COMPÉTENCES</h3>
                <p className="PersoC">
                    HTML, CSS (bases) <br></br>
                    Python(base) <br></br>
                    Java(base) <br></br>
                    C(base) <br></br>
                    Reseau (CCNA) <br></br>
                    Microsoft office; <br></br>
                    Niveau excellent en 
                    Mathématiques;

                </p><br></br><br></br>
                <h3 className="titreR">LANGUES</h3>
                <p className="PersoC">
                    Français: excellent <br></br>
                    Anglais: Niveau(A2)
    
                </p><br></br><br></br>
                <h3 className="titreR">INTÉRÊTS</h3>
                <p className="PersoC">
                    informatique <br></br>
                    sport <br></br>
                    Lecture <br></br>
                    Cinéma <br></br>
                    Jeux vidéo

                </p>
            </div>
        </div>
        <div className="droite">
            <div className="logo-enigma">
            <Image src="/images/Capture d’écran 2022-03-19 023625.png" alt="Logo"
            height={90} // Desired size with correct aspect ratio
            width={230}/>
            </div>
            <div className="nom">
                <h1>Aboubacar Sidiki NABE</h1>
                <p className="NT">Etudiant en informatique en recherche de stage(juillet-septembre)</p>
            </div>
            <div className="formexp">
                <div className="formations">
                    <h3 className="Tformexp">FORMATIONS</h3>
                    <p className = "contentF">2021-2022 ENIGMA – 1ème Année <br></br>
                        (Lille)
                    </p>
                    <p className="contentF">2020 – Baccalauréat S – option Sciences <br></br>
                        Mathématiques</p>

                </div>
                <h3 className="Tformexp">EXPERIENCES PROFESSIONNELLES</h3>
                <div className="expProfess">
                    
                    <div className="date">
                        18 au 31<br></br>
                        décembre <br></br>
                        2021 <br></br>
                        (Lille) <br></br><br></br><br></br>
                        17  <br></br>
                        Décembre <br></br>
                        2021 <br></br>
                        (Lille) <br></br><br></br>
                        15 au 24 <br></br>
                        Novembre <br></br>
                        2021 <br></br>
                        (Lille) <br></br>
                         
                        <br></br>
                        <br></br>
                         
                        25 au 29 <br></br>
                        octobre <br></br>
                        2021 <br></br>
                        (Lille) <br></br><br></br><br></br><br></br><br></br>
                        Septembre <br></br>
                        2017-juin <br></br>
                        2018 <br></br>
                        (Conakry)
                    </div>
                    <div className="content">
                        <h4 className="Tcontent1">ENIGMA-SCHOOL,</h4>
                        <p className="content1">Développeur C</p>
                        <p className="content2">Projet de C (le casse brique) : <br></br>
                            -création d’une interface graphique avec la SDL du jeu ; <br></br>
                            -un menu de démarrage et des niveaux de difficulté dans le <br></br>
                            jeu.
                        </p>
                        <h4 className="Tcontent2">ENIGMA-SCHOOL,</h4>
                        <p className="content1">Développeur Web</p>
                        <p className="content2">Projet WEB : <br></br>
                            -reproduire la page d’accueil de Wikipédia</p>
                            <h4 className="Tcontent2">ENIGMA-SCHOOL,</h4>
                            <p className="content1">Développeur Java</p>
                            <p className="content2">Projet de Java (le Zoo) : <br></br>
                                -création d’un Zoo ; <br></br>
                                -création des animaux ; <br></br>
                                -ajout des animaux dans le Zoo ; <br></br>
                                -nourrir les animaux ; <br></br>
                                - faire évoluer le Zoo ;
                            </p>
                            <h4 className="Tcontent2">ENIGMA-SCHOOL,</h4>
                            <p className="content1">Développeur Python</p>
                            <p className="content2">Missions ou tâches réalisées : <br></br>
                                Projet de python (le jeu de la vie) ; <br></br>
                                -création d’un monde à deux dimensions <br></br>
                                -création des cellules qui sont caractérisées par la vie et la <br></br>
                                mort ; <br></br>
                                - réussir à compter le nombre de cellules vivantes ; <br></br>
                                - faire évoluer le monde. 
                               
                            </p>
                            <h4 className="Tcontent2">Institution Sainte-Marie (Conakry-Guinée),</h4>
                            <p className="content1">Président des élèves ;</p>
                            <p className="content2">Missions ou tâches réalisées : <br></br> 
                                Superviser l'organisation d'évènements scolaires et <br></br>
                                représenter l'école au niveau national.
                            </p>
                    </div>

                </div>
            </div>

            <div className="basenigma">
            <Image src="/images/Capture d’écran 2022-03-20 112749.png" alt="bas de page enigma"
             height={90} // Desired size with correct aspect ratio
             width={730}/>
            </div>
        </div>
    </div>
      
      </main>
      <style jsx>{`
      main{
        background-color: rgba(0, 0, 0, 0);
        position: absolute;
        margin-top: 0;
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 0;
        width: 100%;
        height: 100%;
        padding-top: 0;
        padding-left: 0;
        padding-right: 0;
        padding-bottom: 0;
        display: flex;
        flex-direction: column;
        
      
    }
    .return{
        color: grey;
        position: relative;
        left: 52%;
        margin: 0;
        padding: 0;

    }
    
    .cv
    {
        
        width:800px;
        position: relative;
        transform: translate(0%, 0%);
        margin: 0 auto;
        display:grid;
        grid-template-columns: repeat(2, 1fr) ;
        padding: 0px 0px;
        grid-gap: 0px;
        justify-content: center;
        
        
    }
      .gauche
{
    background-color: rgba(255, 0, 0, 0.829);
    top: 5%;
    position: relative;
    width: 210px;
}
.droite
{
    top: 5%;
    position: relative;
    width: 600px;
    background-color: White;
    padding: 0px 0px;
    margin: 0px 0px;
    margin-left: 0px;
    margin-right: px;
    
    grid-template-columns: repeat(1, 1fr) 
}
.logo-enigma{
    position: relative;
    left: 35%;
    margin: 0;
    padding: 0;
}
h1{
    position: relative;
    left: 18%;
    font-size: 70px;
    font-family: Daunpenh;
    margin: 0;
    padding: 0;
}
.NT{
    position: relative;
    left: 12%;
    font-family: Century Gothic;
    margin: 0;
    padding: 0;
}
.nom{
    background-color:rgba(128, 128, 128, 0.603);
    padding: 0;
    margin: 0;
}
.PersoC{
    position: relative;
    padding-left: 20px;
    font-family: Century Gothic;
    font-size: 11px;
    color:white ;
}
.titreR{
    padding-left: 18px;
    color:white ;
    font-family: Century Gothic;
    font-size: 15px;
}
a{
    color: white;
}
.imageperso{
    position: relative;
    left: 10%;
}
.Tformexp{
    font-size: 15px;
    font-family: Century Gothic;
}
.contentF{
    font-family: Century Gothic;
    font-size: 13px;
}
.date{
    font-family: Century Gothic;
    font-size: 14px;
    color: rgb(94, 89, 89);
    width: 10;
}
.expProfess{
    display:grid;
    grid-template-columns: repeat(2, 1fr) ;

}
.content{
    padding: 0;
    margin: 0;
    position: relative;
    left: -57% ;
}
.Tcontent1{
    padding: 0;
    margin: 0;
    font-family: Century Gothic;
    font-size: 13.5px;
}
.content1{
    font-family: Century Gothic;
    font-size: 13px;
    color: rgb(114, 114, 114);
    padding: 0;
    margin: 0;
}
.content2
{
    font-family: Century Gothic;
    font-size: 10px;
    color: black ;
    padding: 0;
    margin: 0;

}
.Tcontent2{
    padding: 0;
    margin-bottom: 0;
    font-family: Century Gothic;
    font-size: 13.5px;
}
.basenigma{
    position: relative;
    top: 15px;
    left: 17px;
    margin-bottom: 15px;
}
.formexp{
    position: relative;
    margin-left: 40px;
}
`}</style>

    </Layout>


  )
}
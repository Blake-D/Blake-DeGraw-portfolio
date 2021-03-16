import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Blake DeGraw</title>
      </Head>
        <div className="nav-links">
          <Link href="/contact"><a className="link">contact</a></Link> {' | '}
          <Link href="/Blake_DeGraw_Resume.pdf" download><a target="_blank" className="link">resume</a></Link>
        </div>
        <p className="title-text">Blake DeGraw</p>
        <h3 id="blurb">software engineer | game developer | sound designer</h3>
        <div id="project-wrap">
          <div id="app-list">
            <h3>APPS</h3>
            <Link href="https://blake-d.github.io/web-oscillator/"><a target="_blank" className="link">Web Oscillator</a></Link><br></br>
            <Link href="https://rickipedia.herokuapp.com/"><a target="_blank" className="link">Rickipedia & Mortiverse</a></Link><br></br>
            <Link href="https://blake-d.github.io/ShowdownOnCygnus8/"><a target="_blank" className="link">Showdown on Cygnus 8</a></Link>
          </div>
          <div id="game-list">
            <h3>VIDEO GAMES</h3>
            <Link href="/bioplunge"><a className="link">BioPlunge: Demo</a></Link><br></br>
            <Link href="/prodrome"><a className="link">Prodrome</a></Link><br></br>
            <Link href="/escape"><a className="link">Escape from D-1471</a></Link>
          </div>
        </div>
        
        <div id="info-wrap">
          <div id="left">
            <h3>FRAMEWORKS</h3>
            <p>
              React<br></br>
              Express<br></br>
              Node<br></br>
              Next.js
            </p>
          </div>
          <div id="right">
            <h3>DATABASES</h3>
            <p>
              PostgreSQL<br></br>
              Sequelize<br></br>
              MongoDB<br></br>
              Mongoose
            </p>
          </div>
          <div id="center">
            <h3>LANGUAGES</h3>
            <p>
              JavaScript<br></br>
              Python<br></br>
              HTML<br></br>
              CSS<br></br>
              PHP<br></br>
              Blueprints<br></br>
              Max/MSP<br></br>
              SQL
            </p>
          </div>
        </div>
        <style jsx>
          {`
            .title-text{
              color: white;
              font-size: 15vw;
              text-align: center;
              marging-right: 2vw;
              margin-top: 2;
              margin-bottom: 0vw;
            }
            #project-wrap{
              text-align: center;
              padding-top: 3vh;
            }
            #app-list{
              margin-left: 23vw;
              float: left;
            }
            #info-wrap{
              text-align: center;
              padding-top: 4vw;
            }
            #left{
              margin-left: 20vw;
              float: left;
            }
            #right{
              margin-right: 20vw;
              float: right;
            }
            #center{
              margin: 0 auto !important;
              display: inline-block;
            }
            #blurb{
              text-align: center;
              margin-top: 0vw;
              margin-bottom: 1vh;
            }
          `}
        </style>
    </div>
  )
}

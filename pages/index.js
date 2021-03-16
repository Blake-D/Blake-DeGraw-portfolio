import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="page-container-home">
      <Head>
        <title>Home | Blake DeGraw</title>
      </Head>
        <div className="nav-links">
          <Link href="/contact"><a className="link">contact</a></Link> {' | '}
          <Link href="/contact"><a className="link">resume</a></Link>
        </div>
        <p className="title-text">Blake DeGraw</p>
        <h3 className="blurb">software engineer | game developer | sound designer</h3>
        <div className="project-wrap">
          <div className="app-list">
            <h3>APPS</h3>
            <Link href="https://blake-d.github.io/web-oscillator/"><a target="_blank" className="link">Web Oscillator</a></Link><br></br>
            <Link href="https://rickipedia.herokuapp.com/"><a target="_blank" className="link">Rickipedia & Mortiverse</a></Link><br></br>
            <Link href="https://blake-d.github.io/ShowdownOnCygnus8/"><a target="_blank" className="link">Showdown on Cygnus 8</a></Link>
          </div>
          <div className="game-list">
            <h3>UNREAL PROJECTS</h3>
            <Link href="/bioplunge"><a className="link">BioPlunge: Demo</a></Link><br></br>
            <Link href="/prodrome"><a className="link">Prodrome</a></Link><br></br>
            <Link href="/escape"><a className="link">Escape from D-1471</a></Link>
          </div>
        </div>
        <div className="info-wrap">
          <div className="left">
            <h3>FRAMEWORKS</h3>
            <p>
              React<br></br>
              Express<br></br>
              Node<br></br>
              Next.js
            </p>
          </div>
          <div className="right">
            <h3>DATABASES</h3>
            <p>
              PostgreSQL<br></br>
              Sequelize<br></br>
              MongoDB<br></br>
              Mongoose
            </p>
          </div>
          <div className="center">
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
            // .page-container-home {
            //   background-image: url("/mural.jpg");
            //   background-repeat: no-repeat;
            //   background-size: cover;
            // }
            .project-wrap{
              text-align: center;
              padding-top: 3vh;
            }
            .app-list{
              margin-left: 20vw;
              float: left;
            }
            .info-wrap{
              text-align: center;
              padding-top: 4vw;
            }
            .left{
              margin-left: 20vw;
              float: left;
              color: white;
            }
            .right{
              margin-right: 20vw;
              float: right;
              color: white;
            }
            .center{
              margin: 0 auto !important;
              display: inline-block;
              color: white;
            }
            // a{
            //   font-size: 2vw;
            //   color: white;
            // }
            .title-text{
              color: white;
              font-size: 15vw;
              text-align: center;
              marging-right: 2vw;
              margin-top: 2;
              margin-bottom: 0vw;
            }
            .blurb{
              text-align: center;
              margin-top: 0vw;
              margin-bottom: 4vw;
              color: white;
            }
            .nav-links{
              text-align: center;
            }
          `}
        </style>
    </div>
  )
}

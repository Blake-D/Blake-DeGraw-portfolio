import Link from 'next/link'
import Head from 'next/head'

export default function Games() {
    return (
      <div className="page-container-games">
        <Head>
          <title>Games | Blake DeGraw</title>
        </Head>
        <div className="nav-links">
          <Link href="/"><a className="link">home</a></Link> {' | '}
          <Link href="/webapps"><a className="link">apps</a></Link>{' | '}
          <Link href="/games"><a className="link">unreal projects</a></Link>{' | '}
          <Link href="/contact"><a className="link">contact me</a></Link>
        </div>
        <p className="title-text">My Unreal Projects</p>
        <div className="game-list">
          <Link href="/bioplunge"><a className="link">BioPlunge: Demo</a></Link><br></br>
          <Link href="/prodrome"><a className="link">Prodrome</a></Link><br></br>
          <Link href="/escape"><a className="link">Escape from D-1471</a></Link>
        </div>
        <style jsx>
          {`
            // .page-container-games {
            //   background-image: url("/unreal_dark.jpg");
            //   background-repeat: no-repeat;
            //   background-size: cover;
            //   background-position: center;
            //   height: 100vh;
            // }
           .game-list{
            margin-left: 2vw;
          }
          .title-text{
            color: white;
            font-size: 12vw;
            text-align: center;
            margin-top: 2;
            margin-bottom: 0;
          }
          .nav-links{
            text-align: center;
          }
          a{
            font-size: 3vw;
            color: white;
          }
          .description{
            text-align: justify;
            margin-left: 2vw;
            margin-right: 2vw;
          }
          `}
        </style>
      </div>
    )
  }
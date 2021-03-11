import Link from 'next/link'
import Head from 'next/head'

export default function Games() {
    return (
      <div>
        <Head>
          <title>Games | Blake DeGraw</title>
        </Head>
        <div className="nav-links">
          <Link href="/"><a>home | </a></Link>
          <Link href="/webapps"><a>apps | </a></Link>
          <Link href="/games"><a>unreal projects | </a></Link>
          <Link href="/contact"><a>contact me</a></Link>
        </div>
        <p className="title-text">unreal projects</p>
        <div className="game-list">
            <Link href="/escape"><a>Escape from D-1471</a></Link><br></br>
            <Link href="/prodrome"><a>Prodrome</a></Link><br></br>
            <Link href="/bioplunge"><a>BioPlunge: Demo</a></Link>
        </div>
        <style jsx>
          {`
           .game-list{
            margin-left: 1vw;
          }
          .title-text{
            color: white;
            font-size: 20vw;
            text-align: left;
            margin-top: 2;
            margin-bottom: 0;
          }
          .nav-links{
            text-align: center;
          }
          a{
            font-size: 2vw;
            color: white;
          }
          `}
        </style>
      </div>
    )
  }
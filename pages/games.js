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
        <h1>unreal projects</h1>
        <p>
          Video game development was my introduction to coding. My artistic background is primarily in music composition, and at a certain juncture in my music career, I wanted to break into scoring video games. But without any portfolio in that field, I set out to make my own demo reel by making a couple of short games in the Unreal Engine so I could set music to them. My original intent was to try to get away with learning the least amount of code possible in the process. But in the end, the coding was what I wound up falling in love with. Certain coding challenges that seemed simple on the surface wound up keeping me up for nights on end. It was exactly the kind of kick to the brain that I needed at that point in life, and my passion for designing and building games has continued to grow ever since.
          <br></br><br></br>
          

        </p>
        <div className="game-list">
          <Link href="/bioplunge"><a className="link">BioPlunge: Demo</a></Link><br></br>
          <Link href="/prodrome"><a className="link">Prodrome</a></Link><br></br>
          <Link href="/escape"><a className="link">Escape from D-1471</a></Link>
        </div>
        <style jsx>
          {`
            .page-container-games {
              background-image: url("/unreal.jpg");
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center;
              height: 100vh;
            }
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
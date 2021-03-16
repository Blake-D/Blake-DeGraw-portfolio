import Link from 'next/link'
import Head from 'next/head'

export default function WebApps() {
    return (
      <div className="page-container-apps">
        <Head>
          <title>Apps | Blake DeGraw</title>
        </Head>
        <div className="nav-links">
          <Link href="/"><a className="link">home</a></Link> {' | '}
          <Link href="/webapps"><a className="link">apps</a></Link>{' | '}
          <Link href="/games"><a className="link">unreal projects</a></Link>{' | '}
          <Link href="/contact"><a className="link">contact me</a></Link>
        </div>
        <p className="title-text">My Apps</p>
        <div className="app-list">
            <Link href="https://blake-d.github.io/web-oscillator/"><a target="_blank" className="link">Web Oscillator</a></Link><br></br>
            <Link href="https://rickipedia.herokuapp.com/"><a target="_blank" className="link">Rickipedia & Mortiverse</a></Link><br></br>
            <Link href="https://blake-d.github.io/ShowdownOnCygnus8/"><a target="_blank" className="link">Showdown on Cygnus 8</a></Link>
        </div>
        <style jsx>
          {`
            .page-container-apps {
              background-image: url("/mural.jpg");
              background-repeat: no-repeat;
              background-size: cover;
              height: 100vh;
            }
            .app-list{
              margin-top: 5vw;
              margin-left: 5vw;
            }
            .link{
              font-size: 20px;
            }
            .title-text{
              color: white;
              font-size: 20vw;
              text-align: left;
              margin-top: 2;
              margin-bottom: 0;
            }
            a{
              font-size: 2vw;
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
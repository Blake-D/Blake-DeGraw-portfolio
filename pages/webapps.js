import Link from 'next/link'
import Head from 'next/head'

export default function WebApps() {
    return (
      <div>
        <Head>
          <title>Apps | Blake DeGraw</title>
        </Head>
        <div className="nav-links">
          <Link href="/"><a>home | </a></Link>
          <Link href="/webapps"><a>apps | </a></Link>
          <Link href="/games"><a>unreal projects | </a></Link>
          <Link href="/contact"><a>contact me</a></Link>
        </div>
        <p className="title-text">my apps</p>
        <div className="app-list">
            <Link href="/rickipedia"><a>Rickipedia & Mortiverse</a></Link><br></br>
            <Link href="/cygnus"><a>Showdown on Cygnus 8</a></Link><br></br>
            <Link href="/fleet"><a>Star Wars: Fleet Attack</a></Link>
        </div>
        <style jsx>
          {`
            .app-list{
              margin-left: 1vw;
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
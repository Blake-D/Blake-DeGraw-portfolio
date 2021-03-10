import Link from 'next/link'
import Head from 'next/head'

export default function WebApps() {
    return (
      <div>
        <Head>
          <title>Blake DeGraw's Portfolio</title>
        </Head>
        <>
            <Link href="/"><a>home</a></Link>{' | '}
            <Link href="/about"><a>about</a></Link>{' | '}
            <Link href="/webapps"><a>web apps</a></Link>{' | '}
            <Link href="/games"><a>unreal projects</a></Link>{' | '}
            <Link href="/contact"><a>contact me</a></Link>
        </>
        <h1>Here are some of my applications</h1>
        <ul>
            <li><Link href="/rickipedia"><a>Rickipedia & Mortiverse</a></Link></li>
            <li><Link href="/cygnus"><a>Showdown on Cygnus 8</a></Link></li>
            <li><Link href="/fleet"><a>Star Wars: Fleet Attack</a></Link></li>
        </ul>
      </div>
    )
  }
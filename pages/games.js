import Link from 'next/link'
import Head from 'next/head'

export default function Games() {
    return (
      <div>
        <Head>
          <title>Games | Blake DeGraw</title>
        </Head>
        <>
            <Link href="/"><a>home</a></Link>{' | '}
            <Link href="/about"><a>about</a></Link>{' | '}
            <Link href="/webapps"><a>web apps</a></Link>{' | '}
            <Link href="/games"><a>unreal projects</a></Link>{' | '}
            <Link href="/contact"><a>contact me</a></Link>
        </>
        <h1>My Video Games</h1>
        <ul>
            <li><Link href="/escape"><a>Escape from D-1471</a></Link></li>
            <li><Link href="/prodrome"><a>Prodrome</a></Link></li>
            <li><Link href="/bioplunge"><a>BioPlunge: Demo</a></Link></li>
        </ul>
      </div>
    )
  }
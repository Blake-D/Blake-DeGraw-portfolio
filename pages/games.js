import Link from 'next/link'

export default function Games() {
    return (
      <div>
        <>
            <Link href="/"><a>home</a></Link>{' | '}
            <Link href="/about"><a>about me</a></Link>{' | '}
            <Link href="/webapps"><a>my apps</a></Link>{' | '}
            <Link href="/games"><a>my unreal games</a></Link>{' | '}
            <Link href="/contact"><a>contact me</a></Link>
        </>
        <h1>My Video Games</h1>
        <ul>
            <li><Link href="/escape"><a>Escape from D-1471</a></Link></li>
            <li><Link href="/prodrome"><a>Prodrome</a></Link></li>
            <li><Link href="/bioplunge"><a>BioPlunge: Update</a></Link></li>
        </ul>
      </div>
    )
  }
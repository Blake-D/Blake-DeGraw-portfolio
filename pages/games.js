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
            <li>Escape from D-1471</li>
            <li>Prodrome</li>
            <li>BioPlunge: Update</li>
        </ul>
      </div>
    )
  }
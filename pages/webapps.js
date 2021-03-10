import Link from 'next/link'

export default function WebApps() {
    return (
      <div>
        <>
            <Link href="/"><a>home</a></Link>{' | '}
            <Link href="/about"><a>about me</a></Link>{' | '}
            <Link href="/webapps"><a>my apps</a></Link>{' | '}
            <Link href="/games"><a>my unreal games</a></Link>{' | '}
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
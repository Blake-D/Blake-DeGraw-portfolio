import Link from 'next/link'

export default function Contact() {
    return (
      <div>
        <>
            <Link href="/"><a>home</a></Link>{' | '}
            <Link href="/about"><a>about me</a></Link>{' | '}
            <Link href="/webapps"><a>my apps</a></Link>{' | '}
            <Link href="/games"><a>my unreal games</a></Link>{' | '}
            <Link href="/contact"><a>contact me</a></Link>
        </>
        <h1>contact me</h1>
      </div>
    )
  }
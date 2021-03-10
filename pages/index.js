import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Blake DeGraw's Portfolio</title>
      </Head>
      <>
        <Link href="/"><a>home</a></Link>{' | '}
        <Link href="/about"><a>about me</a></Link>{' | '}
        <Link href="/webapps"><a>my apps</a></Link>{' | '}
        <Link href="/games"><a>my unreal games</a></Link>{' | '}
        <Link href="/contact"><a>contact me</a></Link>
      </>
      <h1>Welcome to my portfolio site!</h1>
      <h4>
        Have fun perusing my various projects, and please reach out to me if you have any questions.<br/>
        (The only thing I enjoy more than creating is geeking out over my projects.)
      </h4>
    </div>
  )
}

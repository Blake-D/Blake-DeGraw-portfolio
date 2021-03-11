import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="page-container-home">
      <p className="title-text">Blake DeGraw</p>
      <Head>
        <title>Home | Blake DeGraw</title>
      </Head>
        <>
          <Link href="/"><a>home</a></Link>{' | '}
          <Link href="/about"><a>about</a></Link>{' | '}
          <Link href="/webapps"><a>web apps</a></Link>{' | '}
          <Link href="/games"><a>unreal projects</a></Link>{' | '}
          <Link href="/contact"><a>contact me</a></Link>
        </>
        {/* <p className="title-text">Blake DeGraw</p> */}
        <h4>
          Have fun perusing my various projects, and please reach out to me if you have any questions.<br/>
          (The only thing I enjoy more than creating is geeking out over my projects.)
        </h4>
    </div>
  )
}

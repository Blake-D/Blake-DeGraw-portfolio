import Head from 'next/head'
import Link from 'next/link'
import About from './about'
import styles from '../styles/Home.module.css'

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
      <h1>Home page</h1>
    </div>
  )
}

import Link from 'next/link'
import Head from 'next/head'

export default function About() {
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
        <h1>A jack of all trades.</h1>
        <p>
            I am a full-stack web developer with skills in Javascript, CSS, HTML, Python, React, Flask, Express.js, Node.js, Next.js, PostgreSQL, and MongoDB. I also have a passion for making video games using the Unreal Engine 4, and will be releasing several independently-developed games over the next couple of years on various platforms.
            <br></br>
            <br></br>
            In addition to my pursuits in web and game development, I am also an accomplished audio engineer, sound designer, composer, and music producer. I am the director of a Seattle-based chamber orchestra that experiments with technological methods of conduction.
        </p>
      </div>
    )
  }
import Link from 'next/link'
import Head from 'next/head'

export default function Contact() {
    return (
      <div>
        <Head>
          <title>Contact | Blake DeGraw</title>
        </Head>
        <div className="nav-links">
          <Link href="/"><a className="link">home</a></Link> {' | '}
          <Link href="/webapps"><a className="link">apps</a></Link>{' | '}
          <Link href="/games"><a className="link">unreal projects</a></Link>{' | '}
          <Link href="/contact"><a className="link">contact me</a></Link>
        </div>
        <p className="title-text">contact me</p>
        <style jsx>
          {`
          .title-text{
            color: white;
            font-size: 20vw;
            text-align: left;
            margin-top: 2;
            margin-bottom: 0;
          }
          .nav-links{
            text-align: center;
          }
          a{
            font-size: 2vw;
            color: white;
          }
          `}
        </style>
      </div>
    )
  }
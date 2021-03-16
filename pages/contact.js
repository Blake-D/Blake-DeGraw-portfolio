import Link from 'next/link'
import Head from 'next/head'

export default function Contact() {
    return (
      <div className="page-container-contact">
        <Head>
          <title>Contact | Blake DeGraw</title>
        </Head>
        <div className="nav-links">
          <Link href="/"><a className="link">home</a></Link> {' | '}
          <Link href="/contact"><a className="link">resume</a></Link>
        </div>
        <p className="title-text">Contact Me</p>
        <div className="contact-links">
          <Link href="https://www.linkedin.com/in/blake-degraw/"><a target="_blank" className="link">LinkedIn</a></Link><br></br>
          <Link href="https://github.com/Blake-D"><a target="_blank" className="link">GitHub</a></Link><br></br>
        </div>
        <p>(or send me a good ol' fashioned email at: bbdegraw@gmail.com)</p>
        
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
          .contact-links{
            text-align: center;
            font-size:3vw;
          }
          p{
            text-align: center;
          }
          `}
        </style>
      </div>
    )
  }
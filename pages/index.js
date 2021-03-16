import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="page-container-home">
      <Head>
        <title>Home | Blake DeGraw</title>
      </Head>
        <div className="nav-links">
          <Link href="/"><a className="link">home</a></Link> {' | '}
          <Link href="/webapps"><a className="link">apps</a></Link>{' | '}
          <Link href="/games"><a className="link">unreal projects</a></Link>{' | '}
          <Link href="/contact"><a className="link">contact me</a></Link>
        </div>
        <p className="title-text">Blake DeGraw</p>
        <h3 className="blurb">software engineer | game developer | sound designer</h3>
        <div className="wrap">
          <div className="left">
            <h3>FRAMEWORKS</h3>
            <p>
              React<br></br>
              Express<br></br>
              Node<br></br>
              Next.js
            </p>
          </div>
          <div className="right">
            <h3>DATABASES</h3>
            <p>
              PostgreSQL<br></br>
              Sequelize<br></br>
              MongoDB<br></br>
              Mongoose
            </p>
          </div>
          <div className="center">
            <h3>LANGUAGES</h3>
            <p>
              JavaScript<br></br>
              Python<br></br>
              HTML<br></br>
              CSS<br></br>
              PHP<br></br>
              Blueprints<br></br>
              Max/MSP<br></br>
              SQL
            </p>
          </div>
        </div>
        <style jsx>
          {`
            .page-container-home {
              background-image: url("/mural.jpg");
              background-repeat: no-repeat;
              background-size: cover;
            }
            .wrap{
              text-align: center;
              padding-top: 8vw;
            }
            .left{
              margin-left: 20vw;
              float: left;
              color: white;
            }
            .right{
              margin-right: 20vw;
              float: right;
              color: white;
            }
            .center{
              margin: 0 auto !important;
              display: inline-block;
              color: white;
            }
            a{
              font-size: 2vw;
              color: white;
            }
            .title-text{
              color: white;
              font-size: 20vw;
              text-align: left;
              margin-top: 2;
              margin-bottom: 0;
            }
            .blurb{
              margin-left: 1vw;
              color: white;
            }
            .nav-links{
              text-align: center;
            }
          `}
        </style>
    </div>
  )
}

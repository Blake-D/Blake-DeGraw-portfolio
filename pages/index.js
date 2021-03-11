import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="page-container-home">
      <Head>
        <title>Home | Blake DeGraw</title>
      </Head>
        <div className="nav-links">
          <Link href="/"><a>home | </a></Link>
          <Link href="/about"><a>about | </a></Link>
          <Link href="/webapps"><a>web apps | </a></Link>
          <Link href="/games"><a>unreal projects | </a></Link>
          <Link href="/contact"><a>contact me</a></Link>
        </div>
        <p className="title-text">Blake DeGraw</p>
        <div className="wrap">
          <div className="left">
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
            <h3>FRAMEWORKS</h3>
            <p>
              React<br></br>
              Express<br></br>
              Node<br></br>
              Next.js
            </p>
          </div>
        </div>
        <style jsx>
          {`
            .wrap{
              text-align: center;
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
            }
            a{
              font-size: 2vw;
              color: white;
            }
            .title-text{
              color: white;
              font-size: 20vw;
              text-align: left;
              margin-top: 10;
            }
            .nav-links{
              text-align: right;
            }
          `}
        </style>
    </div>
  )
}

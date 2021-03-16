import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function FleetAttack() {
    return (
        <div>
            <Head>
                <title>Apps | Blake DeGraw</title>
            </Head>
            <div className="nav-links">
                <Link href="/"><a className="link">home</a></Link> {' | '}
                <Link href="/webapps"><a className="link">apps</a></Link>{' | '}
                <Link href="/games"><a className="link">unreal projects</a></Link>{' | '}
                <Link href="/contact"><a className="link">contact me</a></Link>
            </div>
            <h1>Web Oscillator</h1>
            <Link href="https://blake-d.github.io/web-oscillator/"><a target="_blank" className="link">launch app</a></Link><br></br>
            <Link href="https://github.com/Blake-D/web-oscillator"><a target="_blank" className="link">visit the GitHub repo</a></Link>
            <p>
                <b>Star Wars: Fleet Attack</b> is a browser game coded in Express.js. The user assembles a fleet of five ships to pit against an imperial fleet in battle.
                <br></br><br></br>
                <em>Fleet Attack</em> was a student project I coded while at General Assembly. The project's requirements were to create a full-stack app that made an API call and passed the fetched data through various routes. I wanted to do something with the API data rather than simply rendering it in lists in a watered-down social media app, so I instead used the data to populate vehicle stats in a browser game. 
            </p>
            <style jsx>
            {`
                h1, p{
                    color: white;
                }
                a{
                    font-size: 2vw;
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
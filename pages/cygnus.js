import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function cygnus() {
    return (
        <div>
            <Head>
                <title>Apps | Blake DeGraw</title>
            </Head>
            <div className="nav-links">
                <Link href="/"><a className="link">home</a></Link> {' | '}
                <Link href="/contact"><a className="link">contact</a></Link> {' | '}
                <Link href="/Blake_DeGraw_Resume.pdf" download><a target="_blank" className="link">resume</a></Link>
            </div>
            <p className="title-text">Showdown on Cygnus 8</p>
            <p className="description">
                <b>Web Oscillator</b> is an online synthesizer written in Javascript, CSS, and HTML, using <b>Web Audio API</b>'s oscillator node. Clicking on the grid produces a drone that changes pitch with the cursor's location. The user can select the waveform type (sine, square, triangle, or sawtooth) and can apply harmonies to the drone as well. There is also a 2D mode in which two drones are produced, one of which changes with the cursor's X-axis movement, the other with Y-axis movement, allowing the user to produce a wide variety of harmonies.
                <br></br>
                <Link href="https://blake-d.github.io/web-oscillator/"><a target="_blank" className="link"><h2>Launch Web Oscillator</h2></a></Link>
                <Link href="https://github.com/Blake-D/web-oscillator"><a target="_blank" className="link"><h2>Visit the GitHub Repo</h2></a></Link>
            </p>
            <div className="image-container">
                <Image src="/oscillator_screenshot.png" width={400} height={250}/>
            </div>
            <style jsx>
            {`
                .title-text{
                    color: white;
                    font-size: 12vw;
                    text-align: center;
                    margin-top: 2;
                    margin-bottom: 0;
                }
            `}
            </style>
        </div>
    )
}
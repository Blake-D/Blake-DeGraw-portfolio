import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function Escape() {
    return (
        <div className="page-container-escape">
            <Head>
                <title>Games | Blake DeGraw</title>
            </Head>
            <div className="nav-links">
                <Link href="/"><a className="link">home</a></Link> {' | '}
                <Link href="/webapps"><a className="link">apps</a></Link>{' | '}
                <Link href="/games"><a className="link">unreal projects</a></Link>{' | '}
                <Link href="/contact"><a className="link">contact me</a></Link>
            </div>
            <h1>Escape from D-1471</h1>
            <Image src="/escape_screenshot_1.png" width={175} height={100}/>{' '}
            <Image src="/escape_screenshot_2.png" width={175} height={100}/>{' '}
            <Image src="/escape_screenshot_3.png" width={175} height={100}/>
            <p>
                <b>Escape from D-1471</b> is a short first-person shooter/platformer in which the player attempts to escape from a futuristic floating prison fortress. The prison is located in the upper atmosphere of a gas planet, and the player must escape to a gas-mining facility in orbit several miles below the prison. Because the planet's gravitational pull is significantly weaker than earth's, the prisoner attempts this escape by freefalling. 
                <br></br><br></br>
                In order to reoritent themselves along the way, the player must land on a series of solar platforms situated throughout the atmosphere. These platforms are comparatively small, and identifying them during freefall is designed to be immensely challenging. To make matters worse, sentry droids await the player on some of these platforms and attempt to blast you off the platform the second you land. Through trial and error, the player must figure out ways to defend themselves and/or fight back.
                <br></br><br></br>
                <em>Escape</em> is the first playable game I ever successfully coded, and, in fact, is the project that ultimately pushed me into a formal study of programming logic. Primarily a personal learning exercise, I single-handedly took on almost every aspect of the game myself, including (but not limited to): level design, sound desing, character animations, cutscene animations, and 3D modeling. I even did all the voice acting!
                <br></br><br></br>
                While Escape from D-1471 is still undergoing cosmetic changes, it is currently in testable Beta. If you would like to take it for a test run, please contact me!
            </p>
            <style jsx>
            {`
                 .page-container-escape {
                    background-image: url("/unreal_logo.png");
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                    height: 100vh;
                }
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
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function Escape() {
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
            </p>
        </div>
    )
}
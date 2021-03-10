import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function Cygnus() {
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
            <h1>Showdown on Cygnus 8</h1>
            <Image src="/cygnus_1.png" width={175} height={100}/>{' '}
            <Image src="/cygnus_2.png" width={175} height={100}/><br></br>
            <Link href="https://blake-d.github.io/ShowdownOnCygnus8/"><a target="_blank">Click here to launch app</a></Link><br></br>
            <Link href="https://github.com/Blake-D/ShowdownOnCygnus8"><a target="_blank">Click here to visit the Github repo</a></Link>
            <p>
                <b>Showdown on Cygnus 8</b> is a single-page browser game I coded as a project while at General Assembly. My primary goals for the project were to better understand setting and stopping time intervals, using event listeners to detect mouse cursor location, and using random number generators to determine certain aspects of the game logic.
                <br></br><br></br>
                After a brief introductory cutscene, the user is challenged to a series of 'quickdraw' matches, first against a single opponent, then against two, then three. In each match the, user must 'holster' their weapon by keeping the mouse cursor in the bottom-right corner of the screen while they await a countdown, after which they must hover the cursor over the opponent(s) and click on them before they shoot you. If the user removes the cursor from the designated area before the countdown ends, the countdown stops and awaits 'reholstering', then starts again from the top.
                <br></br><br></br>
                The enemy combatants all fire on you at preset intervals, but not every shot is a hit. Hits are determined by random generators; each time they fire, javascript rolls a conceptual set of dice in the background to determine whether the shot was successful or not.
            </p>
        </div>
    )
}
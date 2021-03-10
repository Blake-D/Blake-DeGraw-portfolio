import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function Prodrome() {
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
            <h1>Prodrome</h1>
            <Image src="/prodrome_screenshot_1.jpg" width={250} height={100}/>{' '}
            <Image src="/prodrome_screenshot_3.jpg" width={250} height={100}/>{' '}
            <Image src="/prodrome_screenshot_2.jpg" width={250} height={100}/>
            <p>
                <b>Prodrome</b> is a first-person horror/puzzle game currently in the final stages of development. The player plays as a nurse in a small mountain town where a mysterious portal has appeared and trapped the townspeople in a time loop. Once a person enters the portal, they are transported back to the place and time at which they first laid eyes on the portal. Once they have gone through the portal, they slowly begin to deteriorate and can only be restored by going back through the portal, thus becoming trapped.
                <br></br><br></br>
                The player is tasked with cracking the portal's mysteries so they can return home to their wife without deteriorating in the process. Due to the portal's effects (which manisfest through gradual blurring of vision and slowness of movement), the player can only venture so far away from the portal before crossing a threshold at which they will never be able to return to it, and will thus wither away and die. 
            </p>
        </div>
    )
}
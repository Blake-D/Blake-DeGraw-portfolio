import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function Prodrome() {
    return (
        <div>
            <Head>
                <title>Games | Blake DeGraw</title>
            </Head>
            <div className="nav-links">
                <Link href="/"><a className="link">home</a></Link> {' | '}
                <Link href="/contact"><a className="link">contact</a></Link> {' | '}
                <Link href="/Blake_DeGraw_Resume.pdf" download><a target="_blank" className="link">resume</a></Link>
            </div>
            <p className="title-text">Prodrome</p>
            <div className="image-container">
                <Image src="/prodrome_screenshot_1.jpg" width={250} height={100}/>{' '}
                <Image src="/prodrome_screenshot_3.jpg" width={250} height={100}/>{' '}
                <Image src="/prodrome_screenshot_2.jpg" width={250} height={100}/>
            </div>
            <p className="description">
                <b>Prodrome</b> is a first-person horror/puzzle game I am developing with <b>Unreal Engine 4</b>, currently in the final stages of development. The player plays as a nurse in a small mountain town where a mysterious portal has appeared and trapped the townspeople in a time loop. Once a person enters the portal, they are transported back to the place and time at which they first laid eyes on the portal. Once they have gone through the portal, they slowly begin to deteriorate and can only be restored by going back through the portal, thus becoming trapped.
                <br></br><br></br>
                The player is tasked with cracking the portal's mysteries so they can return home to their wife without deteriorating in the process. Due to the portal's effects (which manisfest through gradual blurring of vision and slowness of movement), the player can only venture so far away from the portal before crossing a threshold at which they will never be able to return to it, and will thus wither away and die. So time management is key!
            </p>
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
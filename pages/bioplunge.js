import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function BioPlunge() {
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
            <p className="title-text">BioPlunge: Demo</p>
            <div className="image-container">
                <Image src="/bioplunge_screenshot_1.jpg" width={200} height={110}/>{' '}
                <Image src="/bioplunge_screenshot_3.jpg" width={200} height={110}/>{' '}
                <Image src="/bioplunge_screenshot_2.jpg" width={200} height={110}/>
            </div>
            <p className="description">
                <b>BioPlunge: Demo</b> is a passion project I have been developing for well over a year now using <b>Unreal Engine 4</b>. It is the first installment in a trilogy (to be followed by <b>BioPlunge: Update</b> and <b>BioPlunge: Director's Cut</b>, respectively), though it can also hold up as a standalone game. 
                <br></br><br></br>
                A game within a game, it takes place inside a fictional game called <em>BioPlunge</em>, which is a substandard first-person shooter about a cybernetically-augmented sleeper assassin living out a cover identity in suburbia.
                <br></br><br></br>
                The main character of BioPlunge: Demo (not to be confused with the main character of <em>BioPlunge</em>...I know, it's confusing!) is a non-player character (NPC) in BioPlunge who begins to suspect that he is just an NPC in a video game, noticing that there is no way to escape from his neighborhood, at least not by foot. So he concocts plan to hijack an escape vehicle, and hilarity ensues!
                <br></br><br></br>
                A primary gameplay feature of BioPlunge: Demo is the player's interaction with the main character. As the character is aware that he is in a video game, he deduces throughout the course of the game that someone must be controlling him, and he begins obstinantly defying the player through various acts of free will, which sometimes result in his doing the <em>opposite</em> of what the player commands! Should the player attempt to correct this behavior through reverse psychology, the character catches on and begins randomizing his responses to player inputs.
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
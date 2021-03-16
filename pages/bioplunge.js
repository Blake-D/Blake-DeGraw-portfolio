import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function BioPlunge() {
    return (
        <div className="page-container-bioplunge">
            <Head>
                <title>Games | Blake DeGraw</title>
            </Head>
            <div className="nav-links">
                <Link href="/"><a className="link">home</a></Link> {' | '}
                <Link href="/webapps"><a className="link">apps</a></Link>{' | '}
                <Link href="/games"><a className="link">unreal projects</a></Link>{' | '}
                <Link href="/contact"><a className="link">contact me</a></Link>
            </div>
            <h1>BioPlunge: Demo</h1>
            <Image src="/bioplunge_screenshot_1.jpg" width={175} height={100}/>{' '}
            <Image src="/bioplunge_screenshot_3.jpg" width={175} height={100}/>{' '}
            <Image src="/bioplunge_screenshot_2.jpg" width={175} height={100}/>

            <p>
                <b>BioPlunge: Demo</b> is a passion project I have been working on for well over a year now. It is the first installment in a trilogy (to be proceeded up by <b>BioPlunge: Update</b> and <b>BioPlunge: Director's Cut</b>, respectively), though it can also hold up as a standalone game. 
                <br></br><br></br>
                It is a game within a game, taking place in a fictional game called <em>BioPlunge</em>, which is a substandard sci-fi first-person shooter about a cybernetically augmented sleeper assassin who is living out a cover identity in suburbia.
                <br></br><br></br>
                The main character of BioPlunge: Demo (not to be confused with the main character of BioPlunge...I know, it's confusing!) is a non-player character (NPC) in BioPlunge who is starting to suspect that he is just an NPC in a video game and begins to notice that there is actually no way to escape from his neighborhood, at least by fot. So he concocts plan to hijack an escape vehicle, and hilarity ensues!
                <br></br><br></br>
                A primary gameplay feature of BioPlunge: Demo is the player's interaction with the main character. As the character is aware that he is in a video game, he deduces throughout the course of the game that someone must also be controlling him, and he begins to obstinantly defy the player through various acts of free will, which sometimes result in his doing the <em>opposite</em> of what the player commands! Should the player attempt to correct this behavior through reverse psychology, the character catches on and begins randomizing his responses to player inputs.
                <br></br><br></br>
                The game features occasional instances of multiple-choice scenarios, either in the form of dialogue prompts or action options. It is through these scenarios that the game "learns" the player's behavior and informs the character's decisions to disobey the player, based on whether they display a tendency to select the sensible or non-sensible options.
            </p>
            <style jsx>
            {`
                .page-container-bioplunge {
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
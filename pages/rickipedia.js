import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function rickipedia() {
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
            <p className="title-text">Rickipedia & Mortiverse</p>
            <p className="description">
                <b>Rickipedia & Mortiverse</b> is a full-stack web application where users can browse character, episode, and location information from the tv show <b>Rick & Morty</b>. Users can also create user accounts which enables them to post and discuss theories about the show.<br></br><br></br>
                I worked on Rickipedia & Mortiverse as part of a group project while studying at <b>General Assembly</b>. We built the front end in <b>React</b> and the back end in <b>Express</b>, which calls on a <b>MongoDB</b> database. My particular role in the project was building and seeding the database, making sure the front and back ends talked to each other, and rendering data from API calls to their respective routes.
                <br></br>
                <Link href="https://rickipedia.herokuapp.com/"><a target="_blank" className="link"><h2>Visit Rickipedia & Mortiverse</h2></a></Link>
                <Link href="https://github.com/Patbenmi/Rickipedia"><a target="_blank" className="link"><h2>Visit the GitHub Repo</h2></a></Link>
            </p>
            <div className="image-container">
                <Image src="/rickipedia_home.png" width={200} height={110}/>{' '}
                <Image src="/rickipedia_characters.png" width={200} height={110}/>{' '}
                <Image src="/rickipedia_episodes.png" width={200} height={110}/>{' '}
                <Image src="/rickipedia_locations.png" width={200} height={110}/>
            </div>
            <style jsx>
            {`
                .title-text{
                    color: white;
                    font-size: 9vw;
                    text-align: center;
                    margin-top: 2;
                    margin-bottom: 0;
                }
            `}
            </style>
        </div>
    )
}
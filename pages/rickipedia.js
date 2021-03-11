import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function Rickipedia() {
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
            <h1>Rickipedia & Mortiverse</h1>
            <Image src="/rickipedia_1.png" width={175} height={100}/>{' '}
            <Image src="/rickipedia_2.png" width={175} height={100}/>{' '}
            <Image src="/rickipedia_3.png" width={175} height={100}/>{' '}
            <Image src="/rickipedia_4.png" width={175} height={100}/><br></br>
            <Link href="https://rickipedia.herokuapp.com/"><a target="_blank" className="link">launch app</a></Link><br></br>
            <Link href="https://github.com/Patbenmi/Rickipedia"><a target="_blank" className="link">visit the GitHub repo</a></Link>
            <p>
                <b>Rickipedia & Mortiverse</b> is a full-stack web application that I developed as part of a team while studying at General Assembly. It fetches data from a MongoDB collection (seeded with data fetched from a Rick & Morty API) and renders episode, character, and location data to their respective wiki pages. Users can also create accounts, which allows them to publish theories about the show and comment on each other's theories.
                <br></br><br></br>
                The back end was developed in Express.js which calls on MongoDB collections for user data. The front end was developed in React.
                <br></br><br></br>
                As part of a four-person team that developed the site, my primary role was seeding the MongoDB collections, fethcing it on the front end, then mapping and rendering the data to the appropriate routes. I also had hand in formatting the database and defining relational associations between collections.
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
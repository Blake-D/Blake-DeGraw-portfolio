import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function Rickipedia() {
    return (
        <div>
            <Head>
                <title>Apps | Blake DeGraw</title>
            </Head>
            <>
                <Link href="/"><a>home</a></Link>{' | '}
                <Link href="/about"><a>about</a></Link>{' | '}
                <Link href="/webapps"><a>web apps</a></Link>{' | '}
                <Link href="/games"><a>unreal projects</a></Link>{' | '}
                <Link href="/contact"><a>contact me</a></Link>
            </>
            <h1>Rickipedia & Mortiverse</h1>
            <Image src="/rickipedia_1.png" width={175} height={100}/>{' '}
            <Image src="/rickipedia_2.png" width={175} height={100}/>{' '}
            <Image src="/rickipedia_3.png" width={175} height={100}/>{' '}
            <Image src="/rickipedia_4.png" width={175} height={100}/><br></br>
            <Link href="https://rickipedia.herokuapp.com/"><a target="_blank">Click here to launch app</a></Link><br></br>
            <Link href="https://github.com/Patbenmi/Rickipedia"><a target="_blank">Click here to visit the Github repo</a></Link>
            <p>
                <b>Rickipedia & Mortiverse</b> is a full-stack web application that I developed as part of a team while studying at General Assembly. It fetches data from a MongoDB collection (seeded with data fetched from a Rick & Morty API) and renders episode, character, and location data to their respective wiki pages. Users can also create accounts, which allows them to publish theories about the show and comment on each other's theories.
                <br></br><br></br>
                The back end was developed in Express.js which calls on MongoDB collections for user data. The front end was developed in React.
                <br></br><br></br>
                As part of a four-person team that developed the site, my primary role was seeding the MongoDB collections, fethcing it on the front end, then mapping and rendering the data to the appropriate routes. I also had hand in formatting the database and defining relational associations between collections.
            </p>
        </div>
    )
}
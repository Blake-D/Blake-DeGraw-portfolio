import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function Rickipedia() {
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
            <h1>Rickipedia & Mortiverse</h1>
            <Image src="/rickipedia_1.png" width={175} height={100}/>{' '}
            <Image src="/rickipedia_2.png" width={175} height={100}/>{' '}
            <Image src="/rickipedia_3.png" width={175} height={100}/>{' '}
            <Image src="/rickipedia_4.png" width={175} height={100}/><br></br>
            <Link href="https://rickipedia.herokuapp.com/"><a target="_blank">Click here to launch app</a></Link><br></br>
            <Link href="https://github.com/Patbenmi/Rickipedia"><a target="_blank">Click here to visit the Github repo</a></Link>
        </div>
    )
}
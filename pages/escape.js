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
        </div>
    )
}
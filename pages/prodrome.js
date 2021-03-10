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
            <Image src="/prodrome_screenshot_1.jpg" width={175} height={100}/>{' '}
            <Image src="/prodrome_screenshot_3.jpg" width={175} height={100}/>{' '}
            <Image src="/prodrome_screenshot_2.jpg" width={175} height={100}/>
            <p>
                <b>Prodrome</b> is a first-person horror/puzzle game currently in the final stages of development. The player plays as a nurse in a small mountain town where a mysterious portal has appeared and trapped the townspeople in a time loop.
            </p>
        </div>
    )
}
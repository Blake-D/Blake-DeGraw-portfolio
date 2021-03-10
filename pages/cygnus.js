import Link from 'next/link'
import Image from 'next/image'

export default function Cygnus() {
    return (
        <div>
            <>
                <Link href="/"><a>home</a></Link>{' | '}
                <Link href="/about"><a>about me</a></Link>{' | '}
                <Link href="/webapps"><a>my apps</a></Link>{' | '}
                <Link href="/games"><a>my unreal games</a></Link>{' | '}
                <Link href="/contact"><a>contact me</a></Link>
            </>
            <h1>Showdown on Cygnus 8</h1>
            <Image src="/cygnus_1.png" width={175} height={100}/>{' '}
            <Image src="/cygnus_2.png" width={175} height={100}/><br></br>
            <Link href="https://blake-d.github.io/ShowdownOnCygnus8/"><a target="_blank">Click here to launch app</a></Link><br></br>
            <Link href="https://github.com/Blake-D/ShowdownOnCygnus8"><a target="_blank">Click here to visit the Github repo</a></Link>
        </div>
    )
}
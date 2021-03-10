import Link from 'next/link'
import Image from 'next/image'

export default function Rickipedia() {
    return (
        <div>
            <>
                <Link href="/"><a>home</a></Link>{' | '}
                <Link href="/about"><a>about me</a></Link>{' | '}
                <Link href="/webapps"><a>my apps</a></Link>{' | '}
                <Link href="/games"><a>my unreal games</a></Link>{' | '}
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
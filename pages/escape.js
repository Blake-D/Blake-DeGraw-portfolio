import Link from 'next/link'
import Image from 'next/image'

export default function Escape() {
    return (
        <div>
            <>
                <Link href="/"><a>home</a></Link>{' | '}
                <Link href="/about"><a>about me</a></Link>{' | '}
                <Link href="/webapps"><a>my apps</a></Link>{' | '}
                <Link href="/games"><a>my unreal games</a></Link>{' | '}
                <Link href="/contact"><a>contact me</a></Link>
            </>
            <h1>Escape from D-1471</h1>
            <Image src="/escape_screenshot_1.png" width={175} height={100}/>{' '}
            <Image src="/escape_screenshot_2.png" width={175} height={100}/>{' '}
            <Image src="/escape_screenshot_3.png" width={175} height={100}/>
        </div>
    )
}
import Link from 'next/link'
import Image from 'next/image'

export default function BioPlunge() {
    return (
        <div>
            <>
                <Link href="/"><a>home</a></Link>{' | '}
                <Link href="/about"><a>about me</a></Link>{' | '}
                <Link href="/webapps"><a>my apps</a></Link>{' | '}
                <Link href="/games"><a>my unreal games</a></Link>{' | '}
                <Link href="/contact"><a>contact me</a></Link>
            </>
            <h1>BioPlunge: Update</h1>
            <Image src="/bioplunge_screenshot_1.jpg" width={175} height={100}/>{' '}
            <Image src="/bioplunge_screenshot_3.jpg" width={175} height={100}/>{' '}
            <Image src="/bioplunge_screenshot_2.jpg" width={175} height={100}/>
        </div>
    )
}
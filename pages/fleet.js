import Link from 'next/link'
import Image from 'next/image'

export default function FleetAttack() {
    return (
        <div>
            <>
                <Link href="/"><a>home</a></Link>{' | '}
                <Link href="/about"><a>about me</a></Link>{' | '}
                <Link href="/webapps"><a>my apps</a></Link>{' | '}
                <Link href="/games"><a>my unreal games</a></Link>{' | '}
                <Link href="/contact"><a>contact me</a></Link>
            </>
            <h1>Star Wars: Fleet Attack</h1>
            <Image src="/fleet_1.png" width={175} height={100}/><br></br>
            <Link href="https://round2-deployment.herokuapp.com/"><a target="_blank">Click here to launch app</a></Link><br></br>
            <Link href="https://github.com/Blake-D/Fleet-Attack"><a target="_blank">Click here to visit the Github repo</a></Link>
        </div>
    )
}
import styles from "@/styles/Navbar.module.css"
import Image from 'next/image'
import Link from "next/link"

const Navbar = () => {
    return (
        <div className={styles.bar}>
            <div className={styles.navbar}>
                <div className={styles.links}>
                    <Image
                        src="/sci.png"
                        width={95}
                        height={36}
                    />
                </div>
                <div className={styles.links}>
                    <Link href="/" className={styles.home}> Home </Link>
                    <Link href="/schedule" className={styles.schedule}> Schedule </Link>
                </div> 
        </div>
        </div>
    )
}


export default Navbar;
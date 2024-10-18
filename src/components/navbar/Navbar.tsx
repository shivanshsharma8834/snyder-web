import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import Themetoggle from "../themetoggle/Themetoggle";
import Authlinks from "../authlinks/Authlinks";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Image src="/facebook.png" alt="facebook" width={24} height={24}></Image>
                <Image src="/instagram.png" alt="instgram" width={24} height={24}></Image>
                <Image src="/tiktok.png" alt="tiktok" width={24} height={24}></Image>
                <Image src="/youtube.png" alt="youtube" width={24} height={24}></Image>
            </div>
            <div className={styles.logo}>Titmouse</div>
            <div className={styles.links}>
                <Themetoggle/>  
                <Link href="/" className={styles.link}>Homepage</Link>
                <Link href="/" className={styles.link}>Contact</Link>
                <Link href="/" className={styles.link}>About</Link>
                <Authlinks/>
            </div>
        </div>
    )
}


export default Navbar;

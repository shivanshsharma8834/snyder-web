import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill/>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <div className={styles.date}>11.11.2011</div>
                    <div className={styles.category}>Category</div>
                </div>  
            </div>
            <Link href="/">
            <h1> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, quae!</h1>
            </Link>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora minus saepe consequuntur, necessitatibus cum repellat corporis labore ullam eius omnis corrupti numquam, deserunt quibusdam sit mollitia consectetur odio adipisci veniam.</p>
            <Link href="/">Read more</Link>
        </div>
    )
}


export default Card;
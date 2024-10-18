import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>Hey, mouse here!</b> Discover my stories and creative ideas
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
                </div>
                <div className={styles.postContainer}>
                    <h1 className={styles.postTitle}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. architecto </h1>
                    <p className={styles.postDesc}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti fugit ipsa vero optio officiis accusantium, at quisquam. Eveniet, quo reiciendis.</p>
                    <button className={styles.button}>Read more</button>
                </div>
            </div>
        </div>
    )
}


export default Featured;

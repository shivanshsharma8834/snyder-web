
import styles from "./authlinks.module.css";
import Link from "next/link";
const Authlinks = () => {



    // temp
    const status = "notauthenticated"


    return (
        <>
        {status === "notauthenticated" ? 
            <Link href="/login"> Login</Link>
         : 
            <>
            <Link href="/write">Write</Link>
            <span className={styles.link}>Logout</span>
            </>
            
        }
        </>
        
    ) 
        
    
}


export default Authlinks;

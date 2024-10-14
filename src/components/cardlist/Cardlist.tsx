import Pagination from "../pagination/Pagination";
import styles from "./cardlist.module.css";

const Cardlist = () => {
    return (
        <div className={styles.container}>
            <Pagination/>
        </div>
    )
}


export default Cardlist;

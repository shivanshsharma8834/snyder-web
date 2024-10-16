"use client";

import { useContext } from "react";
import styles from "./themetoggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";


const Themetoggle = () => {

    const {theme, toggle} = useContext(ThemeContext);

    console.log(theme)


    return (
        <div className={styles.container} onClick={toggle} 
            style={
                theme === "dark"
                ? { background: "white"}
                : { background: "#0f127a"}
            }>
            <Image src="/moon.png" width={20} height={20}/>
            <div className={styles.ball} style={
                theme === "dark"
                ? {left: "1px", background: "#0f127a"}
                : {right: "1px", background: "white"}
                }></div>
            <Image src="/sun.png" width={20} height={20}/>

        </div>
    )
}


export default Themetoggle;

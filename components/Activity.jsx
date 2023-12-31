import Image from "next/image";
import styles from "@/styles/Schedule.module.css"
import { useState} from "react";

const Activity = ({ name, description, course, speaker},starttime) => {

    const [isActive,setIsActive] = useState(false);

    return (
        isActive ? (
            <>
                <div className={styles.card}>
                <div className={styles.descricao}>
                    <p> {course} </p>
                    <button> Inscrever </button>
                    <button className={styles.button} onClick={() => setIsActive(!isActive)}> X </button>
                </div>
                <h1 className={styles.nomeactiv}> {name} </h1>
                <p className={styles.descricao}> {description} </p>
                <div className={styles.speaker}>
                    <p className={styles.descricao}> {speaker} </p>
                </div>
                </div>
            
            </>
        ) : (
            <div onClick={() => setIsActive(!isActive)} className={styles.mincard}>
                <div className={styles.mincardtext}>
                    <h1 className={styles.minnomeactiv}> {name} </h1>
                    <p className={styles.mindescricao}> {description} </p>
                </div>
            </div>
            )
    )
}

export default Activity;
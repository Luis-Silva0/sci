import styles from '@/styles/Schedule.module.css';
import Head from "next/head";
import Activity from '@/components/Activity';
const activities = [{"name": "Sessão",
                    "description": "Olá",
                    "course": "LCC",
                    "speaker": "Eusexdrcftvybhunjibyghbsdfavijnerjdfvhdjfsf",
                    "day":18,
                    "starttime":930},
                    {"name": "Ses",
                    "description": "Oá",
                    "course": "LMCC",
                    "speaker": "Eu",
                    "day":18,
                    "starttime":930},
                    {"name": "Ses3",
                    "description": "Oá3",
                    "course": "LMCC3",
                    "speaker": "Eu3",
                    "day":18,
                    "starttime": 900},
                    {"name": "Ses7",
                    "description": "Oá3",
                    "course": "LMCC3",
                    "speaker": "Eu3",
                    "day":18,
                    "starttime": 1000},
                    {"name": "Ses4",
                    "description": "Oá3",
                    "course": "LMCC3",
                    "speaker": "Eu3",
                    "day":19,
                    "starttime": 900},
                    {"name": "Ses5",
                    "description": "Oá3",
                    "course": "LMCC3",
                    "speaker": "Eu3",
                    "day":19,
                    "starttime": 930},
                    {"name": "Ses6",
                    "description": "Oá3",
                    "course": "LMCC3",
                    "speaker": "Eu3",
                    "day":20,
                    "starttime": 900}
                ]

const ScheduleNormal = () => { 
    activities.sort(function(a,b){return a.starttime - b.starttime});
    let htime = 0, mtime = 0;
    let time = 0;
    let c = 0;
    return (
            <main className={styles.schedulepage}>
                <div className={styles.schedulebox}>
                    <Head> 
                        <title> Schedule </title> 
                    </Head>
                    <div className={styles.topbar}>
                        <div className={styles.titlebar}>
                        <span className={styles.title}> 
                            SCHEDULE 
                        </span>
                        </div>
                    </div>
                    <div className = {styles.topday}>
                        <h style={{position: "fixed",margin:"-5px 0px 0px calc(max(-11.82%,-129.02px) + 10px)",color: "#FFF", fontFamily: "Rubik Mono One", fontSize: "20px", fontStyle: "normal", fontWeight: "400", lineHeight: "normal", letterSpacing: "-1px"}}>Dia 18</h>
                        <h style={{position: "fixed",margin:"15px 0px 0px calc(max(-11.82%,-129.02px) + 10px)",color: "#FFF", fontFamily: "Poppins", fontSize: "13px", fontStyle: "normal", fontWeight: "300", lineHeight: "normal" }}>Forest Day</h>
                        <svg width="100%" height="3" viewBox="0 0 1000 3" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M0.428589 0.721527C421.804 0.721527 658.053 0.721527 1079.43 0.721527" stroke="white" stroke-width="0.5"/>
                        </svg>
                        <div className={styles.test}>
                            {activities.map((activities,index) => {
                                if (time != activities.starttime) {c = 1; time = activities.starttime} else {c = 2};
                                htime = time/100;
                                mtime = time % 100;
                                if (mtime === 0) {mtime = "00"} else {htime = htime - mtime/100}
                                if (activities[index+1] === null) {time = 0};
                                    return (
                                        (activities.day === 18) ? (
                                            (c === 1) ? (
                                            <>
                                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.26196 3.9557C7.26196 5.87472 5.7432 7.41139 3.89291 7.41139C2.04262 7.41139 0.523865 5.87472 0.523865 3.9557C0.523865 2.03667 2.04262 0.5 3.89291 0.5C5.7432 0.5 7.26196 2.03667 7.26196 3.9557Z" fill="white" stroke="white"/>
                                                </svg>
                                                <div style= {{height: "17px",display:"flex", margin: "13px -50px 0px -67px", backgroundColor: "#0583D1", borderRadius: "12px", padding: "0px 2px",width: "44px",justifyContent: "center",alignItems: "center", flexShrink: "0",boxShadow: "0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 112, 243, 0.40)", fontFamily: "Poppins", fontSize: "11px", fontStyle: "normal", fontWeight: "300", lineHeight: "16px"  }}>
                                                    {htime}:{mtime}
                                                </div>
                                                <Activity {...activities} key={index}/>
                                            </>
                                            ) : (
                                                <>
                                                    <Activity {...activities} key={index}/>
                                                </>)
                                        ) : (<></>) 
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className = {styles.bottomday}>
                        <h style={{position: "fixed",margin:"-5px 0px 0px calc(max(-11.82%,-129.02px) + 10px)",color: "#FFF", fontFamily: "Rubik Mono One", fontSize: "20px", fontStyle: "normal", fontWeight: "400", lineHeight: "normal", letterSpacing: "-1px"}}>Dia 19</h>
                        <h style={{position: "fixed",margin:"15px 0px 0px calc(max(-11.82%,-129.02px) + 10px)",color: "#FFF", fontFamily: "Poppins", fontSize: "13px", fontStyle: "normal", fontWeight: "300", lineHeight: "normal" }}>Ocean Day</h>
                        <svg width="100%" height="3" viewBox="0 0 1000 3" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M0.428589 0.721527C421.804 0.721527 658.053 0.721527 1079.43 0.721527" stroke="white" stroke-width="0.5"/>
                        </svg>
                        <div className={styles.test}>
                            {activities.map((activities,index) => {
                                if (activities.day === 19 && time != activities.starttime) {c = 1; time = activities.starttime} else {c = 2};
                                htime = time/100;
                                mtime = time % 100;
                                if (mtime === 0) {mtime = "00"} else {htime = htime - mtime/100}
                                console.log(c);
                                    return (
                                        (activities.day === 19) ? (
                                            (c === 1) ? (
                                            <>
                                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.26196 3.9557C7.26196 5.87472 5.7432 7.41139 3.89291 7.41139C2.04262 7.41139 0.523865 5.87472 0.523865 3.9557C0.523865 2.03667 2.04262 0.5 3.89291 0.5C5.7432 0.5 7.26196 2.03667 7.26196 3.9557Z" fill="white" stroke="white"/>
                                                </svg>
                                                <div style= {{height: "17px",display:"flex", margin: "13px -50px 0px -67px", backgroundColor: "#0583D1", borderRadius: "12px", padding: "0px 2px",width: "44px",justifyContent: "center",alignItems: "center", flexShrink: "0",boxShadow: "0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 112, 243, 0.40)", fontFamily: "Poppins", fontSize: "11px", fontStyle: "normal", fontWeight: "300", lineHeight: "16px"  }}>
                                                    {htime}:{mtime}
                                                </div>
                                                <Activity {...activities} key={index}/>
                                            </>
                                            ) : (
                                                <>
                                                    <Activity {...activities} key={index}/>
                                                </>)
                                        ) : (<></>) 
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className = {styles.bottomday2}>
                        <h style={{position: "fixed",margin:"-5px 0px 0px calc(max(-11.82%,-129.02px) + 10px)",color: "#FFF", fontFamily: "Rubik Mono One", fontSize: "20px", fontStyle: "normal", fontWeight: "400", lineHeight: "normal", letterSpacing: "-1px"}}>Dia 20</h>
                        <h style={{position: "fixed",margin:"15px 0px 0px calc(max(-11.82%,-129.02px) + 10px)",color: "#FFF", fontFamily: "Poppins", fontSize: "13px", fontStyle: "normal", fontWeight: "300", lineHeight: "normal" }}>Desert Day</h>
                        <svg width="100%" height="3" viewBox="0 0 1000 3" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                            <path d="M0.428589 0.721527C421.804 0.721527 658.053 0.721527 1079.43 0.721527" stroke="white" stroke-width="0.5"/>
                        </svg>
                        <div className={styles.test}>
                            {activities.map((activities,index) => {
                                if (activities.day === 20 && time != activities.starttime) {c = 1; time = activities.starttime} else {c = 2};
                                htime = time/100;
                                mtime = time % 100;
                                if (mtime === 0) {mtime = "00"} else {htime = htime - mtime/100}
                                    return (
                                        (activities.day === 20) ? (
                                            (c === 1) ? (
                                            <>
                                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.26196 3.9557C7.26196 5.87472 5.7432 7.41139 3.89291 7.41139C2.04262 7.41139 0.523865 5.87472 0.523865 3.9557C0.523865 2.03667 2.04262 0.5 3.89291 0.5C5.7432 0.5 7.26196 2.03667 7.26196 3.9557Z" fill="white" stroke="white"/>
                                                </svg>
                                                <div style= {{height: "17px",display:"flex", margin: "13px -50px 0px -67px", backgroundColor: "#0583D1", borderRadius: "12px", padding: "0px 2px",width: "44px",justifyContent: "center",alignItems: "center", flexShrink: "0",boxShadow: "0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 112, 243, 0.40)", fontFamily: "Poppins", fontSize: "11px", fontStyle: "normal", fontWeight: "300", lineHeight: "16px"  }}>
                                                    {htime}:{mtime}
                                                </div>
                                                <Activity {...activities} key={index}/>
                                            </>
                                            ) : (
                                                <>
                                                    <Activity {...activities} key={index}/>
                                                </>)
                                        ) : (<></>) 
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </main>
    )
}

export default ScheduleNormal
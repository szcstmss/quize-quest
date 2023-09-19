import React, { useState, useEffect } from "react";
import Card from "../ui/Card";
import style from "./Records.module.css";
import { auth, db } from "../../config/firebase";
import { getDocs, collection, query, where, orderBy } from "firebase/firestore";

const Records = () => {
    const [userRecords, setUserRecords] = useState([]);

    const colRef = collection(db, "records");

    useEffect(() => {
        //READ THE DATA
        const q = query(colRef, where("user", "==", auth.currentUser.uid), orderBy("date", "desc"))
        getDocs(q).then(snapshot => {
            let records = [];
            snapshot.forEach(doc => {
                records.push({ ...doc.data(), id: doc.id });
            })
            setUserRecords(records)
        }).catch(err => { console.error(err) });
    }, [userRecords]);

    

    return (
        <div className={style.records}>
            <h2>Eredmények</h2>
            {userRecords.map((record) => {
                return <div className={style.recordItem} key={record.id}>
                    <h3>{record.score}</h3>
                    <h5>/{record.maxScore}</h5>
                    <h6>{new Date(record.date.seconds * 1000).toLocaleDateString()}</h6>
                    <h4>{Math.floor(record.score/record.maxScore*100)}%</h4>
                </div>
            })}
        </div>
    )
}

export default Records;
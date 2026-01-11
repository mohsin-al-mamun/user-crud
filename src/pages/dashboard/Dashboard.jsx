import React from "react";
import styles from "./Dashboard.module.css";
import Card from "../../components/user-card";

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        Meet Our <span>Responsible</span> Users
      </div>
      <div className={styles.card_container}>
        <Card name="Mohsin Al- Mamun" designation="Software Developer" id="1" />
        <Card name="Mohsin Al- Mamun" designation="Software Developer" id="2" />
        <Card name="Mohsin Al- Mamun" designation="Software Developer" id="3" />
        {/* <Card name="Mohsin Al- Mamun" designation="Software Developer" />
        <Card name="Mohsin Al- Mamun" designation="Software Developer" /> */}
      </div>

      <div className={styles.pagination}></div>
    </div>
  );
}

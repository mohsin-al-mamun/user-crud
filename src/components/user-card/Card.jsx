import React from "react";
import styles from "./Card.module.css";
import { PencilLine, Trash2 } from "lucide-react";
import { Link } from "react-router";

export default function Card({ name, designation, id }) {
  return (
    <div className={styles.container}>
      <div className={styles.image_div}>
        <div className={styles.image_wrapper}>
          <img
            // src="src/assets/images/alexandre-boucey-CDxeDdf9WB4-unsplash.jpg"
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1443&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Cat1"
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content_div}>
        <div className={styles.info_intro}>
          <div className={styles.name}>{name}</div>
          <div className={styles.designation}>{designation}</div>
        </div>

        <div className={styles.info_details}>
          <div className={styles.edit_icon}>
            <PencilLine size={20} />
          </div>
          <div className={styles.details_btn}>
            <Link to={`/user/${id}`}> View Details </Link>
          </div>
          <div className={styles.delete_icon}>
            <Trash2 size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

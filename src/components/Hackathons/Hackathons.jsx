import React from "react";

import styles from "./Hackathons.module.css";
import hackathons from "../../data/hackathons"; // updated JS import

export const Hackathons = () => {
  return (
    <section className={styles.container} id="hackathons">
      <h2 className={styles.title}>Hackathons</h2>
      <div className={styles.content}>
        <ul className={styles.history}>
          {hackathons.map((hackathon, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={hackathon.image} // updated to direct import
                  alt={`${hackathon.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${hackathon.role}, ${hackathon.organisation}`}</h3>
                  <p>{`${hackathon.startDate} - ${hackathon.endDate}`}</p>
                  <ul>
                    {hackathon.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

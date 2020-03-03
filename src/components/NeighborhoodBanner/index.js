import React from "react";

import s from "./styles.module.css";

export default function NeighborhoodBanner({ title }) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div>
          <div className={s.description}>Location</div>
          <h2 className={s.heading}>{title}</h2>
        </div>

        <div>
          <button className={s.button}>Change neighborhood</button>
        </div>
      </div>
    </div>
  );
}

import React from "react";

import s from "./styles.module.css";

export default function Restaurant({ restaurant }) {
  const tags = [...restaurant.tags, "£".repeat(restaurant.price)];

  return (
    <div className={s.root}>
      <img className={s.image} src={restaurant.image} alt={restaurant.name} />

      <h3 className={s.name}>{restaurant.name}</h3>

      <ul className={s.inlineTags}>
        {tags.map((tag, index) => (
          <li key={index} className={s.tag}>
            {tag}

            {index !== tags.length - 1 && (
              <span className={s.seperator}>·</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

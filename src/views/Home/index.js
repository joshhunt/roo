import React from "react";
import { useRestaurantAPI } from "../../api";
import Restaurant from "../../components/Restaurant";

import logo from "../../svgs/logo-horizontal.svg";
import userIcon from "../../svgs/user-icon.svg";

import s from "./styles.module.css";
import NeighborhoodBanner from "../../components/NeighborhoodBanner";

function Home() {
  const data = useRestaurantAPI();

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <header className={s.header}>
        <img src={logo} alt="deliveroo logo" />

        <div className={s.user}>
          <img className={s.userIcon} src={userIcon} alt="" />
          <span className={s.userName}>Josh Hunt</span>
        </div>
      </header>

      <NeighborhoodBanner title={data.neighborhood} />

      <p className={s.count}>{data.restaurants.length} restaurants</p>

      <div className={s.restaurants}>
        {data.restaurants.map(restaurant => (
          <Restaurant key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}

export default Home;

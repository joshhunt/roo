import React, { useState, useEffect } from "react";
import { getRestaurantData } from "../../api";
import Restaurant from "../../components/Restaurant";

import logo from "../../svgs/logo-horizontal.svg";
import userIcon from "../../svgs/user-icon.svg";

import s from "./styles.module.css";
import NeighborhoodBanner from "../../components/NeighborhoodBanner";

export function useRestaurantAPI() {
  const [data, setData] = useState();

  useEffect(() => {
    getRestaurantData().then(d => setData(d));
  });

  return data;
}

function App() {
  const data = useRestaurantAPI();

  if (!data) {
    return null;
  }

  return (
    <div className="App">
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

export default App;

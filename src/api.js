import { useEffect, useState } from "react";

import restaurantJSON from "./data/restaurants.json";

export function getRestaurantData() {
  return Promise.resolve(restaurantJSON);
}

export function useRestaurantAPI() {
  const [data, setData] = useState();

  useEffect(() => {
    getRestaurantData().then(r => setData(r));
  }, []);

  return data;
}

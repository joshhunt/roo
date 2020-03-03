import restaurantJSON from "./data/restaurants.json";

export function getRestaurantData() {
  return Promise.resolve(restaurantJSON);
}

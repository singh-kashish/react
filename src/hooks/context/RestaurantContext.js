import { createContext } from "react";
import { dummyData } from "../../config.js";
const RestaurantContext = createContext(dummyData);
RestaurantContext.displayName = "RestaurantContext";
export default RestaurantContext;

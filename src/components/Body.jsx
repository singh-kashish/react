import React,{useMemo, useState} from "react";
import Header from './Header';
import RestaurantList from './RestaurantList';
import Footer from './Footer';
import {dummyData} from '../config.js';
import { useSearch } from "../hooks/useSearch.js";

let Body = () => {
  const { filteredRestaurants, search, setSearch} = useSearch(dummyData);
  return (
    <React.Fragment>
      <Header search={search} setSearch={setSearch} />
      <RestaurantList restaurants={filteredRestaurants}/>
      <Footer />
    </React.Fragment>
  );
};
export default Body;
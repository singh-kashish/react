import React from "react";
import Header from './Header';
import RestaurantList from './RestaurantList';
import Footer from './Footer';
import {dummyData} from '../config.js';

let Body = () => {
  return (
    <React.Fragment>
      <Header />
      <RestaurantList restaurants={dummyData} />
      <Footer />
    </React.Fragment>
  );
};
export default Body;
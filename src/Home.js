import React from "react";
import Grocery from "./Grocery";
import Reviews from "./Reviews"
import Copyright from "./Copyright";
import {FaShoppingCart} from 'react-icons/fa';

function Home() {
    return (
      <>
        
      <Grocery></Grocery>
      <Reviews></Reviews>
      <Copyright></Copyright>
      </>
    )
}
export default Home;
import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { axiosWithAuth } from './Utils/axiosWithAuth';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  const getData = () => {

    axiosWithAuth()
      .get('/colors')
      .then((res) => {
        console.log(res)
      })
      .catch
  }
    return (
      <>
        <ColorList colors={colorList} updateColors={setColorList} />
        <Bubbles colors={colorList} />
      </>
    );
  };

export default BubblePage;

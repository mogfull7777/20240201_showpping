import React, { useState } from "react";
import "./Mainpage.css";

import database from "../database";
import { useNavigate } from "react-router-dom";

function Mainpage() {
  let [info] = useState(database);
  console.log("info", info);

  const navi = useNavigate();

  return (
    <div>
      <div className="imageSection">
        <img className="bannerImg" src="/img/banner_img_1.jpg" />
      </div>
      <div className="productSection">
        <ul className="productMap">
          {info.map((item) => (
            <li className="product" key={item.id}>
              <img
                className="productImg"
                src={item.image}
                alt="image"
                onClick={() => navi(`/product/${item.id}`)}
              />
              <h4>{item.title}</h4>
              <h5>{item.price}</h5>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Mainpage;

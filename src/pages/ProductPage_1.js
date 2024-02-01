import React, { useState } from "react";
import { useParams } from "react-router-dom";
import database from "../database";

function ProductPage_1() {
  let [info] = useState(database);
  let params = useParams();
  let pageNum = params.id;
  let productNum = info[pageNum];

  console.log(info[pageNum].image);
  console.log(info[pageNum].title);

  return (
    <div>
      <h1>{`${Number(pageNum) + 1}`}번 상품 입니다.</h1>
      <img src={info[pageNum].image} alt="image" />
      <h3>{productNum.title}</h3>
      <h4>{productNum.price}</h4>
      <h5>{productNum.description}</h5>
    </div>
  );
}

export default ProductPage_1;

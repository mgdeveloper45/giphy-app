import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";
import Category from "../components/Category.js";

const Categories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const apiData = await axios.get(`/api/categories`);
        console.log("category object ==> ", apiData.data);
        setCategory(apiData.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div style={{width:'60vw'}}>
      <Category category={category} />
    </div>
  );
};

export default Categories;

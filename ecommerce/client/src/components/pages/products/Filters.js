import React, { useContext } from "react";
//import { Link } from "react-router-dom";
import { GlobalState } from "../../../GlobalState";

function Filters() {
  const state = useContext(GlobalState);
  const [categories] = state.categoriesAPI.categories;
  const [sort, setSort] = state.productsAPI.sort;
  const [search, setSearch] = state.productsAPI.search;

  const [category, setCategory] = state.productsAPI.category;

  const handleCategory = (e) => {
    setCategory(e.target.value);
    setSearch("");
  };

  return (
    <div className="filter_menu">
      <div className="row">
        <span>Filter Your Product: </span>
        <select name="category" value={category} onChange={handleCategory}>
          <option value="">সব পণ্য</option>
          {categories.map((category) => (
            <option value={"category=" + category._id} key={category._id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <input
        type="text"
        value={search}
        placeholder="আপনার অনুসন্ধান লিখুন!"
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />

      <div className="row sort">
        <span>Sort By: </span>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">নতুনতম</option>
          <option value="sort=oldest">প্রবীণতম</option>
          <option value="sort=-sold">সেরা বিক্রয়</option>
          <option value="sort=-price">মূল্য: উচ্চ-নিম্ন</option>
          <option value="sort=price">দাম: কম-উচ্চ</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;

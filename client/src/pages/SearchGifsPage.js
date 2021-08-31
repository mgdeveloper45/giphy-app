// import React, { useState } from "react";
import SearchResults from "../components/SearchResults.js";

const SearchGifsPage = (props) => {
  return (
    <div>
      <SearchResults
      currentSearch={props.currentSearch} 
      toggle={props.toggle} 
      value={props.value} 
      searchGifs={props.searchGifs} 
      />
    </div>
  );
};

export default SearchGifsPage;

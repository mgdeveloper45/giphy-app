import React, { useState } from "react";
import SearchResults from "../components/SearchResults.js";

const SearchGifsPage = (props) => {
  return (
    <div>
      <SearchResults searchGifs={props.searchGifs} />
    </div>
  );
};

export default SearchGifsPage;

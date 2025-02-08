import React, { useState, useEffect } from "react";
import "./search.css";
import { FaSearch } from "react-icons/fa";
import Products from "../Products/Products";
import axios from "axios";

const Search = () => {
  const [products, setProducts] = useState([]); 
  const [searchInput, setSearchInput] = useState(""); 
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSearchChange = (e) => {
    const input = e.target.value.toLowerCase();
    setSearchInput(input);

    const filteredSuggestions = products.filter((item) =>
      item.title.toLowerCase().includes(input)
    
    );

    setSuggestions(filteredSuggestions);
  };

  return (
    <>
      <div className="Whole_bar">
        <div className="search_bar">
          <div className="search_icon">
            <FaSearch />
          </div>
          <div className="inp_field">
            <input
              type="text"
              className="search_input"
              placeholder="Search Products..."
              value={searchInput}
              onChange={handleSearchChange}
            />
          </div>
        </div>

        {searchInput && suggestions.length > 0 && (
          <div className="suggestions">
            {suggestions.map((item) => (
              <div key={item.id} className="suggestion-item">
                <img src={item.image} alt={item.title} width="50px" />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* <Products products={suggestions.length > 0 ? suggestions : products} /> */}
      {!searchInput && <Products products={products} />}
    </>
  );
};

export default Search;

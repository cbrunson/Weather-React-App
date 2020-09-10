import React, { useState } from "react";
import DisplayCard from "./DisplayCard";
import SearchIcon from "../assets/search.png";

const api = {
    key: "b860e2a64184242348207cfccdd14494",
    base: "https://api.openweathermap.org/data/2.5/",
};

const SearchBar = () => {

    const [query, setQuery] = useState("");
    const [weather, setWeather] = useState({});
    const unit = "imperial";

    const search = (event) => {
        if (event.key === "Enter") {
            // unit can be 'imperial' or 'metric'
            fetch(
                `${api.base}weather?q=${query}&units=${unit}&appid=${api.key}`
            )
                .then((res) => res.json())
                .then((result) => {
                    setWeather(result);
                    setQuery("");
                    console.log(result);
                });
        }
    };

    return (
        <div>
            <div className="searchContainer">
                <input
                    type="text"
                    className="searchBar"
                    placeholder="Enter city or zip code"
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                    onKeyPress={search}
                />
                <i className="searchIcon" />
            </div>

            {typeof weather.main != "undefined" ? (
                <DisplayCard data={weather} unit={unit} />
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default SearchBar;

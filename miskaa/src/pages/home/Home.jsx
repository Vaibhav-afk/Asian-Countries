import React, { useState } from "react";
import Cards from "../../components/card/Cards";
import "./home.css";

function Home() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    console.log("refreshed!");
    const res = await fetch(
      "https://restcountries.eu/rest/v2/region/asia"
    ).then((res) => res.json());

    setData(res);
  };

  return (
    <div>
      <strong>
        <h1
          className="header"
          style={{
            zIndex: 1,
            position: "sticky",
            top: 0,
            fontSize: "48px",
            color: "#ffffff",
            padding: "30px",
            textAlign: "center",
            backgroundColor: "#000000",
          }}
        >
          Asian Countries
        </h1>
      </strong>

      <button className="refreshButton" type="submit" onClick={fetchData}>
        Show
      </button>

      {data.map((country) => (
        <Cards className="card-list" key={country.name} data={country} />
      ))}
    </div>
  );
}

export default Home;

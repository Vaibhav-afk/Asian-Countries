import React, { useEffect, useState } from "react";
import axios from "axios";
import Cards from "../../components/card/Cards";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        "https://restcountries.eu/rest/v2/region/asia"
      );
      setData(res.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <strong>
        <h1
          style={{
            fontSize:"48px",
            color: "#ffffff",
            padding: "30px",
            textAlign: "center",
            backgroundColor: "#000000",
          }}
        >
          Asian Countries
        </h1>
      </strong>

      {data.map((country) => (
        <Cards className="card-list" key={country.name} data={country} />
      ))}
    </div>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/card/Cards";

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
      {data.map((country, i) => (
        <Card key={i} data={country} />
      ))}
    </div>
  );
}

export default Home;

//test
//const bookQueries = require("../GraphQL_queries/Books/booksQueries");

import React, { useState, useEffect } from "react";
import KeyboardCard from "../components/keyboardCard/keyboardCard.jsx";
//  keyboardsQueries stuff
const { useQuery } = require("@apollo/client");
const keyboardQueries = require("../GraphQL_queries/Keyboards/keyboardsQueries");
const keyboardsGQL = require("../GraphQL_queries/Keyboards/keyboardsGQL");

const useGetAllKeyboards_AllFields = () => {
  const { loading, error, data } = useQuery(keyboardsGQL.ALL_QUERY);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  if (data) {
    //return data.keyboards[0].startDate;
    console.log(data.keyboards);
    return data.keyboards;
  }
};

function Keyboards() {
  /*
  const [data, setData] = useState([]);
  useEffect(() => {
    
    const getData = async () => {
      //console.log(keyboardQueries.getAllKeyboards_AllFields);
      return await useGetAllKeyboards_AllFields();
    };
    
    getData().then((old_data) => {
      setData(old_data);
    });
  });
  */
  const { loading, error, data } = useQuery(keyboardsGQL.ALL_QUERY);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  if (data) {
    //return data.keyboards[0].startDate;

    /*
    console.log(data.keyboards);
    return data.keyboards;
    */
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Keyboards</h2>
        {data.keyboards.map((eachKeyboard, id) => {
          return <h1 key={id}>{eachKeyboard.startDate}</h1>;
        })}
      </main>
    );
  }

  /*
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Keyboards</h2>
      <h1>{Array.isArray(data) && data}</h1>
    </main>
  );
  */
}

export default Keyboards;

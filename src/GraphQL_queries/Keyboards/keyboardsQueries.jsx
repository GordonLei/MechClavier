/*

Ignore this file. It does not really serve any purpose since it was a hassle 
to try to break queries into it's on file. Will probably re-visit another time

*/
import React from "react";

const { useQuery } = require("@apollo/client");
const keyboardsGQL = require("./keyboardsGQL");

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

const bookQueries = {
  getAllKeyboards_AllFields: useGetAllKeyboards_AllFields,
};

export default bookQueries;

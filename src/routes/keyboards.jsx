//test
//const bookQueries = require("../GraphQL_queries/Books/booksQueries");

import React from "react";

import Layout from "../components/layout/layout";

//  enums for rotue names
import routeNames from "./routeNames";
//

//  keyboardsQueries stuff
const { useQuery } = require("@apollo/client");
//  const keyboardQueries = require("../GraphQL_queries/Keyboards/keyboardsQueries");
const keyboardsGQL = require("../GraphQL_queries/Keyboards/keyboardsGQL");

function Keyboards() {
  //  GraphQL code
  const { loading, error, data } = useQuery(keyboardsGQL.ALL_QUERY);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  if (data) {
    return (
      <main>
        <Layout currentPage={routeNames.KEYBOARDS} data={data} />
        {/*<NavBar />
        <h2>Keyboards</h2>
        <KeyboardTable data={data} />
        <div>
          {showCounter && <div>{counterValue}</div>}
          <button onClick={incrementHandler}>Increment</button> <br />
          <button onClick={increaseHandler}>Increment by 5</button>
          <br />
          <button onClick={decrementHandler}>Decrement</button>
          <br />
          <button onClick={toggleHandler}>Toggle</button>
          <br />
        </div>
        */}
      </main>
    );
  }
}

export default Keyboards;

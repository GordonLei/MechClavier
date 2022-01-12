//test
//const bookQueries = require("../GraphQL_queries/Books/booksQueries");

import React from "react";
import KeyboardTable from "../components/keyboardTable/keyboardTable";
//  react-redux stuff
import { useSelector, useDispatch } from "react-redux";

//
import { counterActions } from "../store/reducers/counter/counterReducer.js";

//  keyboardsQueries stuff
const { useQuery } = require("@apollo/client");
//  const keyboardQueries = require("../GraphQL_queries/Keyboards/keyboardsQueries");
const keyboardsGQL = require("../GraphQL_queries/Keyboards/keyboardsGQL");

function Keyboards() {
  //  React-Redux logic
  const counterValue = useSelector((state) => state.counter.counterValue);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  //this handler will send an action of type increment
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const increaseHandler = () => {
    dispatch(counterActions.increase({ amount: 5 }));
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const toggleHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  //  GraphQL code
  const { loading, error, data } = useQuery(keyboardsGQL.ALL_QUERY);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  if (data) {
    return (
      <main style={{ padding: "1rem 0" }}>
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
      </main>
    );
  }
}

export default Keyboards;

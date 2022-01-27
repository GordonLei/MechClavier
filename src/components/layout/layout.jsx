import React from "react";
//  imported personal components
import KeyboardTable from "../keyboardTable/keyboardTable";
import NavBar from "../navBar/navBar";
//  react-redux stuff
import { useSelector, useDispatch } from "react-redux";
//  personal react-redux Slices
import { counterActions } from "../../store/reducers/counter/counterReducer";
//  enum with rotue names
import routeNames from "../../routes/routeNames";

function Layout(props) {
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
  return (
    <main>
      <NavBar />
      <h2>{props.currentPage}</h2>

      <div>
        {/* This Div will represent the button toggles and the searchbar and table*/}
        <span>{/* The left hand toolbar*/}</span>
        <span>
          {/* The searchbar and the tables */}

          {props.currentPage === routeNames.KEYBOARDS && (
            <KeyboardTable data={props.data} />
          )}
        </span>
      </div>
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

export default Layout;

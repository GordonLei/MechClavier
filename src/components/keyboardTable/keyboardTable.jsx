import React from "react";

import KeyboardCard from "../keyboardCard/keyboardCard";

function keyboardTable(props) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 m-4 p-4">
      {props.data.keyboards.map((eachKeyboard, id) => {
        return <KeyboardCard key={id} information={eachKeyboard} />;
      })}
    </section>
  );
}

export default keyboardTable;

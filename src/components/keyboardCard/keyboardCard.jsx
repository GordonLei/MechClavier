import React from "react";

function KeyboardCard(props) {
  return (
    <section className="border-2 m-4">
      {/* This is the top part for the image */}
      <div>
        <img
          className="h-64 w-full"
          src={props.information.images[0]}
          alt={props.information.name + " image"}
        />
      </div>
      {/* This is the information part for the image */}
      <div className=" p-4">
        <p className="font-semibold">{props.information.name}</p>
        <p>
          <span className="font-semibold">Designer: </span>
          {props.information.designer}
        </p>
        <p>
          <span className="font-semibold">Start Date: </span>
          {props.information.startDate}
        </p>
        <p>
          <span className="font-semibold">End Date: </span>
          {props.information.endDate}
        </p>
        <p>
          <span className="font-semibold">Base Price: </span> $
          {props.information.basePrice} (USD)
        </p>
        <p>
          <a href="./keyboards" className="text-blue-700">
            More details
          </a>
        </p>
      </div>
    </section>
  );
}

export default KeyboardCard;

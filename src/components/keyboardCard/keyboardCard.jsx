import React from "react";

function keyboardCard(props) {
  return (
    <section class="border-2 m-4">
      {/* This is the top part for the image */}
      <div>
        <img class="h-64 w-full" src={props.information.images[0]} />
      </div>
      {/* This is the information part for the image */}
      <div class=" p-4">
        <p class="font-semibold">{props.information.name}</p>
        <p>
          <span class="font-semibold">Designer: </span>
          {props.information.designer}
        </p>
        <p>
          <span class="font-semibold">Start Date: </span>
          {props.information.startDate}
        </p>
        <p>
          <span class="font-semibold">End Date: </span>
          {props.information.endDate}
        </p>
        <p>
          <span class="font-semibold">Base Price: </span> $
          {props.information.basePrice} (USD)
        </p>
        <p>
          <a href="" class="text-blue-700">
            More details
          </a>
        </p>
      </div>
    </section>
  );
}

export default keyboardCard;

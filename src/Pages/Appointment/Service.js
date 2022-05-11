import React from "react";

const Service = ({ service }) => {
  const { name, slots } = service;
  return (
    <div class="card w-96 bg-base-100 shadow-xl text-center">
      <div class="card-body">
        <h2 class="card-title text-secondary mx-auto">{name}</h2>
        <p>
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-600">Try Another Day</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div class="card-actions justify-center">
          <button
            disabled={slots.length === 0}
            class="btn btn-secondary text-white uppercase"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;

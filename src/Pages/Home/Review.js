import React from "react";

const Review = ({ review }) => {
  return (
    <div className="card card-compact lg:max-w-lg bg-base-100 shadow-xl mx-3 my-3">
      <div className="card-body">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
          quos esse aperiam beatae excepturi vitae.
        </p>
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100">
              <img src={review.img} alt="" />
            </div>
          </div>
          <div>
            <h4 className="text-xl">{review.name}</h4>
            <p>{review.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;

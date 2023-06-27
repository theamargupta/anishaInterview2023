import React from "react";
import "./Screen.css";
import image from "../Images/2889676.png";

export const Screen = () => {
  const closeTab = () => {};
  return (
    <div className="container">
      <div className="mx-auto h-full w-[25%] my-6">
        <div className="mx-auto w-full bg-green-300 border-green-300 flex px-2 my-1 border-2 rounded">
          <img src={image} alt="" />
          <div className="flex flex-col mx-4 w-full">
            <h4 className="font-bold"> Webhook </h4>{" "}
            <p> This is only one paragraph. </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="mx-auto w-full bg-green-300 border-green-300 flex px-2 my-1 border-2 rounded">
          <img src={image} alt="" />
          <div className="flex flex-col mx-4 w-full">
            <h4 className="font-bold"> Webhook </h4>{" "}
            <p> This is only one paragraph. </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="mx-auto w-full bg-green-300 border-green-300 flex px-2 my-1 border-2 rounded">
          <img src={image} alt="" />
          <div className="flex flex-col mx-4 w-full">
            <h4 className="font-bold"> Webhook </h4>{" "}
            <p> This is only one paragraph. </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="mx-auto w-full bg-green-300 border-green-300 flex px-2 my-1 border-2 rounded">
          <img src={image} alt="" />
          <div className="flex flex-col mx-4 w-full">
            <h4 className="font-bold"> Webhook </h4>{" "}
            <p> This is only one paragraph. </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
const data = [
  {
    key: "1",
    image: image,
    title: "Sheet",
    subTitle: "",
  },
];

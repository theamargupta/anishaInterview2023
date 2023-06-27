import React from "react";

const ListItem = ({image,closeTab}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-red-300 border-red-300 px-2 my-1 border-2 rounded">
      <img src={image} alt="" className="mx-auto" />
      <div className="flex mx-auto w-full justify-center items-center space-x-8 justify-between">
        <h4 className="font-bold"> Sheet </h4>{" "}
        <span className="font-bold" onClick={()=>closeTab()}>
          X
        </span>
      </div>
    </div>
  );
};

export default ListItem;

import React from "react";
import { getValueByKey } from "../Page/TablePage";

export const Modal = ({
  selectOnChangeHandler,
  columnData,
  copydata,
  reset,
  close,
}) => {
  
  return (
    <div>
      <div className="form2">
        {columnData.map((data) => (
          <div className={data.title}>
            <label for={data.title}>Select {data.title}</label>
            <select
              name={data.title}
              id={data.title}
              onChange={(e) => selectOnChangeHandler(e)}
            >
              {getValueByKey(copydata, data.title) &&
                getValueByKey(copydata, data.title).map((data) => {
                  return <option key={data} value={data}>{data}</option>;
                })}
            </select>
          </div>
        ))}

        <button className="filterbtn" onClick={reset}>
          Reset
        </button>
        <button className="filterbtn" onClick={close}>
          Close
        </button>
      </div>
    </div>
  );
};

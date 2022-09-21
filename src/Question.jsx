import React, { useState } from "react";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

function Question({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);
  // const [showInfoBtn, setShowInfoBtn] = useState(false);
  return (
    <div className="py-3 my-2 mb-md-5 mb-2 px-2 border border-light shadow-sm">
      <header className="d-flex justify-content-between">
        <h4>{title}</h4>
        <i
          className="btn circle-rounded"
          type="button"
          onClick={() => setShowInfo(!showInfo)}
        >
          {showInfo ? (
            <AiOutlineMinusCircle className="fs-4" />
          ) : (
            <AiFillPlusCircle className="fs-4" />
          )}
        </i>
      </header>
      {showInfo ? <p className="bg-light">{info}</p> : ""}
    </div>
  );
}

export default Question;

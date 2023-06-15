import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setMessage } from "../store/variablesSlice";

export default function Alert({ children = "" }) {
  const globalMessage = useSelector((state) => state.variables.message);
  const dispatch = useDispatch();

  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      {globalMessage && (
        <div className="alert alert-danger d-flex justify-content-center fs-5 mx-1 mx-sm-5 row">
          <label className="col-sm-11 col-10 d-flex justify-content-center">
            {children}
          </label>
          <div className="col-sm-1 col-2 d-flex justify-content-center align-items-center ">
            <div
              className="d-flex justify-content-center align-items-center fs-sm-5 fs-6 fw-semibold rounded-circle"
              style={{
                backgroundColor: isHovered ? "#ff6C64" : "pink",
                cursor: isHovered ? "pointer" : "default",
                width: "40%",
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => {
                dispatch(setMessage(""));
                setIsHovered(false);
              }}
            >
              X
            </div>
          </div>
        </div>
      )}
    </>
  );
}

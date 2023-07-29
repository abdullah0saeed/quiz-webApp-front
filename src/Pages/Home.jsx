// import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import LazyLottie from "../Components/LazyLottie";
// import background from "../assets/lazyStudent2.jpg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ marginTop: "3%" }}>
      <div
        style={{
          position: "absolute",
          bottom: "0%",
          width: "100%",
          height: "50%",
          display: "flex",
          justifyContent: "center",
          verticalAlign: "end",
        }}
      >
        <LazyLottie />
      </div>

      {/* <Helmet>
        <style>
          {
            "body { background-image: url('https://rb.gy/sj8ytw');background-repeat:no-repeat;background-attachment: fixed;background-size: 100% 100%;}"
          }
        </style>
      </Helmet> */}
      <div className="row  m-3">
        <div className="col "></div>
        <div className="col-sm-6 col-12 d-flex justify-content-center ">
          <button
            className="btn btn-primary fs-3"
            style={{ width: "100%" }}
            onClick={() => {
              navigate("/create");
            }}
          >
            Create Quiz
          </button>
        </div>
        <div className="col "></div>
      </div>
      <div className="row   m-3">
        <div className="col "></div>
        <div className="col-sm-6 col-12 d-flex justify-content-center ">
          <button
            className="btn btn-primary fs-3"
            style={{ width: "100%" }}
            onClick={() => {
              navigate("/take");
            }}
          >
            Take Quiz
          </button>
        </div>
        <div className="col "></div>
      </div>
      <div className="row   m-3">
        <div className="col "></div>
        <div className="col-sm-6 col-12 d-flex justify-content-center ">
          <button
            className="btn btn-primary fs-3"
            style={{ width: "100%" }}
            onClick={() => {
              navigate("/edit");
            }}
          >
            Edit Quiz
          </button>
        </div>
        <div className="col "></div>
      </div>
      <div className="row   m-3">
        <div className="col "></div>
        <div className="col-sm-6 col-12 d-flex justify-content-center ">
          <button
            className="btn btn-primary fs-3"
            style={{ width: "100%" }}
            onClick={() => {
              navigate("");
            }}
          >
            Performance feedback
          </button>
        </div>
        <div className="col "></div>
      </div>
    </div>
  );
}

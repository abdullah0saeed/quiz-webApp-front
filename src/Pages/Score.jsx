import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import "../config/classes.css";

export default function Score() {
  const navigate = useNavigate();
  const location = useLocation();

  const { chosenA, chosenB, chosenC, chosenD, quiz } = location.state;

  //to store the quiz view
  const [view, setView] = useState([]);

  //to store the wrong count
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    quizView();
  }, []);

  ///function to set the view\\\\\
  const quizView = () => {
    var row = [];

    for (let i = 0; i < quiz?.q?.length; i++) {
      row.push(
        <div style={{ borderBottomStyle: "solid" }} key={i}>
          <div className="row mb-2">
            <div className="col-12 fs-4 fw-bold mt-1">
              {i + 1 + "- " + quiz.q[i]}
            </div>
          </div>
          <div className="row mb-2">
            <div
              className="btn-group-vertical"
              role="group"
              aria-label="Basic outlined example"
            >
              <button
                type="button"
                id={`a${i}`}
                className="btn btn-outline-primary text-black fw-bold text-start"
              >
                {"a) " + quiz.a[i]}
              </button>
              <button
                type="button"
                id={`b${i}`}
                className="btn btn-outline-primary text-black fw-bold text-start"
              >
                {"b) " + quiz.b[i]}
              </button>
              <button
                type="button"
                id={`c${i}`}
                className="btn btn-outline-primary text-black fw-bold text-start"
              >
                {"c) " + quiz.c[i]}
              </button>
              <button
                type="button"
                id={`d${i}`}
                className="btn btn-outline-primary text-black fw-bold text-start"
              >
                {"d) " + quiz.d[i]}
              </button>
            </div>
          </div>
        </div>
      );
    }

    setView(row);
  };

  return (
    <div
      style={{
        marginTop: "0.5%",
        marginRight: "1%",
        marginLeft: "1%",
        padding: "3%",
        backgroundColor: "#fff",
      }}
    >
      {show && (
        <>
          <div className="row mb-3">
            <div className="col"></div>
            <div className="col-sm-2 col-5 fs-3 text-center fw-bold">Score</div>
            <div
              className="col-sm-2 col-4 fs-3 text-center rounded-3 fw-bold"
              style={{ backgroundColor: "#ddd" }}
            >
              {quiz.q.length - score + " / " + quiz.q.length}
            </div>
            <div className="col"></div>
          </div>
        </>
      )}
      {/* button to show the right and wrong answers  */}
      <div className="row">
        <div className="col-sm-4 col-1"></div>
        <div
          className="col-sm-4 col-10 btn btn-warning fs-5 fw-bold"
          onClick={() => {
            var wrong = 0;
            for (let i = 0; i < quiz?.q?.length; i++) {
              if (chosenA[i] === "true" && quiz.corrA[i] === "true") {
                document
                  .getElementById(`a${i}`)
                  ?.classList.add("bg_green_light");
              } else if (chosenA[i] === "true" && quiz.corrA[i] !== "true") {
                document.getElementById(`a${i}`)?.classList.add("bg_red_light");
                wrong = wrong + 1;

                if (quiz.corrB[i] === "true") {
                  document
                    .getElementById(`b${i}`)
                    ?.classList.add("bg_grey_light");
                } else if (quiz.corrC[i] === "true") {
                  document
                    .getElementById(`c${i}`)
                    ?.classList.add("bg_grey_light");
                } else if (quiz.corrD[i] === "true") {
                  document
                    .getElementById(`d${i}`)
                    ?.classList.add("bg_grey_light");
                }
              }

              if (chosenB[i] === "true" && quiz.corrB[i] === "true") {
                document
                  .getElementById(`b${i}`)
                  ?.classList.add("bg_green_light");
              } else if (chosenB[i] === "true" && quiz.corrB[i] !== "true") {
                document.getElementById(`b${i}`)?.classList.add("bg_red_light");
                wrong = wrong + 1;
                if (quiz.corrA[i] === "true") {
                  document
                    .getElementById(`a${i}`)
                    ?.classList.add("bg_grey_light");
                } else if (quiz.corrC[i] === "true") {
                  document
                    .getElementById(`c${i}`)
                    ?.classList.add("bg_grey_light");
                } else if (quiz.corrD[i] === "true") {
                  document
                    .getElementById(`d${i}`)
                    ?.classList.add("bg_grey_light");
                }
              }

              if (chosenC[i] === "true" && quiz.corrC[i] === "true") {
                document
                  .getElementById(`c${i}`)
                  ?.classList.add("bg_green_light");
              } else if (chosenC[i] === "true" && quiz.corrC[i] !== "true") {
                document.getElementById(`c${i}`)?.classList.add("bg_red_light");
                wrong = wrong + 1;
                if (quiz.corrB[i] === "true") {
                  document
                    .getElementById(`b${i}`)
                    ?.classList.add("bg_grey_light");
                } else if (quiz.corrA[i] === "true") {
                  document
                    .getElementById(`a${i}`)
                    ?.classList.add("bg_grey_light");
                } else if (quiz.corrD[i] === "true") {
                  document
                    .getElementById(`d${i}`)
                    ?.classList.add("bg_grey_light");
                }
              }

              if (chosenD[i] === "true" && quiz.corrD[i] === "true") {
                document
                  .getElementById(`d${i}`)
                  ?.classList.add("bg_green_light");
              } else if (chosenD[i] === "true" && quiz.corrD[i] !== "true") {
                document.getElementById(`d${i}`)?.classList.add("bg_red_light");
                wrong = wrong + 1;
                if (quiz.corrB[i] === "true") {
                  document
                    .getElementById(`b${i}`)
                    ?.classList.add("bg_grey_light");
                } else if (quiz.corrC[i] === "true") {
                  document
                    .getElementById(`c${i}`)
                    ?.classList.add("bg_grey_light");
                } else if (quiz.corrA[i] === "true") {
                  document
                    .getElementById(`a${i}`)
                    ?.classList.add("bg_grey_light");
                }
              }
            }

            //if no choice has been done
            for (let i = 0; i < quiz?.q?.length; i++) {
              if (
                chosenA[i] !== "true" &&
                chosenB[i] !== "true" &&
                chosenC[i] !== "true" &&
                chosenD[i] !== "true"
              ) {
                wrong = wrong + 1;

                if (quiz.corrA[i] === "true") {
                  document
                    .getElementById(`a${i}`)
                    ?.classList.add("bg_grey_light");
                } else if (quiz.corrB[i] === "true") {
                  document
                    .getElementById(`b${i}`)
                    ?.classList.add("bg_grey_light");
                } else if (quiz.corrC[i] === "true") {
                  document
                    .getElementById(`c${i}`)
                    ?.classList.add("bg_grey_light");
                } else if (quiz.corrD[i] === "true") {
                  document
                    .getElementById(`d${i}`)
                    ?.classList.add("bg_grey_light");
                }
              }
            }

            setScore(wrong);
            setShow(true);
          }}
        >
          Show Answers
        </div>
        <div className="col"></div>
      </div>
      <div>{view}</div>
      <div className="row mt-3">
        <div className="col-4"></div>

        <div
          className="col-4 btn btn-dark m-2 fs-5 fw-bold text-white"
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

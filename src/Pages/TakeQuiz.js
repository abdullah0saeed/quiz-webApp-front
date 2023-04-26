import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import { setMessage } from "../store/variablesSlice";

import { disableBtn, enableBtn } from "../myModules";
import { colors } from "../config";
import Alert from "../Components/Alert";

export default function TakeQuiz() {
  const navigate = useNavigate();

  //define global state
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();

  //to re-render whenever needed
  const [render, setRender] = useState(false);

  //to store the required quiz ID
  const [id, setId] = useState("");

  //to determine whether to show the quiz or not
  const [show, setShow] = useState(false);

  //to store the whole quiz content
  const [quiz, setQuiz] = useState({});

  //to store the chosen answers
  const [a, setA] = useState([]);
  const [b, setB] = useState([]);
  const [c, setC] = useState([]);
  const [d, setD] = useState([]);

  //to store the quiz view
  const [view, setView] = useState([]);

  /////to get the quiz from db using ID\\\\\\\
  // to store the returned message from db
  const getQuiz = async () => {
    try {
      const res = await fetch(`${globalState.api.link}/quizes/${id}`);
      const resJson = await res.json();
      setQuiz(resJson);
      if (res.status === 200 && resJson.message === undefined) {
        setShow(true);
      } else if (res.status === 200 && resJson.message !== undefined) {
        dispatch(setMessage(resJson.message));
        setShow(false);
        enableBtn(
          document.getElementById("start-btn"),
          "Start",
          colors.green.success
        );
        setRender(!render);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    quizView();
  }, [quiz]);
  /////function to set the view\\\\\
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
              className="btn-group-vertical "
              role="group"
              aria-label="Basic outlined example"
            >
              <button
                type="button"
                id={`a${i}`}
                className="btn btn-outline-primary text-dark fw-bold text-start"
                onClick={(e) => {
                  var chosen = "add";
                  //if chosen already or other one is chosen --> remove background
                  e.target.classList.forEach((el) => {
                    if (el == "bg-info") {
                      chosen = "remove";
                    }
                  });
                  document.getElementById(`b${i}`).classList.forEach((bEl) => {
                    if (bEl == "bg-info") {
                      chosen = "remove";
                    }
                  });
                  document.getElementById(`c${i}`).classList.forEach((cEl) => {
                    if (cEl == "bg-info") {
                      chosen = "remove";
                    }
                  });
                  document.getElementById(`d${i}`).classList.forEach((dEl) => {
                    if (dEl == "bg-info") {
                      chosen = "remove";
                    }
                  });

                  if (chosen == "add") {
                    e.target.classList.add("bg-info");
                    var arr = a;
                    arr[i] = "true";
                    setA(arr);
                  } else {
                    e.target.classList.remove("bg-info");
                    var arr = a;
                    arr[i] = "false";
                    setA(arr);
                  }
                }}
              >
                {"a) " + quiz.a[i]}
              </button>
              <button
                type="button"
                id={`b${i}`}
                className="btn btn-outline-primary text-dark fw-bold text-start"
                onClick={(e) => {
                  var chosen = "add";
                  //if chosen already or other one is chosen --> remove background
                  e.target.classList.forEach((el) => {
                    if (el == "bg-info") {
                      chosen = "remove";
                    }
                  });
                  document.getElementById(`a${i}`).classList.forEach((aEl) => {
                    if (aEl == "bg-info") {
                      chosen = "remove";
                    }
                  });
                  document.getElementById(`c${i}`).classList.forEach((cEl) => {
                    if (cEl == "bg-info") {
                      chosen = "remove";
                    }
                  });
                  document.getElementById(`d${i}`).classList.forEach((dEl) => {
                    if (dEl == "bg-info") {
                      chosen = "remove";
                    }
                  });

                  if (chosen == "add") {
                    e.target.classList.add("bg-info");
                    var arr = b;
                    arr[i] = "true";
                    setB(arr);
                  } else {
                    e.target.classList.remove("bg-info");
                    var arr = b;
                    arr[i] = "false";
                    setB(arr);
                  }
                }}
              >
                {"b) " + quiz.b[i]}
              </button>
              <button
                type="button"
                id={`c${i}`}
                className="btn btn-outline-primary text-dark fw-bold text-start"
                onClick={(e) => {
                  var chosen = "add";
                  //if chosen already or other one is chosen --> remove background
                  e.target.classList.forEach((el) => {
                    if (el == "bg-info") {
                      chosen = "remove";
                    }
                  });
                  document.getElementById(`b${i}`).classList.forEach((bEl) => {
                    if (bEl == "bg-info") {
                      chosen = "remove";
                    }
                  });
                  document.getElementById(`a${i}`).classList.forEach((aEl) => {
                    if (aEl == "bg-info") {
                      chosen = "remove";
                    }
                  });
                  document.getElementById(`d${i}`).classList.forEach((dEl) => {
                    if (dEl == "bg-info") {
                      chosen = "remove";
                    }
                  });

                  if (chosen == "add") {
                    e.target.classList.add("bg-info");
                    var arr = c;
                    arr[i] = "true";
                    setC(arr);
                  } else {
                    e.target.classList.remove("bg-info");
                    var arr = c;
                    arr[i] = "false";
                    setC(arr);
                  }
                }}
              >
                {"c) " + quiz.c[i]}
              </button>
              <button
                type="button"
                id={`d${i}`}
                className="btn btn-outline-primary text-dark fw-bold text-start"
                onClick={(e) => {
                  var chosen = "add";
                  //if chosen already or other one is chosen --> remove background
                  e.target.classList.forEach((el) => {
                    if (el == "bg-info") {
                      chosen = "remove";
                    }
                  });
                  document.getElementById(`b${i}`).classList.forEach((bEl) => {
                    if (bEl == "bg-info") {
                      chosen = "remove";
                    }
                  });
                  document.getElementById(`c${i}`).classList.forEach((cEl) => {
                    if (cEl == "bg-info") {
                      chosen = "remove";
                    }
                  });
                  document.getElementById(`a${i}`).classList.forEach((aEl) => {
                    if (aEl == "bg-info") {
                      chosen = "remove";
                    }
                  });

                  if (chosen == "add") {
                    e.target.classList.add("bg-info");
                    var arr = d;
                    arr[i] = "true";
                    setD(arr);
                  } else {
                    e.target.classList.remove("bg-info");
                    var arr = d;
                    arr[i] = "false";
                    setD(arr);
                  }
                }}
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
        borderRadius: "30",
        padding: "3%",
      }}
    >
      {/* show alert if found */}
      {globalState.variables.message && (
        <Alert>{globalState.variables.message}</Alert>
      )}

      {/* to take the quiz ID */}
      <div className="row">
        {!show && (
          <>
            <div className="col-3"></div>
            <div className="col-sm-2 col-12 fs-4 fw-bold">Quiz ID </div>
            <div className="col-sm-3 col-12 fs-5">
              <input
                type={"text"}
                className="text-center"
                style={{ width: "100%", borderWidth: "1.5px" }}
                value={id}
                onChange={(e) => {
                  setId(e.target.value);
                }}
                onMouseEnter={() => {
                  if (id === "") {
                    enableBtn(
                      document.getElementById("start-btn"),
                      "Start",
                      colors.green.success
                    );
                  }
                }}
              />
            </div>
            <div className="col-4"></div>
          </>
        )}
        <div className="row ">
          {!show && (
            <>
              <div className="col"></div>
              <div className="col-sm-4 col-12 d-flex justify-content-center">
                <div
                  className="btn btn-success mt-5  fs-5 fw-bolder"
                  id="start-btn"
                  style={{ width: "80%" }}
                  onClick={(e) => {
                    if (id === "") {
                      disableBtn(e.target, "ID can't be empty");
                    } else {
                      disableBtn(e.target);
                      getQuiz();
                      quizView();
                    }
                  }}
                >
                  Start
                </div>
              </div>
              <div className="col-sm-4 col-12 d-flex justify-content-center">
                <div
                  className="btn btn-danger mt-5  fs-5 fw-bolder"
                  style={{ width: "80%" }}
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Back
                </div>
              </div>
              <div className="col"></div>
            </>
          )}
          {show && id !== "" && (
            <>
              <div>{view}</div>
              <div className="row mt-3">
                <div className="col-2"></div>
                <div
                  className="col-4 btn btn-dark m-2"
                  onClick={() => {
                    navigate("/score", {
                      state: {
                        chosenA: a,
                        chosenB: b,
                        chosenC: c,
                        chosenD: d,
                        quiz,
                      },
                    });
                  }}
                >
                  Submit
                </div>
                <div
                  className="col-4 btn btn-danger m-2"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Back
                </div>
                <div className="col-2"></div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  choice: {
    borderLeftStyle: "solid",
    borderRightStyle: "solid",
    borderWidth: "1px",
  },
};

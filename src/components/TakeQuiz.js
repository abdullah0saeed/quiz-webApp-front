import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

export default function TakeQuiz() {
  const navigate = useNavigate();

  //define global state
  const globalState = useSelector((state) => state);

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
  const getQuiz = async () => {
    try {
      const res = await fetch(`${globalState.api.link}/quizes/${id}`);
      const resJson = await res.json();
      setQuiz(resJson);
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
            <div className="col-12 fs-4 fw-bold">{quiz.q[i]}</div>
          </div>
          <div className="row mb-2">
            <div
              className="btn-group"
              role="group"
              aria-label="Basic outlined example"
            >
              <button
                type="button"
                id={`a${i}`}
                className="btn btn-outline-primary text-dark fw-bold"
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
                {quiz.a[i]}
              </button>
              <button
                type="button"
                id={`b${i}`}
                className="btn btn-outline-primary text-dark fw-bold"
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
                {quiz.b[i]}
              </button>
              <button
                type="button"
                id={`c${i}`}
                className="btn btn-outline-primary text-dark fw-bold"
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
                {quiz.c[i]}
              </button>
              <button
                type="button"
                id={`d${i}`}
                className="btn btn-outline-primary text-dark fw-bold"
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
                {quiz.d[i]}
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
        borderRadius: "5%",
        padding: "3%",
        backgroundColor: "#fff",
        borderStyle: "solid",
        borderWidth: "1px",
        boxShadow: "10px 10px 7px",
      }}
    >
      {/* to take the quiz ID */}
      <div className="row">
        <div className="col-3"></div>
        <div className="col-2 fs-4 fw-bold">Quiz ID </div>
        <div className="col-3 fs-5">
          <input
            type={"text"}
            style={{ width: "100%", borderWidth: "1.5px" }}
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </div>
        <div className="col-4"></div>
        <div className="row ">
          <div className="col"></div>
          <div className="col-4 d-flex justify-content-center">
            <div
              className="btn btn-success mt-5  fs-5 fw-bolder"
              style={{ width: "80%" }}
              onClick={() => {
                getQuiz();
                quizView();
                setShow(true);
              }}
            >
              Start
            </div>
          </div>
          <div className="col"></div>
          {show && (
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

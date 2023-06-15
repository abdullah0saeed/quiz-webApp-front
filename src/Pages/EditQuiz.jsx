import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { enableBtn, disableBtn } from "../myModules";
import { setMessage } from "../store/variablesSlice";
import Alert from "../Components/Alert";

export default function EditQuiz() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  //define global state
  const globalState = useSelector((state) => state);

  //to re-render whenever needed
  const [render, setRender] = useState(false);

  //to store the quiz id
  const [id, setId] = useState("");

  //to store the entered password
  const [password, setPassword] = useState("");

  //to store the quiz
  const [quiz, setQuiz] = useState({});
  //to display the quiz view
  const [showView, setShowView] = useState(false);

  //get request to get quiz with an id
  const getQuiz = async () => {
    try {
      const res = await fetch(`${globalState.api.link}/oneQuiz`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, id }),
      });
      const resJson = await res.json();
      setQuiz(resJson);

      return { data: resJson, message: resJson.message };
    } catch (error) {
      console.log("error: ", error);
    }
  };

  //put request to edit a quiz using id
  const editQuiz = async () => {
    try {
      const res = await fetch(
        `${globalState.api.link}/editQuiz/644405307aca22ffb823e83c`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(quiz),
        }
      );
      return res.status;
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div
      style={{
        marginTop: "0.5%",
        marginRight: "1%",
        marginLeft: "1%",
        borderRadius: "30",
        padding: "3%",
        flex: 1,
        justifyContent: "center",
      }}
    >
      {/* show warnings */}
      {globalState.variables.message && (
        <Alert>{globalState.variables.message}</Alert>
      )}

      {/* get required data from user */}
      {!showView && (
        <>
          <div className="row fw-bold fs-5 px-3">
            <label className="col-sm-4 col-12 d-flex justify-content-sm-end fs-4 mb-1">
              Quiz ID
            </label>
            <input
              type="text"
              className="col-sm-4 col-12 d-flex text-center"
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="row mt-sm-3 mt-4 fw-bold fs-5 px-3">
            <label className="col-sm-4 col-12 d-flex justify-content-sm-end fs-4 mb-1">
              Quiz password
            </label>
            <input
              type="text"
              className="col-sm-4 col-12 d-flex text-center"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </>
      )}
      {/* show the quiz view */}
      {showView && (
        <div>
          {quiz.q.map((question, i) => {
            return (
              <div className="mt-3">
                <div className="row d-flex justify-content-center align-items-center">
                  {i + 1}-
                  <input
                    type="text"
                    id={`q${i}`}
                    value={question}
                    className="col-11 fs-5"
                    onChange={(e) => {
                      quiz.q[i] = `${e.target.value}`;
                      setRender(!render);
                    }}
                  />
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                  {"a) "}
                  <input
                    type="text"
                    id={`a${i}`}
                    value={quiz.a[i]}
                    className="col-10 fs-5"
                    onChange={(e) => {
                      quiz.a[i] = `${e.target.value}`;
                      setRender(!render);
                    }}
                  />
                  <input
                    type="checkbox"
                    className="col-1"
                    checked={quiz.corrA[i] === "true" ? true : false}
                    onChange={(e) => {
                      quiz.corrA[i] = `${e.target.checked}`;
                      setRender(!render);
                    }}
                  />
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                  {"b) "}
                  <input
                    type="text"
                    id={`b${i}`}
                    value={quiz.b[i]}
                    className="col-10 fs-5"
                    onChange={(e) => {
                      quiz.b[i] = `${e.target.value}`;
                      setRender(!render);
                    }}
                  />
                  <input
                    type="checkbox"
                    className="col-1"
                    checked={quiz.corrB[i] === "true" ? true : false}
                    onChange={(e) => {
                      quiz.corrB[i] = `${e.target.checked}`;
                      setRender(!render);
                    }}
                  />
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                  {"c) "}
                  <input
                    type="text"
                    id={`c${i}`}
                    value={quiz.c[i]}
                    className="col-10 fs-5"
                    onChange={(e) => {
                      quiz.c[i] = `${e.target.value}`;
                      setRender(!render);
                    }}
                  />
                  <input
                    type="checkbox"
                    className="col-1"
                    checked={quiz.corrC[i] === "true" ? true : false}
                    onChange={(e) => {
                      quiz.corrC[i] = `${e.target.checked}`;
                      setRender(!render);
                    }}
                  />
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                  {"d) "}
                  <input
                    type="text"
                    id={`d${i}`}
                    value={quiz.d[i]}
                    className="col-10 fs-5"
                    onChange={(e) => {
                      quiz.d[i] = `${e.target.value}`;
                      setRender(!render);
                    }}
                  />
                  <input
                    type="checkbox"
                    className="col-1"
                    checked={quiz.corrD[i] === "true" ? true : false}
                    onChange={(e) => {
                      quiz.corrD[i] = `${e.target.checked}`;
                      setRender(!render);
                    }}
                  />
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      )}
      {/* buttons */}
      <div className="row mt-3 d-flex justify-content-center justify-content-sm-end align-items-center">
        <div className="col-sm-1"></div>
        {!showView && (
          <div
            className="col-sm-4 col-11 btn btn-primary m-2 fw-bold fs-5"
            onClick={(e) => {
              disableBtn(e.target);
              if (id !== "") {
                getQuiz().then((returned) => {
                  const resMessage = returned.message;
                  if (resMessage !== undefined) {
                    // setMessage(resMessage);
                    dispatch(setMessage(resMessage));
                  } else {
                    setMessage("");
                    setShowView(true);
                  }
                  enableBtn(e.target, "Get quiz", "#3B71CA");
                });
              } else {
                dispatch(setMessage("id can't be empty"));
                enableBtn(e.target, "Get quiz", "#3B71CA");
              }
            }}
          >
            Get quiz
          </div>
        )}

        {showView && (
          <div
            className="col-sm-4 col-11 btn btn-success m-2 fw-bold fs-5"
            onClick={(e) => {
              disableBtn(e.target);
              editQuiz().then((status) => {
                status === 200 ? navigate("/") : disableBtn(e.target);
              });
            }}
          >
            Edit quiz
          </div>
        )}

        <div
          className="col-sm-4 col-11 btn btn-danger m-2 fw-bold fs-5"
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </div>
        <div className="col-sm-2"></div>
      </div>
    </div>
  );
}

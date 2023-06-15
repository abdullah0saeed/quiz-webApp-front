import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Collapse } from "react-bootstrap";

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

  //to toggle modal
  const [isOpen, setIsOpen] = useState(false);

  //to show or hide collapse
  const [isCollapsed, setIsCollapsed] = useState(true);

  //what index to delete
  const [index, setIndex] = useState();

  //to store the quiz id
  const [id, setId] = useState("");

  //to store the entered password
  const [password, setPassword] = useState("");

  //to store the quiz
  const [quiz, setQuiz] = useState({});

  //to display the quiz view
  const [showView, setShowView] = useState(false);

  //to store add question data
  const [newQ, setNewQ] = useState("");
  const [newA, setNewA] = useState("");
  const [newB, setNewB] = useState("");
  const [newC, setNewC] = useState("");
  const [newD, setNewD] = useState("");
  const [newCorrA, setNewCorrA] = useState("false");
  const [newCorrB, setNewCorrB] = useState("false");
  const [newCorrC, setNewCorrC] = useState("false");
  const [newCorrD, setNewCorrD] = useState("false");

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

  //choose one checkbox
  const onlyOne = (pre, index) => {
    switch (pre) {
      case "check1":
        quiz.corrA[index] = true;
        quiz.corrB[index] = false;
        quiz.corrC[index] = false;
        quiz.corrD[index] = false;
        break;
      case "check2":
        quiz.corrA[index] = false;
        quiz.corrB[index] = true;
        quiz.corrC[index] = false;
        quiz.corrD[index] = false;
        break;
      case "check3":
        quiz.corrA[index] = false;
        quiz.corrB[index] = false;
        quiz.corrC[index] = true;
        quiz.corrD[index] = false;
        break;
      case "check4":
        quiz.corrA[index] = false;
        quiz.corrB[index] = false;
        quiz.corrC[index] = false;
        quiz.corrD[index] = true;
        break;

      default:
        break;
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

      {/* modal */}
      {isOpen && (
        <Modal
          show={isOpen}
          onHide={() => {
            setIsOpen(false);
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Sure you want to delete this ?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="danger"
              onClick={() => {
                quiz.q.splice(index, 1);
                quiz.a.splice(index, 1);
                quiz.b.splice(index, 1);
                quiz.c.splice(index, 1);
                quiz.d.splice(index, 1);
                quiz.corrA.splice(index, 1);
                quiz.corrB.splice(index, 1);
                quiz.corrC.splice(index, 1);
                quiz.corrD.splice(index, 1);
                setIsOpen(false);
              }}
            >
              Delete
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
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
                  <button
                    type="button"
                    class="btn-close bg-danger"
                    aria-label="Close"
                    onClick={() => {
                      setIndex(i);
                      setIsOpen(true);
                    }}
                  ></button>
                  {i + 1}-
                  <textarea
                    rows={1}
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
                  <textarea
                    rows={1}
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
                    id={`check1${i}`}
                    className="col-1"
                    checked={quiz.corrA[i] === "true" ? true : false}
                    onChange={(e) => {
                      quiz.corrA[i] = `${e.target.checked}`;
                      setRender(!render);
                    }}
                    onClick={(e) => {
                      onlyOne("check1", i);
                    }}
                  />
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                  {"b) "}
                  <textarea
                    rows={1}
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
                    id={`check2${i}`}
                    className="col-1"
                    checked={quiz.corrB[i] === "true" ? true : false}
                    onChange={(e) => {
                      quiz.corrB[i] = `${e.target.checked}`;
                      setRender(!render);
                    }}
                    onClick={() => {
                      onlyOne("check2", i);
                    }}
                  />
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                  {"c) "}
                  <textarea
                    rows={1}
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
                    id={`check3${i}`}
                    className="col-1"
                    checked={quiz.corrC[i] === "true" ? true : false}
                    onChange={(e) => {
                      quiz.corrC[i] = `${e.target.checked}`;
                      setRender(!render);
                    }}
                    onClick={() => {
                      onlyOne("check3", i);
                    }}
                  />
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                  {"d) "}
                  <textarea
                    rows={1}
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
                    id={`check4${i}`}
                    className="col-1"
                    checked={quiz.corrD[i] === "true" ? true : false}
                    onChange={(e) => {
                      quiz.corrD[i] = `${e.target.checked}`;
                      setRender(!render);
                    }}
                    onClick={() => {
                      onlyOne("check4", i);
                    }}
                  />
                </div>
                <hr />
              </div>
            );
          })}

          {/* to add question */}
          <div>
            {isCollapsed && (
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => setIsCollapsed(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-plus-circle-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                </svg>
                <span className="fw-bold ms-2">add</span>
              </button>
            )}
            {!isCollapsed && (
              <div className="mt-3 p-2 bg-secondary bg-opacity-50 rounded">
                <div className="row d-flex justify-content-center align-items-center">
                  Q-{"  "}
                  <textarea
                    rows={1}
                    type="text"
                    value={newQ}
                    className="col-11 fs-5"
                    onChange={(e) => {
                      setNewQ(`${e.target.value}`);
                    }}
                  />
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                  {"a) "}
                  <textarea
                    rows={1}
                    type="text"
                    value={newA}
                    className="col-10 fs-5"
                    onChange={(e) => {
                      setNewA(`${e.target.value}`);
                    }}
                  />
                  <input
                    type="checkbox"
                    className="col-1"
                    checked={newCorrA == "true" ? true : false}
                    onChange={(e) => {
                      setNewCorrA(`${e.target.checked}`);
                    }}
                  />
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                  {"b) "}
                  <textarea
                    rows={1}
                    type="text"
                    value={newB}
                    className="col-10 fs-5"
                    onChange={(e) => {
                      setNewB(`${e.target.value}`);
                    }}
                  />
                  <input
                    type="checkbox"
                    className="col-1"
                    checked={newCorrB == "true" ? true : false}
                    onChange={(e) => {
                      setNewCorrB(`${e.target.checked}`);
                    }}
                  />
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                  {"c) "}
                  <textarea
                    rows={1}
                    type="text"
                    value={newC}
                    className="col-10 fs-5"
                    onChange={(e) => {
                      setNewC(`${e.target.value}`);
                    }}
                  />
                  <input
                    type="checkbox"
                    className="col-1"
                    checked={newCorrC == "true" ? true : false}
                    onChange={(e) => {
                      setNewCorrC(`${e.target.checked}`);
                    }}
                  />
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                  {"d) "}
                  <textarea
                    rows={1}
                    type="text"
                    value={newD}
                    className="col-10 fs-5"
                    onChange={(e) => {
                      setNewD(`${e.target.value}`);
                    }}
                  />
                  <input
                    type="checkbox"
                    className="col-1"
                    checked={newCorrD == "true" ? true : false}
                    onChange={(e) => {
                      setNewCorrD(`${e.target.checked}`);
                    }}
                  />
                </div>
                <div className="container row mt-2">
                  <div className="col"></div>
                  <button
                    className="btn btn-info col-2 me-1 fs-5 fw-semibold"
                    onClick={() => {
                      quiz.q.push(newQ);
                      quiz.a.push(newA);
                      quiz.b.push(newB);
                      quiz.c.push(newC);
                      quiz.d.push(newD);
                      quiz.corrA.push(newCorrA);
                      quiz.corrB.push(newCorrB);
                      quiz.corrC.push(newCorrC);
                      quiz.corrD.push(newCorrD);
                      ///
                      setIsCollapsed(true);
                      setNewQ("");
                      setNewA("");
                      setNewB("");
                      setNewC("");
                      setNewD("");
                      setNewCorrA("false");
                      setNewCorrB("false");
                      setNewCorrC("false");
                      setNewCorrD("false");
                    }}
                  >
                    add
                  </button>
                  <button
                    className="btn btn-warning col-2 ms-1 fs-5 fw-semibold"
                    onClick={() => {
                      setIsCollapsed(true);
                      setNewQ("");
                      setNewA("");
                      setNewB("");
                      setNewC("");
                      setNewD("");
                      setNewCorrA("false");
                      setNewCorrB("false");
                      setNewCorrC("false");
                      setNewCorrD("false");
                    }}
                  >
                    cancel
                  </button>
                  <div className="col"></div>
                </div>
              </div>
            )}
          </div>
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

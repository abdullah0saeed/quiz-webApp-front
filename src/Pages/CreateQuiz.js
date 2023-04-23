import { useState } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { colors } from "../config";
import { disableBtn } from "../myModules";

export default function CreateQuiz() {
  const navigate = useNavigate();

  //define global state
  const globalState = useSelector((state) => state);

  ///to store the data to be sent to db\\\\\\\\
  //to store the question
  const [q, setQ] = useState([]);

  //to store the answers
  const [a, setA] = useState([]);
  const [b, setB] = useState([]);
  const [c, setC] = useState([]);
  const [d, setD] = useState([]);

  //to store the correct answer
  const [corrA, setCorrA] = useState([]);
  const [corrB, setCorrB] = useState([]);
  const [corrC, setCorrC] = useState([]);
  const [corrD, setCorrD] = useState([]);

  ///////to hold the input data\\\\\\
  //to store the question
  const [inQ, setInQ] = useState("");

  //to store the answers
  const [inA, setInA] = useState("");
  const [inB, setInB] = useState("");
  const [inC, setInC] = useState("");
  const [inD, setInD] = useState("");

  //to store the correct answer
  const [corrInA, setCorrInA] = useState("false");
  const [corrInB, setCorrInB] = useState("false");
  const [corrInC, setCorrInC] = useState("false");
  const [corrInD, setCorrInD] = useState("false");

  //to store password used to edit
  const [password, setPassword] = useState("");
  //to view the password input
  const [submitClicked, setSumitClicked] = useState(false);

  //function to add a question to the quiz array
  const addQuestion = async () => {
    setQ([...q, inQ]);
    setA([...a, inA]);
    setB([...b, inB]);
    setC([...c, inC]);
    setD([...d, inD]);
    setCorrA([...corrA, corrInA]);
    setCorrB([...corrB, corrInB]);
    setCorrC([...corrC, corrInC]);
    setCorrD([...corrD, corrInD]);
    setInQ("");
    setInA("");
    setInB("");
    setInC("");
    setInD("");
    setCorrInA("false");
    setCorrInB("false");
    setCorrInC("false");
    setCorrInD("false");
  };

  //function to add the last question to the quiz array then send the quiz to the database

  //to store the fetch response status
  const [status, setStatus] = useState(0);

  //to store Quiz ID
  const [quizId, setQuizId] = useState(0);

  const submit = async () => {
    const data = { q, a, b, c, d, corrA, corrB, corrC, corrD, password };

    try {
      const res = await fetch(`${globalState.api.link}/quizes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      //to retrieve the quiz id
      const resJson = await res.json();
      setQuizId(resJson.id);
      if (res.status !== 200) {
        setStatus(-1);
      } else {
        setStatus(1);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <div
      style={{
        marginTop: "4%",
        marginRight: "1%",
        marginLeft: "1%",
        borderRadius: "30px",
        padding: "3%",
        backgroundColor: "#fff",
        // borderStyle: "solid",
        // borderWidth: "1px",
        boxShadow: "3px 3px 8px",
      }}
    >
      <Helmet>
        <style>{"body { background-color: #fff }"}</style>
      </Helmet>
      {/* add the Question */}
      <div className="row m-3 p-1">
        <div className="col-sm-2 col-12 text-center fs-4 fw-bold">Question</div>
        <div className="col-sm-10 col-12 d-flex">
          <textarea
            style={{ width: "90%", padding: "0.5%" }}
            value={inQ}
            onChange={(e) => {
              setInQ(e.target.value);
            }}
          />
        </div>
      </div>
      {/* add answers */}
      <div className="row m-3 p-1">
        <div className="col-sm-2 col-12 text-center fs-4 fw-bold">Answers</div>
        <div className="col-sm-2 col-12 d-flex mt-1">
          a-
          <textarea
            style={{ width: "95%", padding: "0.5%" }}
            value={inA}
            onChange={(e) => {
              setInA(e.target.value);
            }}
          />
        </div>
        <div className="col-sm-2 col-12 d-flex mt-1">
          b-
          <textarea
            style={{ width: "95%", padding: "0.5%" }}
            value={inB}
            onChange={(e) => {
              setInB(e.target.value);
            }}
          />
        </div>
        <div className="col-sm-2 col-12 d-flex mt-1">
          c-
          <textarea
            style={{ width: "95%", padding: "0.5%" }}
            value={inC}
            onChange={(e) => {
              setInC(e.target.value);
            }}
          />
        </div>
        <div className="col-sm-2 col-12 d-flex mt-1">
          d-
          <textarea
            style={{ width: "95%", padding: "0.5%" }}
            value={inD}
            onChange={(e) => {
              setInD(e.target.value);
            }}
          />
        </div>
      </div>
      {/* choose the correct answer */}
      <div className="row m-3 p-1">
        <div className="col-0 col-sm-2 text-center "></div>
        <div className="col-sm-2 col-12 d-flex justify-content-start mt-1">
          a-
          <select
            style={{
              width: "70%",
              padding: "0.5%",
              textAlign: "center",
              fontSize: "110%",
            }}
            value={corrInA}
            onChange={(e) => {
              setCorrInA(e.target.value);
            }}
          >
            <option>false</option>
            <option>true</option>
          </select>
        </div>
        <div className="col-sm-2 col-12 d-flex justify-content-start mt-1">
          b-
          <select
            style={{
              width: "70%",
              padding: "0.5%",
              textAlign: "center",
              fontSize: "110%",
            }}
            value={corrInB}
            onChange={(e) => {
              setCorrInB(e.target.value);
            }}
          >
            <option>false</option>
            <option>true</option>
          </select>
        </div>
        <div className="col-sm-2 col-12 d-flex justify-content-start mt-1">
          c-
          <select
            style={{
              width: "70%",
              padding: "0.5%",
              textAlign: "center",
              fontSize: "110%",
            }}
            value={corrInC}
            onChange={(e) => {
              setCorrInC(e.target.value);
            }}
          >
            <option>false</option>
            <option>true</option>
          </select>
        </div>
        <div className="col-sm-2 col-12 d-flex justify-content-start mt-1">
          d-
          <select
            style={{
              width: "70%",
              padding: "0.5%",
              textAlign: "center",
              fontSize: "110%",
            }}
            value={corrInD}
            onChange={(e) => {
              setCorrInD(e.target.value);
            }}
          >
            <option>false</option>
            <option>true</option>
          </select>
        </div>
      </div>
      {/* button to add a new question to the quiz  */}
      <div className="row m-3 mt-5 mb-4">
        <div className="col" />
        <div
          className="col-sm-4 col-12 btn btn-warning  fs-5 fw-bold"
          onClick={addQuestion}
        >
          Add Question
        </div>
        <div className="col" />
      </div>
      {/* button to submit questions and send them to database*/}
      <div className="row mb-3 mt-5">
        <div className="col" />
        <div
          id="submitBtn"
          className="col-sm-2 col-10 btn btn-danger  fs-5 fw-bold m-1"
          style={{ color: "#000" }}
          onClick={(e) => {
            // submit();
            disableBtn(e.target, "set password");
            setSumitClicked(true);
          }}
        >
          Submit Quiz
        </div>
        <div
          className="col-sm-2 col-10 btn btn-dark fs-5 fw-bold m-1"
          onClick={() => {
            navigate("/");
          }}
        >
          Back
        </div>
        <div className="col" />
      </div>

      {/* show view to set a quiz password */}
      {submitClicked && (
        <div className="row mt-4">
          <div className="col-sm-10 col-12 d-flex justify-content-center align-items-center row">
            <div className="col-sm-2 col-0"></div>
            <label className="col-sm-3 d-flex justify-content-sm-end fs-4">
              password:
            </label>
            <div className="col-sm-4 col-8 d-flex justify-content-sm-start ">
              <input
                className=" text-center fs-5 w-90"
                placeholder="optional"
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="col-sm-2 btn btn-info fs-5 fw-bold"
              onClick={(e) => {
                submit();
                disableBtn(e.target, "wait for ID");
              }}
            >
              OK
            </button>
          </div>
        </div>
      )}

      {/* to show the quiz id */}
      <div className="row mt-3">
        <div className="col"></div>
        <div className="col-sm-8 col-12">
          {status === 1 && (
            <div
              className="alert alert-success fw-bolder text-center"
              role={alert}
              style={{ color: "#000" }}
            >
              Quiz ID :--> {quizId}
              <br />
              Password :--> {password}
            </div>
          )}
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

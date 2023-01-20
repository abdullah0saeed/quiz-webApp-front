import { useState } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

export default function CreateQuiz() {
  //define global state
  const globalState = useSelector((state) => state);
  //to store the question
  const [q, setQ] = useState("");

  //to store the answers
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [d, setD] = useState("");

  //to store the correct answer
  const [corrA, setCorrA] = useState("false");
  const [corrB, setCorrB] = useState("false");
  const [corrC, setCorrC] = useState("false");
  const [corrD, setCorrD] = useState("false");

  //array to store all questions with answers
  const [quiz, setQuiz] = useState([]);

  //function to add a question to the quiz array
  const addQuestion = () => {
    setQuiz([...quiz, { q, a, corrA, b, corrB, c, corrC, d, corrD }]);
    setQ("");
    setA("");
    setB("");
    setC("");
    setD("");
    setCorrA("false");
    setCorrB("false");
    setCorrC("false");
    setCorrD("false");
    console.log(quiz);
  };

  //function to add the last question to the quiz array then send the quiz to the database
  const submit = async () => {
    try {
      setQuiz([...quiz, { q, a, corrA, b, corrB, c, corrC, d, corrD }]);
      const res = await fetch(`${globalState.api.link}/quizes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(quiz),
      });
      console.log(res);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <div
      style={{
        marginTop: "5%",
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
      <Helmet>
        <style>{"body { background-color: #fff }"}</style>
      </Helmet>
      {/* add the Question */}
      <div className="row m-3">
        <div className="col text-center fs-4 fw-bold">Question</div>
        <div className="col-10 d-flex">
          <textarea
            style={{ width: "90%", padding: "0.5%" }}
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
            }}
          />
        </div>
      </div>
      {/* add answers */}
      <div className="row m-3">
        <div className="col-2 text-center fs-4 fw-bold">Answers</div>
        <div className="col d-flex">
          a-
          <textarea
            style={{ width: "90%", padding: "0.5%" }}
            value={a}
            onChange={(e) => {
              setA(e.target.value);
            }}
          />
        </div>
        <div className="col d-flex">
          b-
          <textarea
            style={{ width: "90%", padding: "0.5%" }}
            value={b}
            onChange={(e) => {
              setB(e.target.value);
            }}
          />
        </div>
        <div className="col d-flex">
          c-
          <textarea
            style={{ width: "90%", padding: "0.5%" }}
            value={c}
            onChange={(e) => {
              setC(e.target.value);
            }}
          />
        </div>
        <div className="col d-flex">
          d-
          <textarea
            style={{ width: "90%", padding: "0.5%" }}
            value={d}
            onChange={(e) => {
              setD(e.target.value);
            }}
          />
        </div>
      </div>
      {/* choose the correct answer */}
      <div className="row m-3">
        <div className="col text-center "></div>
        <div className="col d-flex justify-content-start ">
          <select
            style={{
              width: "70%",
              padding: "0.5%",
              textAlign: "center",
              fontSize: "110%",
            }}
            value={corrA}
            onChange={(e) => {
              setCorrA(e.target.value);
            }}
          >
            <option>false</option>
            <option>true</option>
          </select>
        </div>
        <div className="col d-flex justify-content-start">
          <select
            style={{
              width: "70%",
              padding: "0.5%",
              textAlign: "center",
              fontSize: "110%",
            }}
            value={corrB}
            onChange={(e) => {
              setCorrB(e.target.value);
            }}
          >
            <option>false</option>
            <option>true</option>
          </select>
        </div>
        <div className="col d-flex justify-content-start">
          <select
            style={{
              width: "70%",
              padding: "0.5%",
              textAlign: "center",
              fontSize: "110%",
            }}
            value={corrC}
            onChange={(e) => {
              setCorrC(e.target.value);
            }}
          >
            <option>false</option>
            <option>true</option>
          </select>
        </div>
        <div className="col d-flex justify-content-start">
          <select
            style={{
              width: "70%",
              padding: "0.5%",
              textAlign: "center",
              fontSize: "110%",
            }}
            value={corrD}
            onChange={(e) => {
              setCorrD(e.target.value);
            }}
          >
            <option>false</option>
            <option>true</option>
          </select>
        </div>
      </div>
      {/* button to add a new question to the quiz  */}
      <div className="row m-3 mt-5">
        <div className="col" />
        <div
          className="col-4 btn btn-warning  fs-5 fw-bold"
          onClick={addQuestion}
        >
          Add new Question
        </div>
        <div className="col" />
      </div>
      {/* button to submit questions and send them to database*/}
      <div className="row m-3">
        <div className="col" />
        <div
          className="col-6 btn btn-danger  fs-5 fw-bold"
          style={{ color: "#000" }}
          onClick={submit}
        >
          Submit Quiz
        </div>
        <div className="col" />
      </div>
    </div>
  );
}

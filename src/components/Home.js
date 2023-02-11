import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ marginTop: "10%" }}>
      <div className="row  m-3">
        <div className="col "></div>
        <div className="col-6 d-flex justify-content-center ">
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
        <div className="col-6 d-flex justify-content-center ">
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
    </div>
  );
}

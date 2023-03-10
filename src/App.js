import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreateQuiz from "./components/CreateQuiz";
import TakeQuiz from "./components/TakeQuiz";
import Score from "./components/Score";
import { Provider } from "react-redux";
import Store from "./store/index";

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateQuiz />} />
          <Route path="/take" element={<TakeQuiz />} />
          <Route path="/score" element={<Score />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

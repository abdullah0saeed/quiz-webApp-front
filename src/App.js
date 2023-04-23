import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import CreateQuiz from "./Pages/CreateQuiz";
import TakeQuiz from "./Pages/TakeQuiz";
import Score from "./Pages/Score";
import { Provider } from "react-redux";
import Store from "./store/index";
import EditQuiz from "./Pages/EditQuiz";

function App() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateQuiz />} />
          <Route path="/take" element={<TakeQuiz />} />
          <Route path="/score" element={<Score />} />
          <Route path="/edit" element={<EditQuiz />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

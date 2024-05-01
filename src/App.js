import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Loading from "./components/Loading";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route
          path={`${process.env.PUBLIC_URL}/movie/:id`}
          element={<Detail />}
        />
        {/* ReactRouter에게 여기 오는 id값이 뭔지 알고 싶다 말하는 것(useParams 통해서 id 값 이용 가능) */}
        <Route
          path={`${process.env.PUBLIC_URL}/loading`}
          element={<Loading />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

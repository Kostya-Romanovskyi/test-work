import Home from "./pages/HomePage";
import TweetsPage from "./pages/TweetsPage";
import { Container } from "./App.styled";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<Home />} /> */}
        <Route path="/tweets" element={<TweetsPage />} />
      </Routes>
    </Container>
  );
}

export default App;

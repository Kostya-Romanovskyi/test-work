import Home from "./pages/HomePage";
import TweetsPage from "./pages/TweetsPage";
import { Container } from "./App.styled";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  );
}

export default App;

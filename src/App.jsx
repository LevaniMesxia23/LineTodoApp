import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignInPage />}></Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

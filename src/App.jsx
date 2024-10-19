import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MyProvider } from './context/Context'; 

function App() {
  return (
    <MyProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          
          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </MyProvider>
  );
}

export default App;

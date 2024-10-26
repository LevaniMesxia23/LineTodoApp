import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./layouts/Layout"
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MyProvider } from './context/Context'; 
import ImportantPage from "./pages/ImportantPage";
import ResultsPage from "./pages/ResultPage";
import UserLayout from "./layouts/UserLayout";
import CompletePage from "./pages/CompletePage";

function App() {
  return (
    <MyProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<UserLayout />}>
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/important" element={<ImportantPage />} />
              <Route path="/complete" element={<CompletePage />} />
              <Route path="/resultspage" element={<ResultsPage />} />

            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </MyProvider>
  );
}

export default App;

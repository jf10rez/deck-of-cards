import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DeckPage } from "../pages/DeckPage";
import { HomePage } from "../pages/HomePage";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {

    const uid = false

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <PublicRoute uid={uid}>
              <HomePage />
            </PublicRoute>
          }
        />

        <Route
          exact
          path="/deck"
          element={
            <PrivateRoute uid={uid}>
              <DeckPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  )
}

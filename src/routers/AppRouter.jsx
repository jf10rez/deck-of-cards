import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DeckContext } from "../context/deckContext";
import { DeckPage } from "../pages/DeckPage";
import { HomePage } from "../pages/HomePage";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {

    const { decks } = useContext(DeckContext)

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <PublicRoute uid={decks.existPlayers}>
              <HomePage />
            </PublicRoute>
          }
        />

        <Route
          exact
          path="/deck"
          element={
            <PrivateRoute uid={decks.existPlayers}>
              <DeckPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  )
}

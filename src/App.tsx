import DetailPage from "./pages/DetailPage";
import LandingPage from "./pages/LandingPage";
import VotePage from "./pages/VotePage";
import AdminPage from "./pages/AdminPage";
import ListPaslon from "./pages/ListPaslon";
import ListPartai from "./pages/ListPartai";
import AddPaslon from "./pages/AddPaslon";
import AddPartai from "./pages/AddPartai";
import { Routes, Route, useNavigate, Outlet, Navigate } from "react-router-dom";
import { useState } from "react";
import { IUserSignIn } from "./interface/Interface";

function App() {
  const [userSignIn, setUserSignin] = useState<IUserSignIn>();

  function PrivatRoute() {
    return userSignIn?.listas === "admin" ? <Outlet /> : <Navigate to="/" />;
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              userSignIn={userSignIn}
              setUserSignIn={setUserSignin}
            />
          }
        />
        <Route
          path="/voting"
          element={
            <VotePage userSignIn={userSignIn} setUserSignIn={setUserSignin} />
          }
        />
        <Route
          path="/detail-page"
          element={
            <DetailPage userSignIn={userSignIn} setUserSignIn={setUserSignin} />
          }
        />
        <Route
          path="/list-partai"
          element={
            <ListPartai userSignIn={userSignIn} setUserSignIn={setUserSignin} />
          }
        />

        <Route
          path="/list-paslon"
          element={
            <ListPaslon userSignIn={userSignIn} setUserSignIn={setUserSignin} />
          }
        />
        <Route element={<PrivatRoute />}>
          <Route
            path="/admin"
            element={
              <AdminPage
                userSignIn={userSignIn}
                setUserSignIn={setUserSignin}
              />
            }
          />
          <Route
            path="/add-partai"
            element={
              <AddPartai
                userSignIn={userSignIn}
                setUserSignIn={setUserSignin}
              />
            }
          />
          <Route
            path="/add-paslon"
            element={
              <AddPaslon
                userSignIn={userSignIn}
                setUserSignIn={setUserSignin}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;

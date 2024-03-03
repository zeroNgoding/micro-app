import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import VotePage from "../pages/VotePage";
import DetailPage from "../pages/DetailPage";
import ListPartai from "../pages/ListPartai";
import ListPaslon from "../pages/ListPaslon";
import { PrivatRouteAdmin } from "./PrivatRoute";
import AdminPage from "../pages/AdminPage";
import AddPartai from "../pages/AddPartai";
import AddPaslon from "../pages/AddPaslon";
import { useState } from "react";
import { IUserSignIn } from "../interface/Interface";

export default function RoutesComponent() {
  const [userSignIn, setUserSignin] = useState<IUserSignIn>();
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LandingPage userSignIn={userSignIn} setUserSignIn={setUserSignin} />
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
      <Route
        element={
          <PrivatRouteAdmin
            userSignIn={userSignIn}
            setUserSignIn={setUserSignin}
          />
        }
      >
        <Route
          path="/admin"
          element={
            <AdminPage userSignIn={userSignIn} setUserSignIn={setUserSignin} />
          }
        />
        <Route
          path="/add-partai"
          element={
            <AddPartai userSignIn={userSignIn} setUserSignIn={setUserSignin} />
          }
        />
        <Route
          path="/add-paslon"
          element={
            <AddPaslon userSignIn={userSignIn} setUserSignIn={setUserSignin} />
          }
        />
      </Route>
    </Routes>
  );
}

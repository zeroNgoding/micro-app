import React, { useState } from "react";
import Logo from "../assets/img/logoDW.png";
import HL from "../assets/img/hl.png";
import HamburgerLineMobile from "./HamburgerLineMobile";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar(props: any) {
  const navigate = useNavigate();
  const [HamburgerLin, setHamburgerLin] = useState<boolean>(false);
  const [modalLogin, setModalLogin] = useState<boolean>(false);
  const [modalRegister, setModalRegister] = useState<boolean>(false);
  const [dropdownLogout, setDropdownLogout] = useState<boolean>(false);
  const dataString: any = localStorage.getItem("UserSignIn");
  const userLogin = JSON.parse(dataString);

  return (
    <header className="bg-black fixed top-0 left-0 w-full flex items-center z-10 ">
      {modalLogin && (
        <ModalLogin
          userSignIn={props.userSignIn}
          setUserSignIn={props.setUserSignIn}
          modalLogin={modalLogin}
          setModalLogin={setModalLogin}
          setModalRegister={setModalRegister}
        />
      )}
      {modalRegister && (
        <ModalRegister
          setModalLogin={setModalLogin}
          setModalRegister={setModalRegister}
        />
      )}
      <div className="container mx-auto">
        <div className="flex items-center justify-between relative px-4 py-2">
          <div className="flex items-center gap-4">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
            <p className="font-bold text-sm lg:text-lg text-white">
              PEMILU PRESIDEN DUMBWAYS.ID
            </p>
          </div>
          <div className="flex items-center ">
            <ul className="hidden lg:flex text-white gap-4 font-semibold">
              <li>
                <Link to="/list-partai" className="cursor-pointer">
                  Partai
                </Link>
              </li>
              <li>|</li>
              <li>
                <Link to="/list-paslon" className="cursor-pointer">
                  Paslon
                </Link>
              </li>
              <li>|</li>
              <li
                className={
                  userLogin?.isLogin === "admin"
                    ? "cursor-pointer hidden"
                    : "cursor-pointer"
                }
              >
                <Link to="/voting" className="cursor-pointer">
                  Voting
                </Link>
              </li>
              <li className="cursor-pointer">
                {userLogin?.isLogin ? (
                  <>
                    {dropdownLogout && (
                      <div
                        onClick={() => {
                          localStorage.removeItem("UserSignIn");
                          return navigate("/");
                        }}
                        className="absolute top-16 right-[-8px] rounded-lg shadow-md bg-black p-2 cursor-pointer"
                      >
                        <p>Logout</p>
                      </div>
                    )}

                    <p
                      onClick={() => setDropdownLogout(!dropdownLogout)}
                      className="bg-white text-black rounded-full px-2 py-1"
                    >
                      D
                    </p>
                  </>
                ) : (
                  <>
                    <p
                      onClick={() => setModalLogin(!modalLogin)}
                      className="bg-white text-black rounded px-4 ms-5 py-1"
                    >
                      Login
                    </p>
                  </>
                )}
              </li>
            </ul>
            <div className="flex items-center absolute right-4 lg:hidden cursor-pointer">
              {userLogin?.isLogin ? (
                <p
                  onClick={() => setHamburgerLin(!HamburgerLin)}
                  className="bg-white text-black rounded-full px-2 py-1"
                >
                  D
                </p>
              ) : (
                <img
                  onClick={() => setHamburgerLin(!HamburgerLin)}
                  className="w-[30px] hover:opacity-80"
                  src={HL}
                  alt=""
                />
              )}
            </div>
            {HamburgerLin && (
              <HamburgerLineMobile
                isLogin={userLogin.isLogin}
                setIsLogin={userLogin.isLogin}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

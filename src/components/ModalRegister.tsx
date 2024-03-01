import { useState } from "react";

export default function ModalRegister(props: any) {
  const [userSignUp, setUserSignUp] = useState({
    fullname: "",
    alamat: "",
    jeniskelamin: "",
    username: "",
    password: "",
    listas: "",
  });

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    localStorage.setItem("UserSignUp", JSON.stringify(userSignUp));
    alert("register success!");
    props.setModalRegister(false);
    props.setModalLogin(true);
  };

  const handleOnChange = (e: any) => {
    setUserSignUp({
      ...userSignUp,
      [e.target.name]: e.target.value,
    });
  };

  const handleModalRegister = (e: any): any => {
    if (e.target.id === "modalRegister") {
      props.setModalRegister(false);
    }
  };
  return (
    <>
      <div
        style={{ backgroundColor: "rgba(0,0,0, .5)" }}
        className="fixed top-0 bottom-0 right-0 left-0 z-10 flex items-center justify-center"
        id="modalRegister"
        onClick={handleModalRegister}
      >
        <div className="bg-white p-5 rounded-lg">
          <form
            action=""
            className="text-sm flex flex-col gap-4"
            onSubmit={handleOnSubmit}
          >
            <h1 className="text-center py-4 text-2xl font-black">REGISTER</h1>
            <div className="flex flex-col gap-1">
              <label className="" htmlFor="fullname">
                Fullname
              </label>
              <input
                onChange={handleOnChange}
                type="text"
                className="border p-1 border-black rounded"
                id="fullname"
                name="fullname"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="" htmlFor="alamat">
                Alamat
              </label>
              <input
                onChange={handleOnChange}
                type="text"
                className="border p-1 border-black rounded"
                id="alamat"
                name="alamat"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="" htmlFor="jeniskelamin">
                Jenis Kelamain
              </label>
              <input
                onChange={handleOnChange}
                type="text"
                className="border p-1 border-black rounded"
                id="jeniskelamin"
                name="jeniskelamin"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="" htmlFor="username">
                Username
              </label>
              <input
                onChange={handleOnChange}
                type="text"
                className="border p-1 border-black rounded"
                id="username"
                name="username"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="" htmlFor="password">
                Password
              </label>
              <input
                onChange={handleOnChange}
                type="password"
                className="border p-1 border-black rounded"
                id="password"
                name="password"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="listas">ListAs</label>
              <select
                onChange={handleOnChange}
                className="border p-1 border-black rounded"
                name="listas"
                id="listas"
              >
                <option value="">...</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-red-600 py-2 rounded-lg text-white"
            >
              SUBMIT
            </button>
          </form>
          <p className="text-xs mt-4 italic text-center">
            Sudah memiliki akun?{" "}
            <span
              className="underline cursor-pointer text-blue-500"
              onClick={() => {
                props.setModalRegister(false);
                props.setModalLogin(true);
              }}
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

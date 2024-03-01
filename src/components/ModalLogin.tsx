import { useNavigate } from "react-router-dom";

export default function ModalLogin(props: any) {
  const navigate = useNavigate();
  const dataString: any = localStorage.getItem("UserSignUp");
  const dataUser = JSON.parse(dataString);

  const handleOnChange = (e: any) => {
    props.setUserSignIn({
      ...props.userSignIn,
      [e.target.name]: e.target.value,
      isLogin: true,
      listas: dataUser.listas,
    });
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();

    if (
      dataUser.username === props.userSignIn.username &&
      dataUser.password === props.userSignIn.password
    ) {
      e.preventDefault();
      props.setUserSignIn({
        ...props.userSignIn,
      });

      if (dataUser.listas === "admin") {
        navigate("/admin");
      }
      localStorage.setItem("UserSignIn", JSON.stringify(props.userSignIn));
      console.log(props.userSignIn.listas);
      // console.log();
      alert("login succses!");
      props.setModalLogin(false);
    } else {
      alert("username or password wrong!");
    }
  };

  const handleModalLogin = (e: any): any => {
    if (e.target.id === "modalLogin") {
      props.setModalLogin(false);
    }
  };
  return (
    <>
      <div
        style={{ backgroundColor: "rgba(0,0,0, .5)" }}
        className="fixed top-0 bottom-0 right-0 left-0 z-10 flex items-center justify-center"
        id="modalLogin"
        onClick={handleModalLogin}
      >
        <div className="bg-white p-5 rounded-lg">
          <form
            onSubmit={handleOnSubmit}
            action=""
            className="  text-sm flex flex-col gap-4"
          >
            <h1 className="text-center py-4 text-2xl font-black">LOGIN</h1>
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
            <button className="bg-red-600 py-2 rounded-lg text-white">
              SUBMIT
            </button>
          </form>
          <p className="text-xs mt-4 italic text-center">
            Belum memiliki akun?{" "}
            <span
              className="underline cursor-pointer text-blue-500"
              onClick={() => {
                props.setModalLogin(false);
                props.setModalRegister(true);
              }}
            >
              register
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

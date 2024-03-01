export default function HamburgerLineMobile(props: any) {
  return (
    <nav className="bg-white absolute p-5 rounded-lg shadow-lg max-w-[180px] w-full right-4 top-12">
      <ul className="block">
        <li className="group">
          <p className="text-base font-semibold text-dark py-2 justify-center flex hover:text-red-600">
            Partai
          </p>
        </li>
        <hr className="border-t-1 border-black" />
        <li className="group">
          <p className="text-base font-semibold text-dark py-2 justify-center flex hover:text-red-600">
            Paslon
          </p>
        </li>
        <hr className="border-t-1 border-black" />
        <li className="group">
          <p className="text-base font-semibold text-dark py-2 justify-center flex hover:text-red-600">
            Voting
          </p>
        </li>
        <hr className="border-t-1 border-black" />
        <li className="group">
          {props.isLogin ? (
            <p
              onClick={(): void => props.setIsLogin(!props.isLogin)}
              className="text-base font-semibold text-white bg-black hover:bg-red-600 py-2 rounded-lg justify-center flex  mt-2"
            >
              Logout
            </p>
          ) : (
            <p
              onClick={(): void => props.setIsLogin(!props.isLogin)}
              className="text-base font-semibold text-white bg-black hover:bg-red-600 py-2 rounded-lg justify-center flex  mt-2"
            >
              Login
            </p>
          )}
        </li>
      </ul>
    </nav>
  );
}

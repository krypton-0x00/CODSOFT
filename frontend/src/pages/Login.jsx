import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <div className="  h-[80vh] overflow-x-hidden  flex justify-center flex-col font-poppins  items-center gap-4">
      <h1 className="text-3xl   font-bold">Login</h1>
      <form
        action=""
        className="flex flex-col justify-center items-center gap-6"
      >
        <input
          type="text"
          placeholder="Username"
          className="bg-black border border-pink-600 px-6 py-4 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-black border border-pink-600 px-6 py-4 rounded-md"
        />
        <div className="flex flex-col gap-1  w-full">
          <Link to="/forget">
            <p className=" text-pink-600  cursor-pointer ">Forget Password</p>
          </Link>

          <p>
            Don't have an
            <Link to="/register">
              <span className=" text-pink-600 cursor-pointer "> account?</span>
            </Link>
          </p>
        </div>
        <button className="btn bg-black border-pink-600 px-12 hover:bg-pink-600">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

import { Link } from "react-router-dom";
const ForgetPage = () => {
  return (
    <div className="h-[80vh] overflow-x-hidden  flex justify-center flex-col font-poppins   items-center gap-4">
      <h1 className="text-3xl  font-bold">Forget Password</h1>
      <form
        action=""
        className="flex flex-col justify-center items-center gap-6"
      >
        <input
          type="email"
          placeholder="Email"
          className="bg-black border border-pink-600 px-6 py-4 rounded-md"
        />

        <div className="flex flex-col gap-1  w-full">
          <p>
            Already Have an
            <Link to="/login">
              <span className=" text-pink-600 cursor-pointer "> account?</span>
            </Link>
          </p>
        </div>
        <button className="btn bg-black border-pink-600 px-12 hover:bg-pink-600">
          Sent Link
        </button>
      </form>
    </div>
  );
};

export default ForgetPage;

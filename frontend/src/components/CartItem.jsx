import { MdDelete } from "react-icons/md";

function CartItem() {
  return (
    <div className="border border-blue-600 rounded-md w-full font-poppins flex justify-between items-center gap-3 overflow-hidden pr-1">
      <div className="w-[20vh] h-[20vh] overflow-hidden flex-shrink-0 rounded-2xl ">
        <img
          className="object-cover h-full"
          src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="flex justify-evenly w-full items-center">
        <div className="">
          <h1 className="text-sm ">Product Name is very long</h1>
          <p className="text-sm ">$399</p>
        </div>
        <div className="text-lg text-red-500 hover:text-red-600 transition-all flex-shrink-0">
          <MdDelete />
        </div>

        <div className="flex flex-col justify-center items-center flex-shrink-0">
          <button className="bg-white rounded-full w-5 h-5 text-black">
            +
          </button>
          <span>1</span>
          <button className="bg-white rounded-full w-5 h-5 text-black">
            -
          </button>
        </div>
        <h1 className="text-sm  flex-shrink-0">$399</h1>
      </div>
    </div>
  );
}

export default CartItem;

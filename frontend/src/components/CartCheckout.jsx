import React from "react";

function CartCheckout() {
  return (
    <div className="flex flex-col items-center gap-9 py-12">
      <h1 className="font-poppins text-xl">
        Subtotal (<span> 3 </span>items):{" "}
        <span className="font-bold">$1200</span>{" "}
      </h1>
      <button className="px-12 py-4 bg-blue-600 rounded-md text-lg">
        Checkout
      </button>
    </div>
  );
}

export default CartCheckout;

import CartCheckout from "../components/CartCheckout";
import CartItem from "../components/CartItem";

const CartPage = () => {
  return (
    <div>
      <div className=" flex  overflow-auto flex-col h-screen w-full items-center gap-4 px-6">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <CartCheckout />
    </div>
  );
};

export default CartPage;

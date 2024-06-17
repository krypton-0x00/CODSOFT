const Navbar = () => {
  return (
    <div className="text-[0.8rem] font-poppins flex justify-center py-8">
      <ul className="flex bg-slate-800 rounded-xl gap-3 h-12 w-[70vw]  items-center justify-evenly px-2 ">
        <li>Home</li>
        <li>Products</li>
        <li>Cart</li>
        <li>Wishlist</li>
      </ul>
    </div>
  );
};

export default Navbar;

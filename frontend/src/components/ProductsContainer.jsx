import ItemCard from "./ItemCard.jsx";
const ProductsContainer = () => {
  return (
    <div
      id="products"
      className="flex  justify-center items-center md:flex-row flex-col gap-4 flex-wrap "
    >
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </div>
  );
};

export default ProductsContainer;

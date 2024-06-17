function Hero() {
  return (
    <div className="flex justify-center items-center h-[50vh]">
      <div className="font-poppins   flex flex-col gap-4 justify-center items-center md:w-[50%]">
        <h1 className="text-4xl font-bold text-center">
          Discover Unique Finds: Shop the{" "}
          <span className="text-blue-600">Best Deals Now!</span>
        </h1>
        <p className="text-center font-semibold">
          Where Quality Meets Affordability
        </p>
        <button className="btn glass ">Shop Now</button>
      </div>
    </div>
  );
}

export default Hero;

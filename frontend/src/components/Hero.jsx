import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
function Hero() {
  useGSAP(() => {
    gsap.to("#text", {
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
      duration: 1,
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-[50vh]">
      <div className="font-poppins   flex flex-col gap-4 justify-center items-center md:w-[50%]">
        <h1 className="text-4xl font-bold text-center">
          Discover Unique Finds: Shop the
          <span id="text" className="text-blue-600 opacity-0">
            {" "}
            Best Deals Now!
          </span>
        </h1>
        <p className="text-center font-semibold">
          Where Quality Meets Affordability
        </p>
        <Link to="#products">
          <button
            id="btn"
            className=" border-2 border-blue-600 text-blue-600 hover:border-2 rounded-md px-4 py-3 hover:scale-110 transition-all drop-shadow-lg shadow-sm hover:shadow-blue-600"
          >
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;

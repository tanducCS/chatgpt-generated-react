import Link from "next/link";
import { Rating } from "../rating";

import Keyboard1Img from "../../assets/img1.jpg";
import Keyboard2Img from "../../assets/img2.jpg";
import Keyboard3Img from "../../assets/keyboard3.png";
import Keyboard4Img from "../../assets/keyboard4.png";


const products = [
  {
    id: 1,
    name: "Keyboard 1",
    imageSrc: Keyboard1Img.src,
    rating: 5,
    numReviews: 10,
    price: 30.000,
  },
  {
    id: 2,
    name: "Keyboard 2",
    imageSrc: Keyboard2Img.src,
    rating: 5,
    numReviews: 8,
    price: 25.000,
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col cursor-pointer">
      <div className="w-full aspect-w-1 aspect-h-1">
        <img
          src={product.imageSrc}
          alt={product.name}
          className="w-3/4 h-full object-cover"
        />
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold text-black">{product.name}</h3>
        <div className="flex items-center mt-1 mb-2">
          <Rating value={product.rating} />
          <span className="ml-2 text-gray-500">
            {product.numReviews} reviews
          </span>
        </div>
        <p className="text-black font-medium text-lg mt-auto">
          {product.price.toFixed(3)}đ
        </p>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-8 px-4">
      <h2 className="text-3xl font-bold text-black mb-12">New arrivals</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Link href="/products" legacyBehavior>
          <a className="bg-black text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-900 transition-colors duration-300">
            View All
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Products;

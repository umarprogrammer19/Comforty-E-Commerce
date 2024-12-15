"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  originalPrice?: number;
  isNew?: boolean;
  isSale?: boolean;
};

const products: Product[] = [
  { id: 1, title: "Library Stool Chair", price: 20, image: "/01.jpg" },
  {
    id: 2,
    title: "Vintage Armchair",
    price: 40,
    image: "/02.jpg",
    originalPrice: 60,
  },
  { id: 3, title: "Ergonomic Office Chair", price: 50, image: "/03.jpg" },
  { id: 4, title: "Modern Dining Chair", price: 35, image: "/04.jpg" },
  {
    id: 5,
    title: "Reclining Lounge Chair",
    price: 60,
    image: "/05.jpg",
    isSale: true,
  },
  {
    id: 6,
    title: "Adjustable Desk Chair",
    price: 25,
    image: "/06.jpg",
    isNew: true,
  },
  { id: 7, title: "Classic Bar Stool", price: 30, image: "/07.jpg" },
  {
    id: 8,
    title: "Sleek High Chair",
    price: 15,
    image: "/08.jpg",
    isSale: true,
  },
  { id: 9, title: "Foldable Outdoor Chair", price: 10, image: "/09.jpg" },
  {
    id: 10,
    title: "Leather Recliner Chair",
    price: 150,
    image: "/10.jpg",
    isSale: true,
    originalPrice: 200,
  },
];

export default function ProductDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [productId, setProductId] = useState<string | null>(null);
  const [product, setProduct] = useState<Product | null>(null);
   console.log(productId)
  useEffect(() => {
    const unwrapParams = async () => {
      try {
        const resolvedParams = await params;
        setProductId(resolvedParams.id);

        const foundProduct = products.find(
          (item) => item.id === Number(resolvedParams.id)
        );
        setProduct(foundProduct || null);
      } catch (error) {
        console.error("Error fetching product:", error);
        setProductId(null);
      }
    };

    unwrapParams();
  }, [params]);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-700 text-xl font-medium">Product not found</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="flex max-w-4xl w-full">
        {/* Image Section */}
        <div className="w-1/2 p-4">
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={500}
            className="rounded-lg"
          />
        </div>

        {/* Product Details Section */}
        <div className="w-1/2 p-4">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <button className="mt-4 mb-4 bg-[#007580] text-white font-semibold py-2 px-4 rounded">
            ${product.price}
          </button>
          {product.originalPrice && (
            <p className="text-sm text-gray-500 line-through mt-2">
              Original Price: ${product.originalPrice}
            </p>
          )}
          <p className="text-gray-700 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            fugiat explicabo iusto qui exercitationem distinctio, perspiciatis
            dolore provident cum eveniet error illo esse accusamus voluptatibus
            ducimus impedit laudantium deleniti repellendus.
          </p>
          <button className="mt-4 bg-[#007580] text-white font-semibold py-2 px-4 rounded">
            Add To Cart
          </button>
          {product.isNew && (
            <span className="text-sm text-green-600 font-medium mt-2 block">
              New Arrival
            </span>
          )}
          {product.isSale && (
            <span className="block text-sm text-red-600 font-medium mt-2">
              On Sale!
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

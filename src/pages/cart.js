import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/contexts/CartContext";

export default function Cart() {
  const [summary, setSummary] = useState(0);
  const { cart } = useContext(CartContext);

  const total = () => {
    let total = 0;
    cart.forEach((value) => {
      total += value.price;
    });
    setSummary(total);
  };

  useEffect(() => {
    total();
  }, [cart]);

  return (
    <section className="">
      <h1 className="mb-5 font-bold text-2xl">Cart</h1>
      <div className="flex gap-5">
        <div className="w-full">
          {cart.map((value) => (
            <div
              key={value.id}
              className="flex flex-col items-center mb-5 bg-white border border-gray-200 rounded-lg shadow p-2 md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <div className="w-[100px] h-[100px] bg-red-50 flex-none">
                <Image
                  className="object-cover w-full h-[100px] object-cover bg-red-200"
                  src={value.image}
                  alt={value.title}
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  ${value.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  ${value.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[300px]">
          <div className="p-5 bg-amber-100">
            <h2 className="mb-5">Total Belanja</h2>
            <p className="my-3">${summary}</p>
            <button className="bg-green-500 p-3 w-full">Checkout</button>
          </div>
        </div>
      </div>
    </section>
  );
}
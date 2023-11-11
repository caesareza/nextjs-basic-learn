import MetaHead from "@/components/MetaHead";
import Link from "next/link";

import { useContext, useState } from "react";
// import { CartContext } from "@/contexts/CartContext";

import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";

export default function ProductDetail({ data }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isAlert, setIsAlert] = useState(false);
  // const { cart, setCart, onAddToCart } = useContext(CartContext);

  const dispatch = useDispatch()

  const onInsertToCart = () => {
    setIsAlert(false);
    setIsLoading(true);
    dispatch(addToCart(data))
    setIsAlert(true);
    setIsLoading(false);
  };

  return (
    <section>
      <MetaHead
        title={data.title}
        description={data.description}
        image={data.image}
        url={`${process.env.NEXT_PUBLIC_HOST_NAME}/product/${data.id}`}
      />

      {isAlert && (
        <div
          id="alert-3"
          class="flex items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <svg
            class="flex-shrink-0 w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span class="sr-only">Info</span>
          <div class="ml-3 text-sm font-medium">
            Tambah product berhasil{" "}
            <Link
              href="/cart"
              class="font-semibold underline hover:no-underline"
            >
              Lihat Keranjang
            </Link>
          </div>
          <button
            type="button"
            class="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
            data-dismiss-target="#alert-3"
            aria-label="Close"
          >
            <span class="sr-only">Close</span>
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
          </button>
        </div>
      )}

      <div className="flex flex-col md:flex-row lg:flex-row gap-5">
        <div className="w-full lg:w-[200px]">
          <img
            src={data.image}
            alt={data.title}
            width={200}
            className="w-full"
          />
        </div>
        <div className="pt-10 ml-5">
          <h1 className="text-xl font-bold">{data.title}</h1>
          <div className="font-bold">{data.category}</div>
          <div className="text-green-600 font-bold">{data.price}</div>
          <p className="py-3">{data.description}</p>

          <button
            onClick={onInsertToCart}
            className="font-bold bg-amber-300 rounded p-3 mt-5 hover:bg-pink-500"
            disable={isLoading}
          >
            {isLoading ? "Loading..." : "Add to Cart"}
          </button>
        </div>
      </div>
    </section>
  );
}

export async function getServerSideProps(context) {
  const {
    query: { id },
  } = context;
  // const id = context.query.id

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_HOST_API}/products/${id}`
  );
  const data = await response.json();

  return {
    props: { data },
  };
}

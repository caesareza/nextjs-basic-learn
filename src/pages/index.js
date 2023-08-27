import MetaHead from "@/components/MetaHead";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
    // const response = await fetch(process.env.NEXT_PUBLIC_HOST_API + '/products')
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_HOST_API}/products`
    );
    const data = await response.json();

    setProduct(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <MetaHead
        title="Home"
        description="Ini adalah halaman home"
        image={`${process.env.NEXT_PUBLIC_HOST_NAME}/images/logo/nike.svg`}
        url={process.env.NEXT_PUBLIC_HOST_NAME}
      />

      <section>
        {product.length > 0
          ? product?.map((value) => (
              <Link
                key={value.id}
                href={`/product/${value.id}`}
                className="flex flex-col items-center mb-5 bg-white border border-gray-200 rounded-lg shadow p-2 md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <div className="w-72 h-[265px] bg-red-50 flex-none">
                  <Image
                    className="object-cover w-full h-[265px] object-cover bg-red-200"
                    src={value.image}
                    alt={value.title}
                    width={500}
                    height={500}
                  />
                </div>
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {value.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {value.description}
                  </p>
                </div>
              </Link>
            ))
          : [0, 1, 2, 3, 4].map((index) => (
              <div
                key={index}
                role="status"
                className="mb-5 p-3 border border-gray-200 rounded-lg shadow space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
              >
                <div className="flex items-center justify-center w-full h-64 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                  <svg
                    className="w-10 h-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                  </svg>
                </div>
                <div className="w-full">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                </div>
                <span className="sr-only">Loading...</span>
              </div>
            ))}
      </section>
    </>
  );
}

export async function getServerSideProps({ req, res }) {
  res.setHeader("Cache-Control", "public, max-age=31536000, immutable");

  return {
    props: {},
  };
}

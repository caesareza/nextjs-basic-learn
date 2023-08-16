import MetaHead from "@/components/MetaHead";
import {useEffect, useState} from "react";
import Link from 'next/link';

export default function Home() {
  const [product, setProduct] = useState([])

  const fetchProduct = async () => {
    // const response = await fetch(process.env.NEXT_PUBLIC_HOST_API + '/products')
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_API}/products`)
    const data = await response.json()

    setProduct(data)
  }

  useEffect(() => {
    console.log('process.env.NEXT_PUBLIC_TWITTER_URL', process.env.NEXT_PUBLIC_TWITTER_URL)
    console.log('process.env.NEXT_PUBLIC_TWITTER_URL', process.env.NEXT_PUBLIC_FACEBOOK_URL)
    console.log('process.env.NEXT_PUBLIC_TWITTER_URL', process.env.NEXT_PUBLIC_IG_URL)

    fetchProduct()
  }, [])

  return (
    <>
    <MetaHead
      title="Home"
      description="Ini adalah halaman home"
      image={`${process.env.NEXT_PUBLIC_HOST_NAME}/images/logo/nike.svg`}
      url={process.env.NEXT_PUBLIC_HOST_NAME}
    />

    <section>
      {product?.map((value) => (
        <Link key={value.id} href={`/product/${value.id}`} class="flex flex-col items-center mb-5 bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={value.image} alt={value.title} />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{value.title}</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{value.description}</p>
            </div>
        </Link>
      ))}
    </section>
    </>
  )
}
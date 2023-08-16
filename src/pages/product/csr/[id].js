import MetaHead from "@/components/MetaHead";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

export default function ProductDetail() {
    const [data, setData] = useState()
    
    const router = useRouter()
    
    const fetchDataProduct = async (id) => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        const product = await response.json()
        
        setData(product)
    }
    
    useEffect(() => {
        if(router.query.id) {
            fetchDataProduct(router.query.id)
        }
    }, [router])
    
    if (!data) return 'Loading ...'
    
    return(
        <section>
            <MetaHead
                title={data.title}
                description={data.description}
                image={data.image}
                url={`http://localhost:3000/product/${data.id}`}
            />
            
            <h1>{data.title}</h1>
            <div>{data.category}</div>
            <div>{data.price}</div>
            <div><img src={data.image} alt={data.title} width={200} /></div>
            <p>{data.description}</p>
        </section>
    )
}
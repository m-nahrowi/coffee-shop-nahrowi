import Footer from "../../components/footer"
import Navbar from "../../components/navbar"
import Link from 'next/link'
import Head from 'next/head'
import ProductCustLayout from "../../layouts/user/product-customer"


const ProductCust = ({product}) => {
    console.log(product)
    return (


        <>
       <ProductCustLayout product={product} />
        </>

    )
}

export async function getServerSideProps (){
    const result = await fetch("http://localhost:44342/api/v1/product")

    const product = await result.json()

    return {
        props:{product}
    }
}




export default ProductCust
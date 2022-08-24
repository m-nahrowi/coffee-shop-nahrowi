import ProductCustDetailLayout from "../../layouts/user/product-customer-detail"


const ProductCustDetail = ({productDetail}) => {
    console.log(productDetail)
    return (
        <>
        <ProductCustDetailLayout productDetail={productDetail} />
        </>
    )
}

export async function getServerSideProps (){
    const result = await fetch("http://localhost:44342/api/v1/product")

    const productDetail = await result.json()

    return {
        props:{productDetail}
    }
}

export default ProductCustDetail

import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../../components/layout'
import axios from 'axios'
import functions from 'daisyui/src/colors/functions'
import toRupiah from '@develoka/angka-rupiah-js';


const ProductCustLayout = ({ product }) => {
    console.log(product, "ini baru")
    let content
  
    content = product.data.map(item => {
        return (
            <Link href={'/product-customer-detail'}>
                <a>
                <div className="w-32 text-center mb-5 shadow-2xl rounded-2xl mr-10 ">
                    <div class="avatar">
                        <div class="w-24 rounded-full">
                            <img src={`http://localhost:44342/static/${item.picture}`} />
                        </div>
                    </div>
                    <h1 className="font-extrabold text-2xl">
                        {item.title}
                    </h1>
                    <p className="mb-5 font-bold text-[#6A4029]">
                        IDR {item.price}
                    </p>
                </div>
                </a>
            </Link>
        )
    })
    return (

        <>
            {/* <Head>
                <title>Product</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <Navbar /> */}
            <Layout title={'Product'}>
                <div className='flex flex-row mt-10'>
                    {/* kiri */}
                    <div className="flex flex-col w-2/5 border">
                        <div className="mx-10 mt-5">
                            <h1 className="text-2xl text-[#6A4029] text-center font-bold">
                                Promo Today
                            </h1>
                            <p className='text-center mt-3 mb-10'>
                                Coupons will be updated every weeks. Check them out!
                            </p>
                            <div className="mt-10">
                                <div className="flex flex-row bg-[#88B788] rounded-xl mb-3 px-1 py-2">
                                    <img src="image/mother.svg" />
                                    <div className="flex flex-col">
                                        <h1 className="font-bold text-lg mt-2">
                                            HAPPY MOTHER’S DAY!
                                        </h1>
                                        <p>
                                            Get one of our favorite menu for free!
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row bg-yellow-300 rounded-xl mb-3 px-1 py-2">
                                    <img src="image/father.svg" />
                                    <div className="flex flex-col">
                                        <h1 className="font-bold text-lg mt-2">
                                            Get a cup of coffee for free on sunday morning
                                        </h1>
                                        <p>
                                            Only at 7 to 9 AM
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row bg-[#88B788] rounded-xl mb-3 px-1 py-2">
                                    <img src="image/mother.svg" />
                                    <div className="flex flex-col">
                                        <h1 className="font-bold text-lg mt-2">
                                            HAPPY MOTHER’S DAY!
                                        </h1>
                                        <p>
                                            Get one of our favorite menu for free!
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row bg-[#C59378] rounded-xl mb-3 px-2 py-2">
                                    <img src="image/grandfa.svg" />
                                    <div className="flex flex-col">
                                        <h1 className="font-bold text-lg mt-2">
                                            HAPPY HALLOWEEN!
                                        </h1>
                                        <p>
                                            Do you like chicken wings? Get 1 free only if you buy pinky promise
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-14">
                                    <button className="bg-[#6A4029] rounded-xl w-full py-4 text-white font-bold text-lg">
                                        Apply Coupon
                                    </button>
                                </div>
                                <div className="mt-14 mb-10">
                                    <h1 className="font-bold">
                                        Terms and Condition
                                    </h1>
                                    <p>
                                        1. You can only apply 1 coupon per day
                                    </p>
                                    <p>
                                        2. It only for dine in
                                    </p>
                                    <p>
                                        3. Buy 1 get 1 only for new user
                                    </p>
                                    <p>
                                        4. Should make member card to apply coupon
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* kanan */}
                    <div className="flex flex-col bg-white w-3/4 border ">
                        <div className="flex flex-row justify-evenly mx-36 text-gray-400 mt-5 font-bold rounded-md py-2">
                            <div className="text-extra text-xl text-[#6A4029] underline">
                                <Link href='/'>
                                    Favorite & Promo
                                </Link>
                            </div>
                            <div className="text-bold text-xl">
                                <Link href='/'>
                                    Coffee
                                </Link>
                            </div>
                            <div className="text-bold text-xl">
                                <Link href='/'>
                                    Non Coffee
                                </Link>
                            </div>
                            <div className="text-bold text-xl">
                                <Link href='/'>
                                    Foods
                                </Link>
                            </div>
                            <div className="text-bold text-xl">
                                <Link href='/'>
                                    Add-On
                                </Link>
                            </div>
                        </div>
                        <div className="mx-32 mt-20 flex flex-row justify-evenly items-center flex-wrap">
                            {content}
                            {/* <div className="w-32 text-center mb-5 shadow-2xl rounded-2xl mr-10">
                                <div class="avatar">
                                    <div class="w-24 rounded-full">
                                        <img src="image/tomato.png" />
                                    </div>
                                </div>
                                <h1 className="font-extrabold text-2xl">
                                    Veggie tomato mix
                                </h1>
                                <p className="mb-5">
                                    IDR 34.000
                                </p>
                            </div> */}

                            {/* <div className="w-32 text-center mb-5 shadow-2xl rounded-2xl mr-10">
                                <div class="avatar">
                                    <div class="w-24 rounded-full">
                                        <img src="image/tomato.png" />
                                    </div>
                                </div>
                                <h1 className="font-extrabold text-2xl">
                                    Veggie tomato mix
                                </h1>
                                <p className="mb-5">
                                    IDR 34.000
                                </p>
                            </div>

                            <div className="w-32 text-center mb-5 shadow-2xl rounded-2xl mr-10">
                                <div class="avatar">
                                    <div class="w-24 rounded-full">
                                        <img src="image/tomato.png" />
                                    </div>
                                </div>
                                <h1 className="font-extrabold text-2xl">
                                    Veggie tomato mix
                                </h1>
                                <p className="mb-5">
                                    IDR 34.000
                                </p>
                            </div>

                            <div className="w-32 text-center mb-5 shadow-2xl rounded-2xl mr-10">
                                <div class="avatar">
                                    <div class="w-24 rounded-full">
                                        <img src="image/tomato.png" />
                                    </div>
                                </div>
                                <h1 className="font-extrabold text-2xl">
                                    Veggie tomato mix
                                </h1>
                                <p className="mb-5">
                                    IDR 34.000
                                </p>
                            </div>
                        </div>

                        <div className="mx-56 mt-10 flex flex-row justify-evenly">
                            <div className="w-32 text-center mb-5 shadow-2xl rounded-2xl mr-10">
                                <div class="avatar">
                                    <div class="w-24 rounded-full">
                                        <img src="image/tomato.png" />
                                    </div>
                                </div>
                                <h1 className="font-extrabold text-2xl">
                                    Veggie tomato mix
                                </h1>
                                <p className="mb-5">
                                    IDR 34.000
                                </p>
                            </div>

                            <div className="w-32 text-center mb-5 shadow-2xl rounded-2xl mr-10">
                                <div class="avatar">
                                    <div class="w-24 rounded-full">
                                        <img src="image/tomato.png" />
                                    </div>
                                </div>
                                <h1 className="font-extrabold text-2xl">
                                    Veggie tomato mix
                                </h1>
                                <p className="mb-5">
                                    IDR 34.000
                                </p>
                            </div>

                            <div className="w-32 text-center mb-5 shadow-2xl rounded-2xl mr-10">
                                <div class="avatar">
                                    <div class="w-24 rounded-full">
                                        <img src="image/tomato.png" />
                                    </div>
                                </div>
                                <h1 className="font-extrabold text-2xl">
                                    Veggie tomato mix
                                </h1>
                                <p className="mb-5">
                                    IDR 34.000
                                </p>
                            </div>

                            <div className="w-32 text-center mb-5 shadow-2xl rounded-2xl mr-10">
                                <div class="avatar">
                                    <div class="w-24 rounded-full">
                                        <img src="image/tomato.png" />
                                    </div>
                                </div>
                                <h1 className="font-extrabold text-2xl">
                                    Veggie tomato mix
                                </h1>
                                <p className="mb-5">
                                    IDR 34.000
                                </p>
                            </div>
                        </div>

                        <div className="mx-56 mt-10 flex flex-row justify-evenly">
                            <div className="w-32 text-center mb-5 shadow-2xl rounded-2xl mr-10">
                                <div class="avatar">
                                    <div class="w-24 rounded-full">
                                        <img src="image/tomato.png" />
                                    </div>
                                </div>
                                <h1 className="font-extrabold text-2xl">
                                    Veggie tomato mix
                                </h1>
                                <p className="mb-5">
                                    IDR 34.000
                                </p>
                            </div>

                            <div className="w-32 text-center mb-5 shadow-2xl rounded-2xl mr-10">
                                <div class="avatar">
                                    <div class="w-24 rounded-full">
                                        <img src="image/tomato.png" />
                                    </div>
                                </div>
                                <h1 className="font-extrabold text-2xl">
                                    Veggie tomato mix
                                </h1>
                                <p className="mb-5">
                                    IDR 34.000
                                </p>
                            </div>

                            <div className="w-32 text-center mb-5 shadow-2xl rounded-2xl mr-10">
                                <div class="avatar">
                                    <div class="w-24 rounded-full">
                                        <img src="image/tomato.png" />
                                    </div>
                                </div>
                                <h1 className="font-extrabold text-2xl">
                                    Veggie tomato mix
                                </h1>
                                <p className="mb-5">
                                    IDR 34.000
                                </p>
                            </div>

                            <div className="w-32 text-center mb-5 shadow-2xl rounded-2xl mr-10">
                                <div class="avatar">
                                    <div class="w-24 rounded-full">
                                        <img src="image/tomato.png" />
                                    </div>
                                </div>
                                <h1 className="font-extrabold text-2xl">
                                    Veggie tomato mix
                                </h1>
                                <p className="mb-5">
                                    IDR 34.000
                                </p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </Layout>
        </>

    )
}


// export async function getServerSideProps (){
//     const result = await fetch("http://localhost:44342/api/v1/product")

//     const product = await result.json()

//     return {
//         props:{product}
//     }
// }

// export const getServerSideProps = async ()=>{
//     let saveData = []
//     try {

//         const result = await axios({
//             method: "GET",
//             url : "http://localhost:44342/api/v1/product"

//         })

//         saveData = result

//     } catch (error) {
//         console.log("error mas")
//     }

//     return {
//         props:{saveData}
//     }
// }

export default ProductCustLayout
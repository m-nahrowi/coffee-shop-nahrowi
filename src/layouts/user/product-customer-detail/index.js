
import Layout from '../../../components/layout'


const ProductCustDetailLayout = ({ productDetail }) => {
    console.log(productDetail, 'new data han')
    let content
    content = productDetail.data.map(item => {
        return (
            <div className="flex justify-center mx-32 mt-10">
                <div class="avatar">
                    <div class="w-44 rounded-full">
                        {/* <img src="image/kopiHitam.png" /> */}
                        <img src={`http://localhost:44342/static/${item.picture}`} />
                    </div>
                </div>
            </div>
        )

    })
    return (
        <>
            <Layout title={'Product detail'}>
                <div className="flex flex-col">
                    <div className="flex flex-row mx-32 rounded-xl">
                        <div className="flex flex-col w-1/2">
                            <p className="font-bold text-xl text-[#4F5665]">Favorite & Promo <span className="text-[#6A4029] font-bold">{'>'} Cold Brew </span> </p>
                            <div className="">

                                <div className="flex justify-center mx-32 mt-10">
                                    <div class="avatar">
                                        <div class="w-44 rounded-full">
                                            <img src="image/kopiHitam.png" />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col shadow-2xl rounded-xl border mx-4 mt-24">
                                    <div className="mx-5 my-5">
                                        <h1 className="font-bold text-xl">
                                            Delivery and Time
                                        </h1>
                                        <div className="flex flex-row mb-5 mt-5 text-white">
                                            <p className="bg-[#6A4029] py-1 px-1 mr-2 rounded-md">
                                                Dine in
                                            </p>
                                            <p className=" bg-[#6A4029] py-1 px-1 mr-2 rounded-md">
                                                Door Delivery
                                            </p>
                                            <p className=" bg-[#6A4029] py-1 px-1 mr-2 rounded-md">
                                                Pick up
                                            </p>
                                        </div>
                                        <div className="flex flex-row">
                                            <p className="mr-7">
                                                Now
                                            </p>
                                            <p className="mr-3 bg-[#6A4029] px-3 rounded-md text-white">
                                                Yes
                                            </p>
                                            <p>
                                                No
                                            </p>
                                        </div>
                                        <div className="flex flex-row my-5">
                                            <p className="mr-5">
                                                Set Time
                                            </p>
                                            <input className="text-sm py-1 px-1 rounded-md bg-[#F4F4F8] border " type="text" placeholder="Enter time for reservation" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full shadow-2xl rounded-xl">
                            <h1 className="uppercase text-4xl font-extrabold text-center mt-20">
                                COLD BREW
                            </h1>
                            <div className="mx-28 mt-12">
                                <p className="text-justify">
                                    Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.
                                </p>
                                <p className="mt-7">
                                    Delivery only on Monday to friday at  1 - 7 pm
                                </p>
                            </div>
                            <div className="flex flex-row justify-between mt-10 mx-28">
                                <div className="flex flex-row border rounded-lg text-xl font-extrabold text-[#6A4029]">
                                    <p className="border px-3 py-1">-</p>
                                    <p className="border px-3 py-1">2</p>
                                    <p className="border px-3 py-1 ">+</p>
                                </div>

                                <div className="font-bold text-xl">
                                    <p className="uppercase">IDR 30.000</p>
                                </div>

                            </div>
                            <div className="mt-12 mx-28">
                                <button className="mb-3 w-full font-bold bg-[#6A4029] rounded-lg py-3 text-white">
                                    Add to Cart
                                </button>
                                <button className="w-full font-bold bg-[#FFBA33] rounded-lg py-3 text-[#6A4029]">
                                    Ask a Staff
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row mt-5 mx-32 justify-center">
                        <div className="flex flex-row mr-3 mx-4">
                            <div className="flex flex-col w-56 items-center rounded-2xl shadow-2xl">
                                <div className="my-3">
                                    <h1 className="font-bold text-xl mt-2 mb-3">
                                        Choose a size
                                    </h1>
                                    <div className="flex flex-row text-xl font-bold justify-between">
                                        <button className="rounded-full bg-[#FFBA33] w-10 h-10 mr-2">
                                            R
                                        </button>
                                        <button className="rounded-full bg-[#FFBA33] w-10 h-10 mr-2">
                                            L
                                        </button>
                                        <button className="rounded-full bg-[#FFBA33] w-10 h-10 mr-2">
                                            XL
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* w-full */}
                        <div className="w-full rounded-xl shadow-2xl">
                            <div className="flex flex-row mx-10 justify-between">
                                <div className="flex flex-row ">
                                    <div class="avatar mt-5 ">
                                        <div class="w-14 h-14 rounded-full">
                                            <img src="image/kopiHitam.png" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col mt-5 ml-10">
                                        <h1 className="font-bold text-lg">
                                            COLD BREW
                                        </h1>
                                        <p className="text-lg">
                                            xl (Large)
                                        </p>
                                        <p className="text-lg">
                                            xl (Regular)
                                        </p>

                                    </div>
                                </div>

                                <div className="flex flex-row my-10 items-center">
                                    <p className="mr-5 font-extrabold text-2xl">
                                        Checkout
                                    </p>
                                    <img className="px-1 py-1 w-10 h-10 bg-[#FFBA33] rounded-full" src="image/arrow-next-fill.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default ProductCustDetailLayout
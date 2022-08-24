import Footer from "../../../components/footer"
import Navbar from "../../../components/navbar"
import NavbarLogin from "../../../components/NavbarLogin"
import Head from 'next/head'
import ManageAdmin from "../../../pages/admin/manage-order"

const ManageAdminPayment = () => {
    return (
        <>
            <Head>
                <title>Order manage</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <NavbarLogin />
            <div className="flex flex-col mt-3">
                <div>
                    <img className='w-[100%] h-[120vh] bg-cover relative' src='/image/paymen-bg.png' />
                </div>
                <div className="flex flex-row justify-center absolute mx-32 my-16">
                    <div className="flex flex-col w-1/2">
                        <div className="mb-10 ">
                            <h1 className="text-4xl font-extrabold text-white mx-24 shadow-2xl">
                                Finish your customer order now
                            </h1>
                        </div>
                        <div className="flex flex-col">
                            <div className="mx-24">
                                <div className="border bg-white rounded-3xl shadow-2xl px-5">
                                    <h1 className="text-black text-2xl text-center mt-10 font-extrabold">
                                        Delivery Order
                                    </h1>
                                    <p className="text-center mb-5">
                                        for <span>Zulaikha</span>
                                    </p>
                                    <div className="flex flex-row justify-between mb-5">
                                        <div className="flex flex-row items-center">
                                            <div class="avatar">
                                                <div class="w-24 rounded-xl">
                                                    <img src="/image/kopi-bunga.png" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col ml-5">
                                                <p>
                                                    Hazelnut Lattte
                                                </p>
                                                <p>
                                                    x 1
                                                </p>
                                                <p>
                                                    Regular
                                                </p>
                                            </div>

                                        </div>
                                        <div className="flex items-center">
                                            <p>
                                                IDR 24.0
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between mb-5">
                                        <div className="flex flex-row items-center">
                                            <div class="avatar">
                                                <div class="w-24 rounded-xl">
                                                    <img src="/image/gorengan.png" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col ml-5">
                                                <p>
                                                    Hazelnut Lattte
                                                </p>
                                                <p>
                                                    x 1
                                                </p>
                                                <p>
                                                    Regular
                                                </p>
                                            </div>

                                        </div>
                                        <div className="flex items-center">
                                            <p>
                                                IDR 24.0
                                            </p>
                                        </div>
                                    </div>
                                    <hr />

                                    <div className="flex flex-row justify-between mt-5">
                                        <div className="flex flex-col">
                                            <p>
                                                SUBTOTAL
                                            </p>
                                            <p>
                                                TAX & FEES
                                            </p>
                                            <p>
                                                SHIPPING
                                            </p>

                                        </div>
                                        <div className="flex flex-col">
                                            <p>
                                                IDR 120.000
                                            </p>
                                            <p>
                                                IDR 20.000
                                            </p>
                                            <p>
                                                IDR 10.000
                                            </p>

                                        </div>

                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <h1 className="mt-10 text-2xl font-bold mb-10">
                                            TOTAL
                                        </h1>
                                        <h1 className="mt-10 text-2xl font-bold mb-1">
                                            IDR 150.000
                                        </h1>
                                    </div>
                                </div>
                                <button className="bg-[#FFBA33] w-full p-3 rounded-lg mt-5 text-lg font-bold">
                                    Swipe up to see upcoming orders
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="flex flex-col px-24 py-24">
                            <div>
                                <div className="flex flex-row justify-between mb-5 mx-3 text-white">
                                    <p className="font-bold text-xl shadow-2xl">
                                        Address
                                    </p>
                                    <p className="font-bold text-lg shadow-2xl">
                                        edit
                                    </p>
                                </div>
                                <div className="border shadow-2xl bg-white rounded-2xl px-5 py-5">
                                    <p>
                                        <span className="font-bold">Delivery</span> to iskandar Street
                                    </p>
                                    <hr />
                                    <p>
                                        Km 5 refinery road oppsite re
                                        public road, effurun, Jakarta
                                    </p>
                                    <hr />
                                    <p>
                                        +62 81348287878
                                    </p>
                                </div>
                            </div>


                            <div className="mt-12">
                                <div className="flex flex-row mb-5 mx-3">
                                    <p className="text-white font-bold text-xl shadow-2xl">
                                        Payment Method
                                    </p>
                                </div>
                                <div className="border shadow-2xl bg-white rounded-2xl px-5 py-5">
                                    <div className="flex flex-row mb-3 items-center">
                                        <div class="form-control">
                                            {/* <label class="label cursor-pointer"> */}
                                            {/* <span class="label-text">Red pill</span> */}
                                            <input type="radio" name="radio-6" class="radio checked:bg-blue-500" checked />
                                            {/* </label> */}
                                        </div>
                                        <img className="h-8 w-8 py-1 px-1 border ml-2 bg-green-600 rounded-md" src="/image/card.svg" />
                                        <p className="ml-2">
                                            Card
                                        </p>
                                    </div>

                                    <div className="flex flex-row mb-3 items-center">
                                        <div class="form-control">
                                            {/* <label class="label cursor-pointer"> */}
                                            {/* <span class="label-text">Red pill</span> */}
                                            <input type="radio" name="radio-6" class="radio checked:bg-blue-500" checked />
                                            {/* </label> */}
                                        </div>
                                        <img className="h-8 w-8 py-1 px-1 border ml-2 bg-[#6A4029] rounded-md" src="/image/bank.svg" />
                                        <p className="ml-2">
                                            Card
                                        </p>
                                    </div>

                                    <div className="flex flex-row mb-3 items-center">
                                        <div class="form-control">
                                            {/* <label class="label cursor-pointer"> */}
                                            {/* <span class="label-text">Red pill</span> */}
                                            <input type="radio" name="radio-6" class="radio checked:bg-blue-500" checked />
                                            {/* </label> */}
                                        </div>
                                        <img className="h-8 w-8 py-1 px-1 border ml-2 bg-[#FFBA33] rounded-md" src="/image/mobil.svg" />
                                        <p className="ml-2">
                                            Card
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <button className=" mt-16 rounded-xl text-white font-bold text-xl w-full px-2 py-3 bg-[#6A4029]">
                                Marks as done
                            </button>

                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default ManageAdminPayment
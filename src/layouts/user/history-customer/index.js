import Footer from "../../../components/footer"
import Navbar from "../../../components/navbar"
import NavbarLogin from "../../../components/NavbarLogin"
import Head from 'next/head'

const HistoryCustLayout = () => {
    return (
        <>
            {/* <Navbar /> */}
            <Head>
                <title>History</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <NavbarLogin />
            <div className="flex flex-col">
                <div className="">
                    <img className="w-[100%] h-[120vh] bg-cover relative" src="/image/bg-lampu.png" />
                </div>
                <div className="mb-10 text-center mx-28 absolute ">
                    <h1 className="text-center text-3xl font-bold mb-5 mt-10 text-white">
                        Let’s see what you have bought!
                    </h1>
                    <p className="text-xl text-white">
                        Select item to delete
                    </p>
                    <p className="text-right text-white mr-36 font-bold text-lg">
                        Select
                    </p>
                    {/* </div> */}
                    <div className="flex flex-col">
                        <div className="flex flex-row mx-28 justify-center mt-5">
                            <div className="flex flex-row mr-5">
                                <div className="flex flex-row justify-between bg-white shadow-2xl w-80 px-3 py-3 rounded-xl mr-5">
                                    <div className="flex flex-row ">
                                        <div class="avatar">
                                            <div class="w-16 h-16 rounded-full">
                                                <img src="image/sayur.png" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5">
                                            <h1 className="font-bold text-xl">
                                                Veggie tomato mix
                                            </h1>
                                            <p className="text-[#895537] text-left">
                                                IDR 34.000
                                            </p>
                                            <p className="text-[#895537] text-left">
                                                Delivered
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-end">
                                        <input type="checkbox" class="checkbox" />
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between bg-white shadow-2xl w-80 px-3 py-3 rounded-xl mr-5">
                                    <div className="flex flex-row">
                                        <div class="avatar">
                                            <div class="w-16 h-16 rounded-full">
                                                <img src="image/sayur.png" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5">
                                            <h1 className="font-bold text-xl">
                                                Veggie tomato mix
                                            </h1>
                                            <p className="text-[#895537] text-left">
                                                IDR 34.000
                                            </p>
                                            <p className="text-[#895537] text-left">
                                                Delivered
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-end">
                                        <input type="checkbox" class="checkbox" />
                                    </div>
                                </div>

                                <div className="flex flex-row justify-between bg-white shadow-2xl w-80 px-3 py-3 rounded-xl">
                                    <div className="flex flex-row">
                                        <div class="avatar">
                                            <div class="w-16 h-16 rounded-full">
                                                <img src="image/sayur.png" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5">
                                            <h1 className="font-bold text-xl">
                                                Veggie tomato mix
                                            </h1>
                                            <p className="text-[#895537] text-left">
                                                IDR 34.000
                                            </p>
                                            <p className="text-[#895537] text-left">
                                                Delivered
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-end">
                                        <input type="checkbox" classname className="checkbox" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* 1 */}
                        <div className="flex flex-row mx-28 justify-center mt-5">
                            <div className="flex flex-row mr-5">
                                <div className="flex flex-row justify-between bg-white shadow-2xl w-80 px-3 py-3 rounded-xl mr-5">
                                    <div className="flex flex-row">
                                        <div class="avatar">
                                            <div class="w-16 h-16 rounded-full">
                                                <img src="image/sayur.png" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5">
                                            <h1 className="font-bold text-xl">
                                                Veggie tomato mix
                                            </h1>
                                            <p className="text-[#895537] text-left">
                                                IDR 34.000
                                            </p>
                                            <p className="text-[#895537] text-left">
                                                Delivered
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-end">
                                        <input type="checkbox" classname className="checkbox" />
                                    </div>
                                </div>

                                <div className="flex flex-row justify-between bg-white shadow-2xl w-80 px-3 py-3 rounded-xl mr-5">
                                    <div className="flex flex-row">
                                        <div class="avatar">
                                            <div class="w-16 h-16 rounded-full">
                                                <img src="image/sayur.png" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5">
                                            <h1 className="font-bold text-xl">
                                                Veggie tomato mix
                                            </h1>
                                            <p className="text-[#895537] text-left">
                                                IDR 34.000
                                            </p>
                                            <p className="text-[#895537] text-left">
                                                Delivered
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-end">
                                        <input type="checkbox" classname className="checkbox" />
                                    </div>
                                </div>

                                <div className="flex flex-row justify-between bg-white shadow-2xl w-80 px-3 py-3 rounded-xl">
                                    <div className="flex flex-row">
                                        <div class="avatar">
                                            <div class="w-16 h-16 rounded-full">
                                                <img src="image/sayur.png" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5">
                                            <h1 className="font-bold text-xl">
                                                Veggie tomato mix
                                            </h1>
                                            <p className="text-[#895537] text-left">
                                                IDR 34.000
                                            </p>
                                            <p className="text-[#895537] text-left">
                                                Delivered
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-end">
                                        <input type="checkbox" classname className="checkbox" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2 */}
                        <div className="flex flex-row mx-28 justify-center mt-5">
                            <div className="flex flex-row mr-5">
                                <div className="flex flex-row justify-between bg-white shadow-2xl w-80 px-3 py-3 rounded-xl mr-5">
                                    <div className="flex flex-row">
                                        <div class="avatar">
                                            <div class="w-16 h-16 rounded-full">
                                                <img src="image/sayur.png" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5">
                                            <h1 className="font-bold text-xl">
                                                Veggie tomato mix
                                            </h1>
                                            <p className="text-[#895537] text-left">
                                                IDR 34.000
                                            </p>
                                            <p className="text-[#895537] text-left">
                                                Delivered
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-end">
                                        <input type="checkbox" classname className="checkbox" />
                                    </div>
                                </div>

                                <div className="flex flex-row justify-between bg-white shadow-2xl w-80 px-3 py-3 rounded-xl mr-5">
                                    <div className="flex flex-row">
                                        <div class="avatar">
                                            <div class="w-16 h-16 rounded-full">
                                                <img src="image/sayur.png" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5">
                                            <h1 className="font-bold text-xl">
                                                Veggie tomato mix
                                            </h1>
                                            <p className="text-[#895537] text-left">
                                                IDR 34.000
                                            </p>
                                            <p className="text-[#895537] text-left">
                                                Delivered
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-end">
                                        <input type="checkbox" classname className="checkbox" />
                                    </div>
                                </div>

                                <div className="flex flex-row justify-between bg-white shadow-2xl w-80 px-3 py-3 rounded-xl">
                                    <div className="flex flex-row">
                                        <div class="avatar">
                                            <div class="w-16 h-16 rounded-full">
                                                <img src="image/sayur.png" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5">
                                            <h1 className="font-bold text-xl">
                                                Veggie tomato mix
                                            </h1>
                                            <p className="text-[#895537] text-left">
                                                IDR 34.000
                                            </p>
                                            <p className="text-[#895537] text-left">
                                                Delivered
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-end">
                                        <input type="checkbox" classname className="checkbox" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  */}

                        <div className="flex flex-row mx-28 justify-center mt-5">
                            <div className="flex flex-row mr-5">
                                <div className="flex flex-row justify-between bg-white shadow-2xl w-80 px-3 py-3 rounded-xl mr-5">
                                    <div className="flex flex-row">
                                        <div class="avatar">
                                            <div class="w-16 h-16 rounded-full">
                                                <img src="image/sayur.png" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5">
                                            <h1 className="font-bold text-xl">
                                                Veggie tomato mix
                                            </h1>
                                            <p className="text-[#895537] text-left">
                                                IDR 34.000
                                            </p>
                                            <p className="text-[#895537] text-left">
                                                Delivered
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-end">
                                        <input type="checkbox" classname className="checkbox" />
                                    </div>
                                </div>

                                <div className="flex flex-row justify-between bg-white shadow-2xl w-80 px-3 py-3 rounded-xl mr-5">
                                    <div className="flex flex-row">
                                        <div class="avatar">
                                            <div class="w-16 h-16 rounded-full">
                                                <img src="image/sayur.png" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5">
                                            <h1 className="font-bold text-xl">
                                                Veggie tomato mix
                                            </h1>
                                            <p className="text-[#895537] text-left">
                                                IDR 34.000
                                            </p>
                                            <p className="text-[#895537] text-left">
                                                Delivered
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-end">
                                        <input type="checkbox" classname className="checkbox" />
                                    </div>
                                </div>

                                <div className="flex flex-row justify-between bg-white shadow-2xl w-80 px-3 py-3 rounded-xl">
                                    <div className="flex flex-row">
                                        <div class="avatar">
                                            <div class="w-16 h-16 rounded-full">
                                                <img src="image/sayur.png" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5">
                                            <h1 className="font-bold text-xl ">
                                                Veggie tomato mix
                                            </h1>
                                            <p className="text-[#895537] text-left">
                                                IDR 34.000
                                            </p>
                                            <p className="text-[#895537] text-left">
                                                Delivered
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-end">
                                        <input type="checkbox" classname className="checkbox" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row mx-28 justify-center mt-5">
                            <div className="flex flex-row mr-5">
                                <div className="flex flex-row justify-between bg-white shadow-2xl w-80 px-3 py-3 rounded-xl mr-5">
                                    <div className="flex flex-row">
                                        <div class="avatar">
                                            <div class="w-16 h-16 rounded-full">
                                                <img src="image/sayur.png" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5">
                                            <h1 className="font-bold text-xl">
                                                Veggie tomato mix
                                            </h1>
                                            <p className="text-[#895537] text-left">
                                                IDR 34.000
                                            </p>
                                            <p className="text-[#895537] text-left">
                                                Delivered
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-end">
                                        <input type="checkbox" classname className="checkbox" />
                                    </div>
                                </div>

                                <div className="flex flex-row justify-between bg-white shadow-2xl w-80 px-3 py-3 rounded-xl mr-5">
                                    <div className="flex flex-row">
                                        <div class="avatar">
                                            <div class="w-16 h-16 rounded-full">
                                                <img src="image/sayur.png" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5">
                                            <h1 className="font-bold text-xl">
                                                Veggie tomato mix
                                            </h1>
                                            <p className="text-[#895537] text-left">
                                                IDR 34.000
                                            </p>
                                            <p className="text-[#895537] text-left">
                                                Delivered
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-end">
                                        <input type="checkbox" classname className="checkbox" />
                                    </div>
                                </div>
                                <div className="flex flex-row justify-between bg-white shadow-2xl w-80 px-3 py-3 rounded-xl">
                                    <div className="flex flex-row">
                                        <div class="avatar">
                                            <div class="w-16 h-16 rounded-full">
                                                <img src="image/sayur.png" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col ml-5">
                                            <h1 className="font-bold text-xl">
                                                Veggie tomato mix
                                            </h1>
                                            <p className="text-[#895537] text-left">
                                                IDR 34.000
                                            </p>
                                            <p className="text-[#895537] text-left">
                                                Delivered
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-end">
                                        <input type="checkbox" classname className="checkbox" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default HistoryCustLayout
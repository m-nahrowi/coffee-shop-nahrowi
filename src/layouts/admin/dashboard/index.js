import Link from "next/link"
import Layout from "../../../components/layout"


const Dashboard = () => {
    return (
        <>
            <Layout title="Dashboard">

                <main>
                    <div>
                        <h1 className="text-center font-extrabold text-2xl text-[#6A4029]">See how your store progress so far</h1>
                        <div className="flex flex-row justify-center mt-5 font-bold text-lg">
                            <div className="flex flex-col items-center">
                                <input className="w-5 h-5" type="radio" name="radio-4" class="radio radio-accent" />
                                <p>Daily</p>
                            </div>
                            <div className="flex flex-col items-center ml-28">
                                <input className=" w-5 h-5" type="radio" name="radio-4" class="radio radio-accent" />
                                <p>Weekly</p>
                            </div>
                            <div className="flex flex-col items-center ml-28">
                                <input className=" w-5 h-5" type="radio" name="radio-4" class="radio radio-accent" />
                                <p>Monthly</p>
                            </div>
                        </div>
                    </div>
                </main>

                <div className="flex flex-row  mx-32 mt-16">
                    <div className="flex flex-col w-3/5  py-5 mr-10" >
                        {/* monthly report */}
                        <div className="flex flex-col shadow-2xl rounded-xl mb-5 ">
                            <div className="flex flex-row justify-between px-5 mt-5">
                                <div className="flex flex-col">
                                    <h1 className="font-extrabold text-xl">
                                        Monthly Report
                                    </h1>
                                    <p>
                                        Last 6 months
                                    </p>
                                </div>
                                <div>
                                    <img src="/image/path.svg" />
                                </div>
                            </div>
                            <div className="flex flex-row ml-5 mt-14">
                                <div className="flex flex-col justify-start h-full  w-20">
                                    <p>IDR 5M</p>
                                    <p className="mt-14">IDR 5M</p>

                                </div>
                                {/* <p>IDR 0K</p> */}
                                <div className="flex flex-row ml-20  justify-items-center items-end justify-center">
                                    <div className="w-5 h-24 bg-[#FFBA33] mr-20">

                                    </div>
                                    <div className="w-5 h-40 bg-[#FFBA33] mr-20">

                                    </div>
                                    <div className="w-5 h-32 bg-[#FFBA33] mr-20">

                                    </div>
                                    <div className="w-5 h-36 bg-[#FFBA33] mr-20">

                                    </div>
                                    <div className="w-5 h-24 bg-[#FFBA33] mr-20">

                                    </div>
                                    <div className="w-5 h-32 bg-[#FFBA33] mr-20">

                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row items-center ">
                                <p className="mr-24 pl-5">0K</p>
                                <div className="border-2 border-black w-full border-dashed h-[1px] mr-20 ml-6"></div>
                                {/* <hr className="border-dashed bg-black" /> */}
                            </div>
                            <div className="flex flex-row">
                                <div className="flex flex-col justify-end h-full ml-2 mr-5 w-20">
                                    <p>-IDR 2M</p>
                                    {/* <p>IDR 5M</p> */}
                                    {/* <p>0K</p> */}
                                </div>
                                {/* <p>IDR 0K</p> */}
                                <div className="flex flex-row ml-16 justify-items-center items-start justify-center">
                                    <div className="w-5 h-24 bg-[#6A4029] mr-20">

                                    </div>
                                    <div className="w-5 h-40 bg-[#6A4029] mr-20">

                                    </div>
                                    <div className="w-5 h-32 bg-[#6A4029] mr-20">

                                    </div>
                                    <div className="w-5 h-36 bg-[#6A4029] mr-20">

                                    </div>
                                    <div className="w-5 h-24 bg-[#6A4029] mr-20">

                                    </div>
                                    <div className="w-5 h-32 bg-[#6A4029] mr-20">

                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-around mx-16 mt-8 mb-10 ml-20">
                                <p className="ml-12">JAN</p>
                                <p className="ml-5 mr-5">FEB</p>
                                <p>MAR</p>
                                <p className="ml-2">APR</p>
                                <p className="">MAY</p>
                                <p>JUN</p>
                            </div>

                            <hr className="bg-gray-200" />
                            <div className="flex flex-row justify-center my-5">
                                <div className="flex flex-row items-center">
                                    <div className="w-3 h-3 rounded-full bg-[#FFBA33]">
                                    </div>
                                    <div>
                                        <p className="ml-3 text-lg">Income</p>
                                    </div>
                                    <div className="flex flex-row items-center ml-10">
                                        <div className="w-3 h-3 rounded-full bg-[#6A4029]">
                                        </div>
                                        <div>
                                            <p className="ml-3 text-lg">Outcom</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Button */}
                        <div className="bg-[#6A4029] p-3 rounded-2xl text-white text-center font-bold">
                            <button>
                                Download Report
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col w-2/5 my-5 ">
                        {/* goals */}
                        <div className="flex flex-col w-full h-full">
                            <div className="flex flex-col w-full mb-5 rounded-3xl shadow-2xl">
                                <div className="flex flex-row p-5">
                                    <div>
                                        <div class="avatar">
                                            <div class="w-26 rounded-full">
                                                <img src="/image/cewe-camera.png" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col ml-5">
                                        <h1 className="font-bold text-xl">
                                            Cheryn Laurent
                                        </h1>
                                        <p>Keep up the good work and spread love!</p>
                                    </div>
                                </div>
                                <hr className="bg-black" />
                                <h1 className="text-center font-bold text-xl mt-2">
                                    Best Staff of the Month
                                </h1>
                                <div className="flex flex-row justify-center mt-3">

                                    {/* <div class="radial-progress text-primary" style="--value:70;">70%</div> */}
                                    <div className="flex flex-row justify-center">
                                        <div className="w-24 h-24 border-8 border-green-800 rounded-full flex flex-row justify-center items-center">
                                            <p className="text-xl font-bold">80%</p>
                                        </div>

                                    </div>

                                    {/* <div class="radial-progress text-primary" style="--value:70;">70%</div> */}

                                </div>
                                <div className="flex flex-row justify-center mb-3 mt-3">
                                    <p className="text-center text-gray-600 w-1/2">
                                        Achieved 3.5M of total 5M
                                        478 Customer
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col w-full mb-5 rounded-3xl shadow-2xl">

                                <h1 className="text-center font-bold text-xl mt-5">
                                    GOALS
                                </h1>
                                <div className="flex flex-row justify-center mb-3 mt-3">
                                    <p className="text-center text-gray-600 w-1/2">
                                        Your goals is still on 76%. Keep up the good work!
                                    </p>
                                </div>
                                <div className="flex flex-row justify-center mb-10 mt-5">

                                    {/* <div class="radial-progress text-primary" style="--value:70;">70%</div> */}
                                    <div className="w-24 h-24 border-8 border-[#FFBA33] bg-[#6A4029] rounded-full justify-center flex items-center">
                                        <p className="text-xl font-bold text-white">100%</p>
                                    </div>
                                    {/* <div class="radial-progress text-primary" style="--value:70;">70%</div> */}

                                </div>

                            </div>
                        </div>
                        {/* button */}
                        <div className="bg-[#6A4029] p-3 rounded-2xl text-white text-center font-bold">
                            <button>
                                Download Report
                            </button>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}

export default Dashboard
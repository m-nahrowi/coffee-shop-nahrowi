import Layout from "../../../../components/layout"


const NewPromo = () => {
    return (
        <>

            <Layout title={"New Promo"}>
                <main className="flex flex-row mx-32">
                    <div className="w-2/5 h-full">
                        <div className="flex flex-col mx-20 p-4 rounded-2xl mb-5 shadow-2xl">
                            <div className="flex flex-row justify-center">
                                <div className="bg-gray-200 w-48 h-48 rounded-full mt-10 items-center flex justify-center">
                                    <img className="" src="/image/camera.svg" />
                                </div>
                            </div>
                            <div>
                                <button className="bg-black p-4 w-full rounded-2xl mb-3 mt-5 text-white">
                                    Take a picture
                                </button>
                                <button className="bg-[#FFBA33] p-4 w-full rounded-2xl">
                                    Choose from galery
                                </button>
                            </div>
                            <h1 className="text-lg font-bold text-[#6A4029] mt-14">
                                Enter the discount :
                            </h1>
                            <div className="flex flex-row justify-center mt-3">

                                <select class="select select-bordered w-full">
                                    <option disabled selected>Input discount</option>
                                    <option>Han Solo</option>
                                    <option>Greedo</option>
                                </select>
                            </div>
                            <h1 className="text-lg font-bold text-[#6A4029] mt-8">
                                Expire date :
                            </h1>
                            <div className="flex flex-row justify-center mt-3">

                                <select class="select select-bordered w-full">
                                    <option disabled selected>Select start date</option>
                                    <option>Han Solo</option>
                                    <option>Greedo</option>
                                </select>
                            </div>
                            <div className="flex flex-row justify-center mt-3">

                                <select class="select select-bordered w-full">
                                    <option disabled selected>Select end date</option>
                                    <option>Han Solo</option>
                                    <option>Greedo</option>
                                </select>
                            </div>
                            <h1 className="text-lg font-bold text-[#6A4029] mt-8">
                                Input coupon code :
                            </h1>
                            <div className="flex flex-row justify-center mt-3">

                                <select class="select select-bordered w-full">
                                    <option disabled selected>Input coupon code</option>
                                    <option>Han Solo</option>
                                    <option>Greedo</option>
                                </select>
                            </div>

                        </div>

                    </div>
                    <div className="w-3/5 h-full">
                        <div className="flex flex-col mx-28 rounded-2xl m-3 px-3">
                            <div className="mt-5">
                                <div className="flex flex-col">
                                    <p className="mb-3 font-bold text-xl">
                                        Name :
                                    </p>
                                    <input className="
                                            border-b-2
                                            mt-3 
                                            block 
                                            w-full 
                                            px-2 py-2 
                                            bg-white 
                                            border-slate-500 
                                            rounded-sm shadow-sm placeholder-slate-400
                                            focus:outline-none focus:border-[#6A4029] focus:ring-1 focus:ring-[#6A4029]
                                           disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-400 disabled:shadow-none
                        
                                             " type="text" placeholder="Type product name min. 50 characters" />
                                </div>
                            </div>
                            <div className="mt-5">
                                <div className="flex flex-col">
                                    <p className="mb-3 font-bold text-xl">
                                        Price :
                                    </p>
                                    <input className="
                                            border-b-2
                                            mt-3 
                                            block 
                                            w-full 
                                            px-2 py-2 
                                            bg-white 
                                            border-slate-500 
                                            rounded-sm shadow-sm placeholder-slate-400
                                            focus:outline-none focus:border-[#6A4029] focus:ring-1 focus:ring-[#6A4029]
                                           disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-400 disabled:shadow-none
                        
                                             " type="text" placeholder="Type the normal price" />
                                </div>
                            </div>
                            <div className="mt-5">
                                <div className="flex flex-col">
                                    <p className="mb-3 font-bold text-xl">
                                        Description :
                                    </p>
                                    <input className="
                                            border-b-2
                                            mt-3 
                                            block 
                                            w-full 
                                            px-2 py-2 
                                            bg-white 
                                            border-slate-500 
                                            rounded-sm shadow-sm placeholder-slate-400
                                            focus:outline-none focus:border-[#6A4029] focus:ring-1 focus:ring-[#6A4029]
                                           disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-400 disabled:shadow-none
                        
                                             " type="text" placeholder="Describe your promo min. 150 characters" />
                                </div>
                            </div>

                            <div className="mt-5">
                                <p className="mb-3 font-bold text-xl">
                                    Input product size :
                                </p>
                                <p className="text-sm text-[#9F9F9F] mb-3">
                                    Click product size you want to use for this promo
                                </p>
                                <div className="flex flex-row justify-around m-4">
                                    <div className="h-16 w-16 rounded-full bg-[#FFBA33] p-5 flex justify-center items-center font-extrabold">
                                        <p className="text-xl">
                                            R
                                        </p>
                                    </div>
                                    <div className="h-16 w-16 rounded-full bg-[#FFBA33] p-5 flex justify-center items-center font-extrabold">
                                        <p className="text-xl">
                                            L
                                        </p>
                                    </div>
                                    <div className="h-16 w-16 rounded-full bg-[#FFBA33] p-5 flex justify-center items-center font-extrabold">
                                        <p className="text-xl">
                                            XL
                                        </p>
                                    </div>
                                    <div className="h-16 w-16 rounded-full bg-[#BABABA] p-5 flex justify-center items-center font-extrabold">
                                        <p>
                                            250 gr
                                        </p>
                                    </div>
                                    <div className="h-16 w-16 rounded-full bg-[#BABABA] p-5 flex justify-center items-center font-extrabold">
                                        <p>
                                            300 gr
                                        </p>
                                    </div>
                                    <div className="h-16 w-16 rounded-full bg-[#BABABA] p-5 flex justify-center items-center font-extrabold">
                                        <p>
                                            500 gr
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div className="mt-5">
                                <p className="mb-3 font-bold text-xl">
                                    Input product size :
                                </p>
                                <p className="text-sm text-[#9F9F9F] mb-3">
                                    Click product size you want to use for this promo
                                </p>
                                <div className="flex flex-row justify-around m-4">
                                    <div className="h-16 w-32 rounded-xl bg-[#FFBA33] p-3 flex justify-center items-center font-extrabold">
                                        <p className="text-sm">
                                            Home Delivery
                                        </p>
                                    </div>
                                    <div className="h-16 w-32 rounded-xl bg-[#FFBA33] p-3 flex justify-center items-center font-extrabold">
                                        <p className="text-sm">
                                            Dine in
                                        </p>
                                    </div>
                                    <div className="h-16 w-32 rounded-xl bg-[#9F9F9F] p-3 flex justify-center items-center font-extrabold">
                                        <p className="text-sm">
                                            Take away
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button className="font-bold w-full text-white p-4 text-lg rounded-2xl bg-[#6A4029]">
                                Save Promo
                            </button>
                            <button className="font-bold w-full p-4 text-lg rounded-2xl bg-[#BABABA]/30 mt-3 mb-3">
                                Cancel
                            </button>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    )
}

export default NewPromo
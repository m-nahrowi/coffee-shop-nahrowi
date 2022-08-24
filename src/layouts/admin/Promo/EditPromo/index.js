import Layout from "../../../../components/layout"


const EditPromo = () => {
    return (
        <>

            <Layout title={"Edit Promo"}>
                <main className="flex flex-row mx-32">
                    <div className="w-2/5 h-full">
                        <div className="flex flex-col mx-20 p-4 rounded-2xl mb-5 shadow-2xl">

                            <div className="m-5 bg-[#FFCB65] rounded-lg py-5 shadow-2xl">
                                <div className="flex flex-row justify-center">
                                    <div class="avatar">
                                        <div class="w-48 rounded-full">
                                            <img src="/image/beef.png" />
                                        </div>
                                    </div>
                                </div>
                                <p className="font-extrabold text-xl text-center mt-5">
                                    Beef Spaghetti
                                </p>
                                <p className="font-extrabold text-xl text-center">
                                    20%
                                </p>
                                <p className="text-center mt-3 mx-10 mb-7">
                                    Buy 1 Choco Oreo and get 20% off for Beef Spaghetti
                                </p>
                                <hr className="border-dashed border-black" />
                                <p className="mt-5 text-bold text-center">COUPON CODE</p>
                                <p className="font-extrabold text-xl text-center">
                                    FNPR15RG
                                </p>
                                <p className="text-center text-sm mt-3">
                                    Valid untill October 10th 2020
                                </p>
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

                                <input type="text" value='FNPR15RG' className="input input-bordered w-full max-w-xs font-bold" />
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
                                            font-bold
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
                        
                                             " type="text" value="Beef Spaghetti" />
                                </div>
                            </div>
                            <div className="mt-5">
                                <div className="flex flex-col">
                                    <p className="mb-3 font-bold text-xl">
                                        Price :
                                    </p>
                                    <input className="
                                            font-bold
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
                        
                                             " type="text" value="70.000" />
                                </div>
                            </div>
                            <div className="mt-5">
                                <div className="flex flex-col">
                                    <p className="mb-3 font-bold text-xl">
                                        Description :
                                    </p>
                                    <input className="
                                            font-bold
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
                        
                                             " type="text" value="Buy 1 Choco Oreo and get 20% off for Beef Spaghetti" />
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
                            <h1 className="text-lg font-bold text-[#6A4029] mt-8">
                                Enter the discount :
                            </h1>
                            <div className="flex flex-row justify-center mt-3">

                                <select class="select select-bordered w-full text-xl">
                                    <option disabled selected>20% -{'>'} 63.000</option>
                                    <option>Han Solo</option>
                                    <option>Greedo</option>
                                </select>
                            </div>
                            <button className="font-bold w-full text-white p-4 text-lg rounded-2xl bg-[#6A4029] mt-5">
                                Save Promo
                            </button>
                            {/* <button className="font-bold w-full p-4 text-lg rounded-2xl bg-[#BABABA]/30 mt-3 mb-3">
                                Cancel
                            </button> */}
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    )
}

export default EditPromo
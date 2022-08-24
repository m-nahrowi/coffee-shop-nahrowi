import Footer from "../../../components/footer"
import Navbar from "../../../components/navbar"
import Head from 'next/head'



const ProfileLayout = () => {
    return (
        <>
            <Head>
                <title>Profile | Coffee Shop</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            <Navbar />
            <main>
                {/* <div>
                    <img className='w-[100%] h-[140vh] bg-cover relative' src='image/paymen-bg.png' />
                </div> */}
                <div className="mx-28">
                    <h1 className="font-bold text-left text-2xl my-5">
                        User Profile
                    </h1>
                    <div className="flex flex-row w-full border-2 rounded-2xl shadow-2xl">
                        <div className="flex flex-col w-2/5 items-center border border-white rounded-l-xl">
                            <div class="avatar mt-24">
                                <div class="w-52 rounded-full">
                                    <img src="image/profile.png" />
                                </div>
                            </div>
                            <h1 className="font-bold text-2xl mt-5 mb-3">
                                Zulaikha
                            </h1>
                            <p>
                                Zulaikha@gmail.com
                            </p>
                            <button className="bg-[#FFBA33] px-24 py-3 rounded-2xl mt-5 font-bold">
                                Choose Photo
                            </button>
                            <button className="bg-[#6A4029] text-white px-24 py-3 rounded-2xl mt-5 font-bold">
                                Choose Photo
                            </button>
                            <button className="bg-[#6A4029] text-white px-24 py-3 rounded-2xl mt-5 font-bold">
                                Edit Password
                            </button>

                            <p className="mt-10 font-bold text-xl text-[#6A4029] w-1/2 text-center">
                                DO YOU WANT TO SAVE THE CHANGE ?
                            </p>

                            <button className="bg-[#FFBA33] px-20 py-3 rounded-2xl mt-5 font-bold w-1/2">
                                Save Change
                            </button>
                            <button className="bg-[#6A4029] text-white px-20 py-3 rounded-2xl mt-5 font-bold w-1/2">
                                Cancel
                            </button>

                            <button className="mt-20 mb-10 text-[#6A4029] border-2 text-lg border-[#6A4029] px-20 py-2 rounded-2xl font-bold w-1/2">
                                Logout
                            </button>
                        </div>
                        <div className="flex flex-col w-3/5 rounded-r-xl p-14">
                            <div className="border-b-8 border-[#6A4029] shadow-2xl rounded-xl">
                                <div className="m-4 p-4">
                                    <div className="flex flex-row justify-between ">
                                        <h1 className="text-xl font-bold">
                                            Contacts
                                        </h1>
                                        <img className="w-8 h-8 px-1 py-1 rounded-full bg-[#6A4029] " src="image/pensil.svg" />
                                    </div>
                                    <div className="flex flex-row justify-between ">
                                        <div className="flex flex-col">
                                            <p className="">
                                                Email address
                                            </p>
                                            <input className="
                                            border-b-2
                                            mt-3 
                                            block 
                                            w-72 
                                            px-2 py-2 
                                            bg-white 
                                            border-slate-500 
                                            rounded-sm shadow-sm placeholder-slate-400
                                            focus:outline-none focus:border-[#6A4029] focus:ring-1 focus:ring-[#6A4029]
                                           disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-400 disabled:shadow-none
                        
                                             " type="text" placeholder="type your email" />
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="">
                                                Mobile Number
                                            </p>
                                            <input className="
                                            border-b-2
                                            mt-3 
                                            block 
                                            w-72 
                                            px-2 py-2 
                                            bg-white 
                                            border-slate-500 
                                            rounded-sm shadow-sm placeholder-slate-400
                                            focus:outline-none focus:border-[#6A4029] focus:ring-1 focus:ring-[#6A4029]
                                           disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-400 disabled:shadow-none
                        
                                             " type="text" placeholder="type your mobile number" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col mt-2.5">
                                        <p className="">
                                            Delivery Address
                                        </p>
                                        <input className="
                                            border-b-2
                                            mt-3 
                                            block 
                                            w-72 
                                            px-2 py-2 
                                            bg-white 
                                            border-slate-500 
                                            rounded-sm shadow-sm placeholder-slate-400
                                            focus:outline-none focus:border-[#6A4029] focus:ring-1 focus:ring-[#6A4029]
                                           disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-400 disabled:shadow-none
                        
                                             " type="text" placeholder="type your delivery address" />
                                    </div>
                                    <h1 className="
                                    font-bold
                                    mt-5
                                    text-xl
                                    ">
                                        Details
                                    </h1>

                                    <div className="flex flex-row justify-between mt-5">
                                        <div className="flex flex-col">
                                            <p className="">
                                                Display name
                                            </p>
                                            <input className="
                                            border-b-2
                                            mt-3 
                                            block 
                                            w-72 
                                            px-2 py-2 
                                            bg-white 
                                            border-slate-500 
                                            rounded-sm shadow-sm placeholder-slate-400
                                            focus:outline-none focus:border-[#6A4029] focus:ring-1 focus:ring-[#6A4029]
                                           disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-400 disabled:shadow-none
                        
                                            " type="text" placeholder="type your display name" />
                                        </div>
                                        <div className="flex flex-col">
                                            <p className="">
                                                DD/MM/YYYY
                                            </p>
                                            <input className="
                                            border-b-2
                                            mt-3 
                                            block 
                                            w-72 
                                            px-2 py-2 
                                            bg-white 
                                            border-slate-500 
                                            rounded-sm shadow-sm placeholder-slate-400
                                            focus:outline-none focus:border-[#6A4029] focus:ring-1 focus:ring-[#6A4029]
                                           disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-400 disabled:shadow-none
                        
                                             " type="text" placeholder="type your birthday" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col mt-2.5">
                                        <p className="">
                                            First name
                                        </p>
                                        <input className="
                                            border-b-2
                                            mt-3 
                                            block 
                                            w-72 
                                            px-2 py-2 
                                            bg-white 
                                            border-slate-500 
                                            rounded-sm shadow-sm placeholder-slate-400
                                            focus:outline-none focus:border-[#6A4029] focus:ring-1 focus:ring-[#6A4029]
                                           disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-400 disabled:shadow-none
                        
                                             " type="text" placeholder="type your first name" />
                                    </div>

                                    <div className="flex flex-col mt-2.5">
                                        <p className="">
                                            Last name
                                        </p>
                                        <input className="
                                            border-b-2
                                            mt-3 
                                            block 
                                            w-72 
                                            px-2 py-2 
                                            bg-white 
                                            border-slate-500 
                                            rounded-sm shadow-sm placeholder-slate-400
                                            focus:outline-none focus:border-[#6A4029] focus:ring-1 focus:ring-[#6A4029]
                                           disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-400 disabled:shadow-none
                        
                                        " type="text" placeholder="type your last name" />
                                    </div>
                                    <div className="flex flex-row mt-10 justify-center">
                                        <div className="flex mr-14">
                                            <input type="radio" name="radio-2" className="radio radio-accent" checked />
                                            <p className="ml-3">
                                                Male
                                            </p>
                                        </div>
                                        <div className="flex">
                                            <input type="radio" name="radio-2" className="radio radio-accent" />
                                            <p className="ml-3">
                                                Female
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default ProfileLayout
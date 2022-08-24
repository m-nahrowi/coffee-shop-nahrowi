import Link from "next/link"
import Image from 'next/image'
import Head from 'next/head'


const SignupLayout = () => {
    return (
        <>
            <Head>
                <title>Signup | Coffe Shoop</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            {/* <Navbar /> */}
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <div className="w-1/2">
                        <img src="/image/signup.png" />
                        {/* <Image src="/image/signup.png" alt="bg-cover" width={500} height={500} /> */}
                    </div>
                    <div className="flex flex-col w-1/2 mx-14">
                        <div className="flex flex-row justify-between mt-10">
                            <div className="flex flex-row items-center">
                                <img className="w-10 h-10" src='/image/coffee.svg' />
                                <p className="text-2xl ml-3 font-bold">Coffee Shop</p>
                            </div>
                            <div className="">
                                <p className="text-3xl text-[#6A4029] font-bold">
                                    Sign Up
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-row justify-center mx-16 my-28">
                            <div className="flex flex-col w-full">
                                <div className="mb-5">
                                    <p className="text-2xl mb-2 font-bold">
                                        Email Address
                                    </p>
                                    <input className="w-full py-4 px-4 text-2xl rounded-xl bg-white border-2 border-[#6A4029]" type="text" placeholder="Enter Your Email Addres" />
                                </div>
                                <div className="mb-5">
                                    <p className="text-2xl mb-2 font-bold">
                                        Password
                                    </p>
                                    <input className="w-full py-4 px-4 text-2xl rounded-xl bg-white border-2 border-[#6A4029]" type="text" placeholder="Enter Your Email Addres" />
                                </div>
                                <div className="mb-5">
                                    <p className="text-2xl mb-2 font-bold">
                                        Phone Number
                                    </p>
                                    <input className="w-full py-4 px-4 text-2xl rounded-xl bg-white border-2 border-[#6A4029]" type="text" placeholder="Enter Your Email Addres" />
                                </div>
                                <div className="mb-12 mt-16">
                                    <button className="w-full py-4 px-4 text-2xl bg-[#FFBA33] font-bold rounded-xl mb-5">
                                        Sign Up
                                    </button>
                                    <button className="flex flex-row justify-center w-full items-center border border-gray-200 bg-white shadow-2xl rounded-xl py-4 font-bold text-2xl">
                                        <img className="mr-3 w-7 h-7" src="/image/google.svg" />
                                        Sign up with Google
                                    </button>
                                </div>
                                <div className="divider font-bold text-lg text-[#9F9F9F]">
                                    Already have an account?
                                </div>
                                <Link href="/auth/login">
                                    <button className="w-full py-4 px-4 text-2xl bg-[#6A4029] font-bold rounded-xl mb-5 text-white mt-12">
                                        Login here
                                    </button>
                                </Link>
                            </div>
                        </div>
                        {/* <Footer /> */}
                        <footer className="flex justify-between mt-24 mb-24">
                            <div className="w-80 flex flex-col">
                                <div className='flex flex-row mb-5'>
                                    <img className="w-10 h-10" src='/image/coffee.svg' />
                                    <h1 className="ml-5 items-center font-extrabold text-2xl">
                                        Coffee Shop
                                    </h1>
                                </div>
                                <p className="mt-3 font-bold">
                                    Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans
                                </p>
                                <div className="mt-10 flex flex-row items-center mb-5">
                                    <img className="mr-3" src='/image/Instagram.svg' />
                                    <img className="mr-3 " src='/image/Twitter.svg' />
                                    <img className="" src='/image/Facebook.svg' />
                                </div>
                                <p className="font-bold text-gray-300 mt-3">
                                    © 2020 CoffeeStore
                                </p>
                            </div>

                            <div className="flex flex-row">
                                <div className="mr-20">
                                    <h1 className="font-bold text-xl">
                                        Product
                                    </h1>
                                    <div className="mt-5">
                                        <p className="mb-3">
                                            Download
                                        </p>
                                        <p className="mb-3">
                                            Pricing
                                        </p>
                                        <p className="mb-3">
                                            Location
                                        </p>
                                        <p className="mb-3">
                                            Countries
                                        </p>
                                        <p className="mb-3">
                                            Blog
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <h1 className="font-bold text-xl">
                                        Engage
                                    </h1>
                                    <div className="mt-5">
                                        <p className="mb-3">
                                            Coffe Ship 7
                                        </p>
                                        <p className="mb-3">
                                            FAQ
                                        </p>
                                        <p className="mb-3">
                                            About Us
                                        </p>
                                        <p className="mb-3">
                                            Privacy Policy
                                        </p>
                                        <p className="mb-3">
                                            Terms of Service
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignupLayout


const Footer = () => {
    return (
        <>
            <footer className="flex justify-between mt-24 mx-24 mb-24">
                <div className="w-80 flex flex-col">
                    <div className='flex flex-row mb-5'>
                        <img src='/image/coffee.svg' />
                        <h1 className="ml-5 items-center font-extrabold text-2xl">
                            Coffee Shop
                        </h1>
                    </div>
                    <p className="mt-3 font-bold">
                        Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans
                    </p>
                    <div className="mt-10 flex flex-row items-center mb-5">
                        
                        <img className="mr-3" src='/image/Instagram.svg'  />
                        <img className="mr-3 " src='/image/Twitter.svg'  />
                        <img className="" src='/image/Facebook.svg'  />

                        {/* <div className="bg-[#6A4029] w-10 h-10 rounded-full items-center mr-3 ">
                            <img className="w-full" src='/image/Facebook.svg' />
                        </div>
                        <div className="bg-[#6A4029] w-10 h-10 rounded-full items-center mr-3 ">
                            <img className="w-full" src='/image/Twitter.svg' />
                        </div>
                        <div className="bg-[#6A4029] w-10 h-10 rounded-full items-center mr-3 ">
                            <img className="w-full" src='/image/Instagram.svg' />
                        </div> */}
                        {/* <div className="bg-[#6A4029] w-24 h-10 rounded-full">
                            <img className="w-24" src='/image/Facebook.svg' />
                        </div>
                        <div className="bg-[#6A4029] w-24 h-10 rounded-full">
                            <img className="w-24" src='/image/Facebook.svg' />
                        </div> */}
                        {/* <path className="mr-3" src='/image/Twitter.svg' " /> */}
                        {/* <svg className="mr-3" src='/image/Instagram.svg'> </svg> */}
                        
                    </div>
                    <p className="font-bold text-gray-300 mt-3">
                        ©2020 CoffeeStore
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
        </>
    )
}

export default Footer
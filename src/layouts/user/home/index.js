import Layout from "../../../components/layout"
import Link from "next/link"


export default function HomeLayout() {
    return (
        <>

            {/* <Navbar /> */}
            <Layout title="Home">
                <main className="flex flex-col mt-5">
                    <div>
                        <img className='w-full relative bg-black bg-transparent' src='image/banner-coffee.png' />
                    </div>
                    <div className="flex flex-row justify-between absolute mx-32 font-['Rubik']">
                        <div className="flex flex-col w-2/5">
                            <h1 className='text-white text-5xl mt-24 font-bold text-left'>
                                Start Your Day with Coffee and Good Meals
                            </h1>
                            <p className='mt-10 text-white font-bold text-xl'>
                                We provide high quality beans, good taste, and healthy meals made by love just for you. Start your day with us for a bigger smile!
                            </p>
                            <Link href={'/productCust'}>
                                <button className='bg-[#FFBA33] text-xl rounded-md py-3 hover:bg-amber-600 px-4 w-64 mt-10 font-extrabold text-black'>
                                    Get started
                                </button>
                            </Link>
                        </div>
                        <div className='mt-24'>
                            <div class="form-control">
                                <div class="input-group">
                                    <input type="text" placeholder="Search…" class="input input-bordered" />
                                    <button class="btn btn-square">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 20 20" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-[-70px]'>
                        <div className='flex flex-row justify-evenly bg-white border mx-32 rounded-md shadow-2xl relative '>
                            <div className='flex flex-row justify-center mx-14 my-10'>
                                <img src='image/user.svg' />
                                <div className='flex flex-col ml-8'>
                                    <h1 className='text-xl font-bold'>
                                        90+
                                    </h1>
                                    <p>
                                        Staff
                                    </p>
                                </div>
                            </div>
                            <div className='border-l-2 mt-4 mb-4'>
                            </div>
                            <div className='flex flex-row justify-center mx-14 my-10'>
                                <img src='image/location.svg' />
                                <div className='flex flex-col ml-8'>
                                    <h1 className='text-xl font-bold'>
                                        30+
                                    </h1>
                                    <p>
                                        Stores
                                    </p>
                                </div>
                            </div>
                            <div className='border-l-2 mt-4 mb-4'>
                            </div>
                            <div className='flex flex-row justify-center mx-14 my-10'>
                                <img src='image/customer.svg' />
                                <div className='flex flex-col ml-8'>
                                    <h1 className='text-xl font-bold'>
                                        800+
                                    </h1>
                                    <p>
                                        Customers
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row mx-32 mt-24'>
                        <div>
                            <img src='image/teamWork.png' />
                        </div>
                        <div className='flex flex-col w-2/5 ml-28 mt-10'>
                            <h1 className='text-3xl font-bold'>
                                We Provide Good Coffee and Healthy Meals
                            </h1>
                            <p className='text-xl my-5'>
                                You can explore the menu that we provide with fun and have their own taste and make your day better.
                            </p>
                            <ul className='mb-5 flex flex-row'>
                                <img src='image/ceklis.svg' />
                                <li className='ml-3'>
                                    High quality beans
                                </li>
                            </ul>
                            <ul className='mb-5 flex flex-row'>
                                <img src='image/ceklis.svg' />
                                <li className='ml-3'>
                                    Healthy meals, you can request the ingredients
                                </li>
                            </ul>
                            <ul className='mb-5 flex flex-row'>
                                <img src='image/ceklis.svg' />
                                <li className='ml-3'>
                                    Chat with our staff to get better experience for ordering
                                </li>
                            </ul>
                            <ul className='mb-5 flex flex-row'>
                                <img src='image/ceklis.svg' />
                                <li className='ml-3'>
                                    Free member card with a minimum purchase of IDR 200.000.
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='text-center'>
                            <h1 className='text-4xl font-bold mb-7'>
                                Here is People’s Favorite
                            </h1>
                            <p className='text-lg'>
                                Let’s choose and have a bit taste of poeple’s favorite. It might be yours too!
                            </p>
                        </div>
                         <div className='flex flex-row mx-32 justify-between mt-24'>
                            <div className='w-80 flex flex-col border-2 border-[#DDDDDD] rounded-md'>
                                <div className='flex justify-center mt-16'>
                                    <div className='avatar'>
                                        <div className='rounded-full'>
                                            <img src='image/es-krim-coklat.png' />
                                        </div>
                                    </div>
                                </div>
                                <h1 className='mt-5 font-bold text-3xl text-center'>
                                    Hazelnut Latte
                                </h1>
                                <div className='flex flex-col justify-center mx-10 mt-10'>
                                    <div className='flex flex-row mb-3'>
                                        <img src='image/ceklis_no_bg.svg' />
                                        <p className='ml-5'>
                                            Hazelnut Syrup
                                        </p>
                                    </div>
                                    <div className='flex flex-row mb-3'>
                                        <img src='image/ceklis_no_bg.svg' />
                                        <p className='ml-5'>
                                            Vanilla Whipped Cream
                                        </p>
                                    </div>
                                    <div className='flex flex-row mb-3'>
                                        <img src='image/ceklis_no_bg.svg' />
                                        <p className='ml-5'>
                                            Ice / Hot
                                        </p>
                                    </div>
                                    <div className='flex flex-row mb-3'>
                                        <img src='image/ceklis_no_bg.svg' />
                                        <p className='ml-5'>
                                            Sliced Banana on Top
                                        </p>
                                    </div>
                                    <h1 className='font-bold text-2xl text-center mt-20'>
                                        IDR 25.000
                                    </h1>
                                    <button className='mt-5 mx-7 font-bold px-1 py-1 w-3/4 border-2 border-[#FFBA33] rounded-3xl mb-10 text-[#6A4029]'>
                                        Order Now
                                    </button>
                                </div>
                            </div>
                            <div className='w-80 flex flex-col border-2 border-[#DDDDDD] rounded-md'>
                                <div className='flex justify-center mt-16'>
                                    <div className='avatar'>
                                        <div className='rounded-full'>
                                            <img src='image/es-krim-kue.png' />
                                        </div>
                                    </div>
                                </div>
                                <h1 className='mt-5 font-bold text-3xl text-center'>
                                    Hazelnut Latte
                                </h1>
                                <div className='flex flex-col justify-center mx-10 mt-10'>
                                    <div className='flex flex-row mb-3'>
                                        <img src='image/ceklis_no_bg.svg' />
                                        <p className='ml-5'>
                                            Hazelnut Syrup
                                        </p>
                                    </div>
                                    <div className='flex flex-row mb-3'>
                                        <img src='image/ceklis_no_bg.svg' />
                                        <p className='ml-5'>
                                            Vanilla Whipped Cream
                                        </p>
                                    </div>
                                    <div className='flex flex-row mb-3'>
                                        <img src='image/ceklis_no_bg.svg' />
                                        <p className='ml-5'>
                                            Ice / Hot
                                        </p>
                                    </div>
                                    <div className='flex flex-row mb-3'>
                                        <img src='image/ceklis_no_bg.svg' />
                                        <p className='ml-5'>
                                            Sliced Banana on Top
                                        </p>
                                    </div>
                                    <h1 className='font-bold text-2xl text-center mt-20'>
                                        IDR 25.000
                                    </h1>
                                    <button className='mt-5 mx-7 font-bold px-1 py-1 w-3/4 border-2 border-[#FFBA33] rounded-3xl mb-10 text-[#6A4029]'>
                                        Order Now
                                    </button>
                                </div>
                            </div>
                            <div className='w-80 flex flex-col border-2 border-[#DDDDDD] rounded-md'>
                                <div className='flex justify-center mt-16'>
                                    <div className='avatar'>
                                        <div className='rounded-full'>
                                            <img src='image/ayam.png' />
                                        </div>
                                    </div>
                                </div>
                                <h1 className='mt-5 font-bold text-3xl text-center'>
                                    Hazelnut Latte
                                </h1>
                                <div className='flex flex-col justify-center mx-10 mt-10'>
                                    <div className='flex flex-row mb-3'>
                                        <img src='image/ceklis_no_bg.svg' />
                                        <p className='ml-5'>
                                            Hazelnut Syrup
                                        </p>
                                    </div>
                                    <div className='flex flex-row mb-3'>
                                        <img src='image/ceklis_no_bg.svg' />
                                        <p className='ml-5'>
                                            Vanilla Whipped Cream
                                        </p>
                                    </div>
                                    <div className='flex flex-row mb-3'>
                                        <img src='image/ceklis_no_bg.svg' />
                                        <p className='ml-5'>
                                            Ice / Hot
                                        </p>
                                    </div>
                                    <div className='flex flex-row mb-3'>
                                        <img src='image/ceklis_no_bg.svg' />
                                        <p className='ml-5'>
                                            Sliced Banana on Top
                                        </p>
                                    </div>
                                    <h1 className='font-bold text-2xl text-center mt-20'>
                                        IDR 25.000
                                    </h1>
                                    <button className='mt-5 mx-7 font-bold px-1 py-1 w-3/4 border-2 border-[#FFBA33] rounded-3xl mb-10 text-[#6A4029]'>
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col mt-36 mx-48'>
                        <div className='flex flex-col items-center text-center'>
                            <h1 className='text-3xl flex font-bold mb-7 items-center w-96'>
                                Visit Our Store in the Spot on the Map Below
                            </h1>
                            <p className='w-1/2 text-lg'>
                                See our store in every city on the spot and spen your good day there. See you soon!
                            </p>
                        </div>
                        <div className='mt-20'>
                            <img src='image/HugeGlobal.png' />
                        </div>
                    </div>
                    <div className='flex flex-col mt-36 mx-32'>
                        <div className='text-center'>
                            <h1 className='text-4xl font-bold mb-7'>
                                Our Partner
                            </h1>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <img src='image/netflix.svg' />
                            <img src='image/redit.svg' />
                            <img src='image/amazon.svg' />
                            <img src='image/discord.svg' />
                            <img src='image/spotify.svg' />
                        </div>
                    </div>
                    <div className='flex flex-col mt-36 mx-32'>
                        <div className='flex flex-col items-center text-center'>
                            <h1 className='text-4xl font-bold mb-7 w-96'>
                                Loved by Thousands of Happy Customer
                            </h1>
                            <p className='text-lg'>
                                These are the stories of our customers who have visited us with great pleasure.
                            </p>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <div className='mt-12 w-96 border-2 border-[#6A4029] rounded-lg'>
                                <div className='flex flex-col w-80 mx-5 my-5'>
                                    <div className='flex flex-row justify-between'>
                                        <div className='flex flex-row '>
                                            <div className="avatar">
                                                <div className="w-12 rounded-full">
                                                    <img src="image/jisha.jpeg" />
                                                </div>
                                            </div>
                                            <div className='flex flex-col ml-4'>
                                                <h1 className='font-bold'>
                                                    Viezh Robert
                                                </h1>
                                                <p>
                                                    Warsaw, Poland
                                                </p>
                                            </div>
                                        </div>
                                        <div className='flex flex-row items-center'>
                                            <p>
                                                4.5
                                            </p>
                                            <img className='w-5' src='image/star.svg' />
                                        </div>
                                    </div>
                                    <div className='mt-5'>
                                        <p>
                                            “Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-12 w-96 border-2 hover:border-[#6A4029] rounded-lg'>
                                <div className='flex flex-col w-80 mx-5 my-5'>
                                    <div className='flex flex-row justify-between'>
                                        <div className='flex flex-row '>
                                            <div className="avatar">
                                                <div className="w-12 rounded-full">
                                                    <img src="image/jisha.jpeg" />
                                                </div>
                                            </div>
                                            <div className='flex flex-col ml-4'>
                                                <h1 className='font-bold'>
                                                    Viezh Robert
                                                </h1>
                                                <p>
                                                    Warsaw, Poland
                                                </p>
                                            </div>
                                        </div>
                                        <div className='flex flex-row items-center'>
                                            <p>
                                                4.5
                                            </p>
                                            <img className='w-5' src='image/star.svg' />
                                        </div>
                                    </div>
                                    <div className='mt-5'>
                                        <p>
                                            “Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-12 w-96 border-2 hover:border-[#6A4029] rounded-lg'>
                                <div className='flex flex-col w-80 mx-5 my-5'>
                                    <div className='flex flex-row justify-between'>
                                        <div className='flex flex-row '>
                                            <div className="avatar">
                                                <div className="w-12 rounded-full">
                                                    <img src="image/jisha.jpeg" />
                                                </div>
                                            </div>
                                            <div className='flex flex-col ml-4'>
                                                <h1 className='font-bold'>
                                                    Jisha bl
                                                </h1>
                                                <p>
                                                    Warsaw, Poland
                                                </p>
                                            </div>
                                        </div>
                                        <div className='flex flex-row items-center'>
                                            <p>
                                                4.5
                                            </p>
                                            <img className='w-5' src='image/star.svg' />
                                        </div>
                                    </div>
                                    <div className='mt-5'>
                                        <p>
                                            “Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row justify-between mt-24'>
                            <div className='flex flex-row'>
                                <div className='
                                mr-3
                                w-14 
                                h-5 
                                rounded-full 
                                bg-[#6A4029]
                                '>
                                </div>
                                <div className='
                                mr-3
                                w-5 
                                h-5 
                                rounded-full 
                                bg-[#DDE0E4]
                                hover:bg-[#6A4029]
                                '>
                                </div>
                                <div className='
                                mr-3
                                w-5 
                                h-5 
                                rounded-full 
                                bg-[#DDE0E4]
                                hover:bg-[#6A4029]
                                '>
                                </div>
                                <div className='
                                mr-3
                                w-5 
                                h-5 
                                rounded-full 
                                bg-[#DDE0E4]
                                hover:bg-[#6A4029]
                                '>
                                </div>

                            </div>
                            <div className='flex flex-row'>
                                <div className='rounded-full border-2 border-[#6A4029] w-10 h-10 items-center mr-3'>
                                    <img className='px-1 py-1' src='image/arrow-back-fill.svg' />
                                </div>
                                <div className='bg-[#6A4029] rounded-full w-10 h-10 items-center'>
                                    <img className='px-1 py-1' src='image/arrow-next-fill.svg' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between mx-32 bg-white shadow-2xl rounded-md px-16 py-16 mt-10'>
                        <div className='flex flex-col'>
                            <h1 className='text-4xl font-bold'>
                                Check our promo today!
                            </h1>
                            <p className='text-base'>
                                Let's see the deals and pick yours!
                            </p>
                        </div>
                        <div>
                            <button className='px-20 py-4 bg-[#FFBA33] rounded-xl font-bold'>
                                See Promo
                            </button>
                        </div>
                    </div>
                </main>
            </Layout>
            {/* <Footer /> */}

        </>
    )
}





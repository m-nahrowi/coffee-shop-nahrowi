// import Image from 'next/image'
import Link from 'next/link'


const Navbar = () => {

    return (
        <>
            <nav className="my-16 mx-32">
                <div className="flex flex-row justify-between">
                    <div className='flex flex-row'>
                        <img className='w-10 h-10' src='/image/coffee.svg' />
                        <h1 className="ml-5 items-center font-extrabold text-3xl w-48">
                            Coffee Shop
                        </h1>
                    </div>

                    <div className='font-bold text-lg items-center mt-3'>
                        <Link href="/">
                            <a className="mr-5">Home</a>
                        </Link>
                        <Link href="/product-customer" >
                            <a className="mr-5">Product</a>
                        </Link>
                        <Link href="/payment" >
                            <a className="mr-5">Your Cart</a>
                        </Link>
                        <Link href="/history-customer" >
                            <a>History</a>
                        </Link>
                    </div>
                    <div>
                        <Link href="/auth/login">
                            <button className="text-lg font-bold mr-3">
                                Login
                            </button>
                        </Link>
                        <Link href="/auth/signup">
                            <button className='border-1 ml-6 bg-[#FFBA33] text-black rounded-2xl px-6 py-2 font-bold text-lg'>
                                Sign Up
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>
            {/* <hr /> */}
        </>
    )
}

export default Navbar


{/* <ul className="ml-28">
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About Us</a>
                    </Link>
                </li>
                <li>
                    <Link href="/blog/hello-world">
                        <a>Blog Post</a>
                    </Link>
                </li>
            </ul> */}
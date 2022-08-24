// import Image from 'next/image'
import Link from 'next/link'


const NavbarLogin = () => {

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
                    <div className='flex flex-row items-center'>
                        <div>
                            <img className="mr-6 w-8 h-8" src='/image/cari.svg' />
                        </div>
                        <Link href="/chat">
                            <a>
                                <img className="mr-6 w-7 h-7" src='/image/chat.svg' />
                            </a>
                        </Link>
                        <div className="dropdown dropdown-end">
                            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://placeimg.com/80/80/people" />
                                </div>
                            </label>
                            <ul tabindex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <Link href='/profile'>
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">Edit</span>
                                        </a>
                                    </li>
                                </Link>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                        {/* <Link href="/auth/login">
                            <button className="text-lg font-bold mr-3">
                                Login
                            </button>
                        </Link>
                        <Link href="/auth/signup">
                            <button className='border-1 ml-6 bg-[#FFBA33] text-black rounded-2xl px-6 py-2 font-bold text-lg'>
                                Sign Up
                            </button>
                        </Link> */}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavbarLogin



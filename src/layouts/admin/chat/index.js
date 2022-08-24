import Head from 'next/head'
import Footer from "../../../components/footer"
import Navbar from "../../../components/navbar"
import NavbarLogin from "../../../components/NavbarLogin"


const ChatAdmin = () => {
    return (
        <>

            <Head>
                <title>Chat | Coffee Shop</title>
                <meta property="og:title" content="My page title" key="title" />
            </Head>
            {/* <Navbar /> */}
            <NavbarLogin />
            <main className=" 
            flex
            flex-col
            ">
                <div className='
                
                '>
                    <img className='
                    w-[100%] h-[140vh] bg-cover relative
                    ' src='/image/bg-chat.png' />
                </div>
                <div className='
                absolute
                flex
                flex-row 
                mx-32
                my-20
                rounded-2xl
                '>
                    <div className="
                    w-2/5 
                    bg-[#6A4029]
                    p-10
                    rounded-l-xl
                    ">
                        <div className='
                        flex
                        justify-center
                        mb-7
                        mx-8
                        '>
                            <input className='
                            bg-white
                            px-5
                            h-12
                            text-xl
                            rounded-3xl
                            w-full
                        ' type='text' placeholder="search chat..." />
                        </div>
                        <h1 className="
                        mb-10
                        text-white
                        font-bold
                        text-lg
                        text-center
                        ">
                            Choose a staff you want to talk with
                        </h1>
                        <div className="
                        flex
                        flex-row
                        mr-4
                        mb-10
                        text-white
                        ">
                            <div className="
                            avatar
                            mr-5
                            ">
                                <div className="
                                w-24
                                h-24
                                rounded-full
                                ">
                                    <img src="/image/profile.png" />
                                </div>
                            </div>
                            <div className="
                            flex
                            flex-col
                            ">
                                <p className="
                                font-bold
                                text-lg
                                ">
                                    Jason
                                </p>
                                <p className="
                                text-base
                                ">
                                    Hey, I’m Jason, Let’s talk and share what’s on your thoughts!
                                </p>

                            </div>

                        </div>
                        <hr />

                        <div className="
                        flex
                        flex-row
                        mr-4
                        mb-10
                        mt-10
                      text-white
                        ">
                            <div className="
                            avatar
                            mr-5
                            ">
                                <div className="
                                w-24
                                h-24
                                rounded-full
                                ">
                                    <img src="/image/profile.png" />
                                </div>
                            </div>
                            <div className="
                            flex
                            flex-col
                            ">
                                <p className="
                                font-bold
                                text-lg
                                ">
                                    Jason
                                </p>
                                <p className="
                                text-base
                                ">
                                    Hey, I’m Jason, Let’s talk and share what’s on your thoughts!
                                </p>

                            </div>

                        </div>
                        <hr />

                        <div className="
                        flex
                        flex-row
                        mr-4
                        mb-10
                        mt-10
                      text-white
                        ">
                            <div className="
                            avatar
                            mr-5
                            ">
                                <div className="
                                w-24
                                h-24
                                rounded-full
                                ">
                                    <img src="/image/profile.png" />
                                </div>
                            </div>
                            <div className="
                            flex
                            flex-col
                            ">
                                <p className="
                                font-bold
                                text-lg
                                ">
                                    Jason
                                </p>
                                <p className="
                                text-base
                            ">
                                    Hey, I’m Jason, Let’s talk and share what’s on your thoughts!
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* batas */}

                    <div className="
                    text-black
                    shadow-2xl
                    rounded-r-xl
                    border
                  border-sky-100
                    flex
                    flex-col
                    w-3/5
                  bg-white
                    p-10
                    ">

                        <div className="
                        shadow-2xl
                        p-3
                        rounded-xl
                        flex
                        flex-row
                        mr-4
                        mb-10
                        mt-10
                        ">
                            <div className="
                            avatar
                            mr-5
                            ">
                                <div className="
                                w-24
                                h-24
                                rounded-full
                                ">
                                    <img src="/image/profile.png" />
                                </div>
                            </div>
                            <div className="
                            flex
                            flex-col
                            ">
                                <p className="
                                font-bold
                                text-lg
                                ">
                                    Jason
                                </p>
                                <p className="
                                text-base
                            ">
                                    Hey, I’m Jason, Let’s talk and share what’s on your thoughts!
                                </p>
                            </div>
                        </div>
                        <hr className="
                        font-bold
                        " />
                        <p className="
                        text-center
                        my-72
                        text-[#9F9F9F]
                        ">
                            Hey, I’m Jason, Let’s talk and share what’s on your thoughts!
                        </p>
                    </div>

                </div>

            </main>
            <Footer />
        </>
    )
}

export default ChatAdmin
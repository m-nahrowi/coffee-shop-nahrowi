import Footer from "../../../../components/footer"

const ForgotLayout = () => {
    return (
        <>
            <div>
                <div className="flex flex-col">
                    <div className="">
                        <img className="w-[100%] h-[120vh] bg-cover relative" src="/image/forgot.png" />
                    </div>
                    <div className="flex flex-col absolute w-full text-white my-40 items-center">
                        <h1 className="text-center text-5xl font-extrabold">
                            Forgot your password?
                        </h1>
                        <p className="text-center mt-5 text-2xl">
                            Don’t worry, we got your back!
                        </p>

                        <div className="flex flex-row justify-center mt-24">
                            <input className="h-16 w-[500px] bg-white rounded-md" type="text" />
                            <button className="bg-[#FFBA33] w-48 rounded-md ml-4 font-bold text-4xl py-2 px-3 text-black">
                                Send
                            </button>
                        </div>

                        <p className="text-center mt-24 text-2xl">
                            Click here if you didn’t receive any link in 2 minutes
                        </p>
                        <button className="bg-[#6A4029] text-white h-16 w-64 rounded-lg mt-10 text-2xl">
                            Resend Link
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}


export default ForgotLayout
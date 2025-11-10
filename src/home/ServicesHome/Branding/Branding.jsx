
import { useNavigate } from "react-router-dom"



function Branding() {
    const navigate = useNavigate();



    function handleBack() {
        navigate(-1)
    }
    return (
        <div className="w-screen h-screen  flex flex-col " >

            <div className="w-screen h-screen  absolute hidden xl:block">

                <div class="  right-12 top-[20%]  absolute  opacity-100">
                    <img src="\Branding Vector 04.png" alt="Branding 1" />

                </div>

                <div class="  absolute right-12 top-[50%]   ">
                    <img src="\Branding Vector 03.png" alt="Branding 02" />

                </div>


                <div class=" absolute  right-40 bottom-[20%]  ">
                    <img src="Branding Vector 01.png" alt="Branding 03" />

                </div>


                <div class="left-30 bottom-[20%] absolute ">
                    <img src="\Branding Vector 04.png" alt="Branding 1" />

                </div>




            </div>




            <div className="  mt-4 ">
                <p className="font-['Halant']  text-center xl:text-[24px] font-semibold  ">
                    A brand is a voice, and a product is a souvenir." - Lisa Gansky
                </p>

                <div className="   flex  justify-center">
                    <img src="\Vector 5.png" alt="Vector 5" className="w-[80%] xl:w-[40%]" />
                </div>
            </div>

            <div>
                <button onClick={handleBack} className="absolute hidden xl:block top-[215px] left-[210px] w-[105px] h-[48px] px-4 py-3 gap-2 rounded-[24px] border border-black">
                    Back
                </button>
            </div>



            <div className=" mt-5  h-[80%] flex flex-col xl:flex-row items-center  gap-[10%] ">

                <div className="  bg-white w-[70%] h-[60%] p-4 xl:h-[60%] xl:w-[40%] flex items-center flex-col gap-[9.5px] opacity-100 shadow-[0px_11.4px_38px_0px_rgba(0,0,0,0.25)] xl:ml-[20%]">
                    <img src="/brand.png" alt="brand" class="w-[90%] h-[90%] bg-pink-600   object-fit" />
                    <p className="font-['Halant'] font-semibold not-italic text-xl text-center ">Branding</p>

                </div>

                <div className=" w-[70%] h-[80%]  xl:h-[40%]  xl:w-[50%] xl:mr-[20%]  left-[907px] rotate-0 opacity-100">
                    <p className="font-['Instrument_Sans']   font-normal  text-[#252729] text-[12px] xl:text-[20px] ">
                        A brand isn’t just what you see - it’s what you remember, what you carry home, and what you trust.
                        We shape brands that people remember, return to, and fall in love with.
                        <br />
                        V crafts:
                        <ul className="list-disc list-inside">
                            <li>Branding & Communication</li>
                            <li>Market Mapping</li>
                            <li>Content Management</li>
                            <li>Social Media Management</li>
                            <li>Rebranding</li>
                        </ul>
                    </p>

                </div>



            </div>



            <div className="  cursor-pointer flex flex-col justify-center items-center ">
                <div className="font-['Instrument_Sans'] font-normal xl:text-[24px] text-[#252729]">Explore Now</div>
                <img src="Arrow.png" alt="Arrow" className="w-20 xl:w-30" />
            </div>




        </div>
    )
}
export default Branding
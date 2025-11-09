

import { useNavigate } from "react-router-dom"



function Art() {
    const navigate = useNavigate();



    function handleBack() {
        navigate(-1)
    }
    return (
        <div className="w-screen h-screen  flex flex-col " >

            <div className="w-screen h-screen  absolute hidden xl:block">

                <div class="  right-12 top-[20%]  absolute  opacity-100">
                    <img src="\Art Curation Icons 01.png" alt="Art 1" />

                </div>

                <div class="  absolute right-12 top-[50%]   ">
                    <img src="\Art Curation Icons 02.png" alt="Art 02" />

                </div>


                <div class=" absolute  right-40 bottom-[20%]  ">
                    <img src="Art Curation Icons 03.png" alt="Art 03" />

                </div>


                <div class="left-30 bottom-[20%] absolute ">
                    <img src="Art Curation Icons 04.png" alt="Art 04" />


                </div>




            </div>




            <div className="  mt-4 ">
                <p className="font-['Halant']  text-center xl:text-[24px] font-semibold  ">
                   "V take art where it belongs, to the people.” - Vernita Verma
                </p>

                <div className="  flex  justify-center">
                    <img src="\Vector 5.png" alt="Vector 5" className="w-[80%] xl:w-[40%]" />
                </div>
            </div>

            <div>
                <button onClick={handleBack} className="absolute hidden xl:block top-[215px] left-[210px] w-[105px] h-[48px] px-4 py-3 gap-2 rounded-[24px] border border-black">
                    Back
                </button>
            </div>



            <div className=" mt-5  h-[80%] flex flex-col xl:flex-row items-center  gap-[10%] ">

                <div className=" w-[70%] h-[90%] xl:h-[40%] xl:w-[40%] flex flex-col gap-[9.5px] opacity-100 shadow-[0px_11.4px_38px_0px_rgba(0,0,0,0.25)] xl:ml-[20%]">
                    <img src="/images/sample.jpg" alt="Sample" class="w-full h-full rounded-xl object-cover" />
                </div>

                <div className=" w-[70%] h-[90%]  xl:h-[40%] xl:w-[50%] xl:mr-[20%]   left-[907px] rotate-0 opacity-100">
                    <p className="font-['Instrument_Sans']   font-normal  text-[#252729] xl:text-[20px] ">
                        Art isn’t meant to sit on distant walls - it’s meant to breathe, to travel, to belong.
                        Through every festival, every performance, and every gathering, we help stories find their stage and their people.
                        <br />
                        V crafts:
                        <ul className="list-disc list-inside">
                            <li>Art Festivals</li>
                            <li>Live Performances</li>
                            <li>Community Events</li>
                            <li>Cultural Storytelling</li>
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
export default Art
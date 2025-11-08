import { useNavigate } from "react-router-dom"



function Branding() {

    const navigate = useNavigate();



    function handleBack() {
        navigate(-1)
    }
    return (
        <div className="w-screen h-screen">


            <div className="absolute top-[100px] left-[409px] w-[1100px] h-[63px] opacity-100 rotate-0 bg-amber-200">
                <p className="font-normal font-['Halant']  text-[40px] w-full h-full bg-green-300">
                    A brand is a voice, and a product is a souvenir." - Lisa Gansky
                </p>
            </div>
            <div className="absolute top-[152px] left-[521px] w-[878px] h-[29px] opacity-100 rotate-0 ">
                <img src="\Vector 5.png" alt="Vector 5" />
            </div>




            <div className="absolute w-[636px] h-[475px] top-[292px] bg-amber-500 left-[907px] rotate-0 opacity-100">
                <p className="font-['Instrument_Sans'] font-normal  text-[#252729] text-[32px] leading-[44px] tracking-[0]">
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










            <div className="w-[429.4px] h-[548.38px] absolute top-[292.37px] left-[376px] p-[11.4px_9.5px] flex flex-col gap-[9.5px] opacity-100 shadow-[0px_11.4px_38px_0px_rgba(0,0,0,0.25)]">
                <img src="/images/sample.jpg" alt="Sample" class="w-full h-full rounded-xl object-cover" />
            </div>





            <div className="w-[145px] h-[65px] bg-amber-500 absolute top-[896px] left-[907px] border-1 border-black rounded-lg opacity-100">
                <div className="font-['Instrument_Sans'] font-normal text-[24px] text-[#252729]">Explore Now</div>
                <img src="Arrow.png" alt="Arrow" />
            </div>






            <div>
                <button onClick={handleBack} className="absolute top-[215px] left-[210px] w-[105px] h-[48px] px-4 py-3 gap-2 rounded-[24px] border border-black">
                    Back
                </button>
            </div>







            <div className="w-screen h-screen bg-pink-500">

                <div class="w-[115.1px] h-[141.09px] absolute top-[191px] left-[1626px] opacity-100">
                    <img src="\Branding Vector 04.png" alt="Branding 1" />
                </div>

                <div class="w-[115.1px] h-[141.09px] absolute  top-[574px] left-[1507px] opacity-100">
                    <img src="\Branding Vector 03.png" alt="Branding 02" />
                </div>


                <div class="w-[115.1px] h-[141.09px] absolute  bottom-20 left-[1600px] opacity-100">
                    <img src="Branding Vector 01.png" alt="Branding 03" />
                </div>


                <div class="w-[115.1px] h-[141.09px] absolute  bottom-40 left-40 opacity-100">
                    <img src="Branding Vector 02.png" alt="Branding 04" />
                </div>




            </div>

        </div>
    )
}
export default Branding
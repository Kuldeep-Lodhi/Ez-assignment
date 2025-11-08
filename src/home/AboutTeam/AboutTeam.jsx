import {Link} from "react-router-dom"

function AboutTeam() {
    return (
        <div className="h-screen w-screen">

            <div className="absolute top-[-17px]  bg-amber-400 left-[170.96px] w-[620.25px] h-[565.64px] opacity-100">
                <img src="Group 9.png" alt="Group 9" />
            </div>



            <div className="absolute top-[572px] left-[40] bg-amber-600 w-[442px] h-[442px] opacity-100">
                <img src="/indiaGate.png" alt="indiaGate" />
            </div>



            <div className="absolute top-[341px] left-[958px] w-[647.64px] h-[397px] opacity-100">
                <img src="/Group 2.png" alt="Group 2" />
            </div>



            <div className="absolute top-[502.97px]  left-[692.45px] w-[197.99px] h-[226.44px] opacity-100 border-2 border-solid border-black">
                <img src="/Vector.png" />
            </div>
            <div className="absolute top-[749px] left-[545px] w-[228px] h-[48] opacity-100">
                <p className="font-['Island_Moments']  text-[#103255] font-normal text-[42px] leading-[100%] tracking-[0]">
                    Branding Experts
                </p>

            </div>




            <div className="absolute top-[838px] left-[891px] w-[781px] h-[63px] opacity-100 rotate-0">
                <p className="font-halant font-normal text-[40px] leading-[100%] tracking-normal text-center">
                    Take a closer look at the stories V bring to life.
                </p>

            </div>




            <div className=" cursor-pointer shadow-[0px_4px_12px_0px_rgba(0,0,0,0.2)] absolute top-[925px] left-[1213px] bg-[#F15D2B] w-[136px] h-[44] opacity-100 rotate-0 flex items-center justify-center gap-2 rounded-[24px] px-[16] py-[12px]">
               <Link to="/portfolio"> <button className="text-[#FFFFFF] cursor-pointer">View Portfolio</button> </Link>
            </div>




            <div className="absolute top-[229px] left-[1107px] w-[151.5px] h-[95.75px] border-2 opacity-100 rotate-0">
                <img src="Vector (1).png" alt="vector (1)" />
            </div>
            <div className="absolute top-[168px] left-[1008px] w-[179px] h-[48] opacity-100 rotate-0">
                <p className="font-['Island_Moments'] font-normal text-[42px] leading-[100%] tracking-[0] text-center">
                    Film Makers
                </p>

            </div>






            
            <div className="absolute top-[343px] left-[1648px] w-[102.93px] h-[146px] border-2 opacity-100 rotate-0">
                <img src="Vector (2).png" alt="vector (1)" />
            </div>
            <div className="absolute top-[273px] left-[1683px] w-[167px] h-[48] opacity-100 rotate-0">
                <p className="font-['Island_Moments'] font-normal text-[42px] leading-[100%] tracking-[0] text-center">
                    Art Curators
                </p>

            </div>






        </div>
    )
}

export default AboutTeam
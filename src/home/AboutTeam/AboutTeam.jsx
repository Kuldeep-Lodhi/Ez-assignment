import { Link } from "react-router-dom"

function AboutTeam() {
    return (
        <div className="h-screen w-screen grid  sm:grid-cols-1 lg:grid-cols-2 ">

            <div className="flex  flex-col gap-2.5  md:w-[90%] sm:w-[90%] xl:h-[90%]  ">

                <div className="   lg:w-[80%] xl:h-[50%]  opacity-100">
                    <img src="Group 9.png" alt="Group 9" className="w-full h-full" />
                </div>



                <div className="    lg:w-[60%]     xl:w-[50%]  opacity-100">
                    <img src="/indiaGate.png" alt="indiaGate" />
                </div>

            </div>


            <div className="flex  items-center flex-col justify-evenly  md:w-[95%] sm:w-[90%] xl:h-[85%]   gap-10 p-4 m-4 ">


                <div className=" w-full    sm:h-[90%]  md:h-[90%] xl:h-[80%] opacity-100  flex items-center sm:justify-end   flex-col ">
                   

                   
                    <img src="/Group 2.png" alt="Group 2" className="sm:w-[60%] sm:h-[50%] xl:w-[90%]   " />

                    <ul className="lg:hidden sm:block list-disc">
                         <li className="font-['Island_Moments']  text-[#103255] font-normal text-[42px] leading-[100%] tracking-[0]">
                                    Branding Experts
                        </li>
                         <li className="font-['Island_Moments']  text-[#103255] font-normal text-[42px] leading-[100%] tracking-[0]">
                                   Film Makers
                        </li>
                         <li className="font-['Island_Moments']  text-[#103255] font-normal text-[42px] leading-[100%] tracking-[0]">
                                    Art Curators
                        </li>
                    </ul>


                      <div className="text-[#103255]  relative hidden lg:block  ">
                        <div className="  md:absolute right-110 bottom-0 rotate-20  opacity-100  ">
                            <img src="/Vector.png" className="hidden lg:block xl:w-[60%]" />

                            <div className="   opacity-100">
                                <p className="font-['Island_Moments']  xl:w-[228px] text-[#103255] font-normal text-[42px] leading-[100%] tracking-[0]">
                                    Branding Experts
                                </p>

                            </div>
                        </div>





                        <div className=" absolute xl:bottom-92 lg:w-[208px] md:w-[108px]  -left-80  ">

                            <div className="  opacity-100 rotate-0">
                                <p className="font-['Island_Moments'] font-normal text-[42px]  text-center">
                                    Film Makers
                                </p>

                            </div>
                            <img src="Vector (1).png" alt="vector (1)" className="hidden lg:block  xl:w-[60%] " />
                        </div>







                        <div className="  absolute bottom-90 left-20 xl:w-[208px]   opacity-100 rotate-0">

                            <div className=" opacity-100 rotate-0">
                                <p className="font-['Island_Moments'] font-normal text-[42px]  text-center">
                                    Art Curators
                                </p>

                            </div>
                            <img src="Vector (2).png" alt="vector (1)" className="hidden lg:block  rotate-270 xl:w-[30%]" />

                        </div>
                    </div>
                   
                   
                    



                    
                </div>








                <div className=" w-[clamp(781px)] h-[63px] opacity-100 ">
                    <p className="font-halant font-normal text-[clamp(25px,30px,50px)] leading-[100%] tracking-normal text-center">
                        Take a closer look at the stories V bring to life.
                    </p>

                </div>




                <div className=" cursor-pointer shadow-[0px_4px_12px_0px_rgba(0,0,0,0.2)]  bg-[#F15D2B] w-[136px] h-[44] opacity-100 rotate-0 flex items-center justify-center gap-2 rounded-[24px] px-[16] py-[12px]">
                    <Link to="/portfolio"> <button className="text-[#FFFFFF] cursor-pointer">View Portfolio</button> </Link>
                </div>




            </div>



        </div>
    )
}

export default AboutTeam
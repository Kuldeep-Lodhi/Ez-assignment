

import { Link } from "react-router-dom"


function Service() {
    return (
        <div className="w-screen h-screen  flex  items-center flex-col   " >
            <footer className="absolute -bottom-90 xl:-bottom-20  ">
                <img src="\Frame 33.png" alt="Frame 33" />
            </footer>


            <div className="   text-center mt-3.5">
                <p className="font-normal font-['Halant']  text-xl xl:text-2xl  ">
                    The storyboard reveals the breadth of our craft.
                </p>

                <div className="   ">
                    <img src="\Vector 5.png" alt="Vector 5" />
                </div>
            </div>




            <div className=" flex    gap-7 w-[95%] h-[80%]  mt-5 flex-col  xl:flex-row items-center    ">

                <img src="papercut.png" alt="papercut" className=" top-[30%] -rotate-12 z-1 absolute w-[20%] h-[20%]  hidden lg:block " />

                <img src="papercut.png" alt="papercut" className=" absolute left-[40%] top-[30%]    w-[20%] h-[20%]  hidden lg:block" />
                <img src="papercut.png" alt="papercut" className="absolute top-[30%] right-0 z-1  rotate-22 w-[20%] h-[20%]   hidden lg:block" />




        

                 <div className="  flex items-center flex-col w-[90%] h-[60%] ">

                    <div className=" bg-white  p-4 w-[60%] h-full  rotate-10 flex items-center flex-col   box-shadow: 0px 11.4px 38px 0px #00000040">
                       
                        <Link to="/branding"><img src="f1.png" alt="frame1 " className="bg-pink-700  m-3    object-fit w-[90%] " /></Link>
                        <p className="font-['Halant'] font-bold not-italic text-xl ">Film production</p>

                    </div>

                </div>




               

                <div className="  flex items-center flex-col w-[90%] h-[60%] ">

                    <div className=" bg-white  p-4 w-[60%] h-full  flex items-center flex-col   box-shadow: 0px 11.4px 38px 0px #00000040">
                       
                        <Link to="/branding"><img src="f1.png" alt="frame1 " className="bg-pink-700  m-3    object-fit w-[90%] " /></Link>
                        <p className="font-['Halant'] font-bold not-italic text-xl ">Branding</p>

                    </div>

                </div>




                <div className=" w-[90%] h-[60%]   flex items-center flex-col ">
                       
                    <div className="   bg-white p-2  w-[60%] h-full  flex items-center justify-center flex-col  -rotate-10 box-shadow: 0px 11.4px 38px 0px #00000040">
                
                        <Link to="/art"><img src="f1.png" alt="frame2" className=" w-[90%] m-3   bg-amber-600" /></Link>
                        <p className="font-['Halant'] font-bold not-italic text-xl ">Art Creation</p>

                    </div>

                </div>



            </div>













        </div>
    )
}
export default Service
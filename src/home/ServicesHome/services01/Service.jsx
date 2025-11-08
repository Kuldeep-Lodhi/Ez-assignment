

import {  Link } from "react-router-dom"


function Service() {
    return (
        <div className="w-screen h-screen" >


            <div className="absolute top-[100px] left-[563px] w-[793px] h-[63px] opacity-100 rotate-0 bg-amber-200">
                <p className="font-normal font-['Halant']  text-[40px] w-full h-full bg-green-300">
                    The storyboard reveals the breadth of our craft.
                </p>
            </div>
            <div className="absolute top-[152px] left-[521px] w-[878px] h-[29px] opacity-100 rotate-0 ">
                <img src="\Vector 5.png" alt="Vector 5" />
            </div>





            <div className="absolute top-[225px] left-[192px] w-[234px] h-[106px] bg-pink-300 ">
                <img src="papercut.png" alt="papercut" className="absolute" />
                <div className="absolute bg-amber-200 top-20 left-12  w-[429px] h-[548px] rotate-[7deg] opacity-100 px-[10px] py-[11px] gap-[10px] box-shadow: 0px 11.4px 38px 0px #00000040">
                    <Link to="/film"><button>film</button></Link>
                </div>
            </div>






            <div className="absolute top-[275px] left-[750px] w-[234px] h-[106px]  bg-pink-400">
                <img src="papercut.png" alt="papercut" />
                <div className="absolute bg-amber-200 top-12     w-[429px] h-[548px]  opacity-100 px-[10px] py-[11px]  box-shadow: 0px 11.4px 38px 0px #00000040">
                         <Link to="/branding"><button>Branding</button></Link>
                </div>  

            </div>




            <div className="absolute top-[225px] left-[1477px] w-[234px] h-[106px]  rotate-x-180">
                <img src="papercut.png" alt="papercut" />
                <div className="absolute bg-amber-200  bottom-18 right-7 w-[429px] h-[548px] px-[10px] py-[11px] rotate-5 opacity-100  box-shadow: 0px 11.4px 38px 0px #00000040">
                     <Link to="/art"><button>Art</button></Link>
                </div>

            </div>
















            <footer className="absolute  w-screen bottom-0 ">
                <img src="\Frame 33.png" alt="Frame 33" />
            </footer>
        </div>
    )
}
export default Service
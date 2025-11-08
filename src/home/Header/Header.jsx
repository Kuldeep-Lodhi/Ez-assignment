import { Link } from "react-router-dom"
import { useState } from "react"

function Header() {
    let [showMenu, setShowMenu] = useState(false)
    return (
        <div>
            <header className="bg-yellow-400 w-screen  p-5 flex justify-between opacity-100">

                <div className="w-[174px] h-[63px] bg-green-300 flex items-center justify-center rounded-[50px] pt-[5px] pr-[25px]  pl-[25px]  text-white">
                    <img src="/VFilms Logo.png" alt="VFilms Logo" className="w-[40px] h-[40px] object-contain" />
                </div>





                <nav   onClick={() => setShowMenu(!showMenu)} className="bg-green-400 flex items-center">


                   
                    
                    

                    
                    <ul className="flex bg-amber-200 items-center cursor-pointer gap-12 font-instrument font-normal text-[18px] leading-[100%] tracking-[0%]">
                        {showMenu && (
                        <ul className="flex bg-amber-200 items-center cursor-pointer gap-12 font-instrument font-normal text-[18px] leading-[100%] tracking-[0%]" >
                        <Link to="/services" >Services</Link>
                        <Link to="/team"> Their stories</Link>
                        <Link to="/about">Our Story</Link>
                        <Link to="/">Varnan</Link>
                        <Link to="/contact" className="flex rounded-[24px] bg-[#F15D2B] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.2)] ">
                            <button className="m-2 pt-2 pb-2 text-[#FFFF] ">Let's Talk ✉️</button>

                        </Link>
                        </ul>
                            )}
                        <li>
                            
                         <img src={showMenu ? "Open.png" : "Menu.png" } alt="menu icons "/>
                            

                        </li>







                    </ul>

                    {/* <div className="flex bg-amber-200 items-center cursor-pointer gap-12 font-instrument font-normal text-[18px] leading-[100%] tracking-[0%]">

                        <img src="Menu.png" />

                    </div> */}

                    

                </nav>

            </header>

        </div>
    )
}

export default Header
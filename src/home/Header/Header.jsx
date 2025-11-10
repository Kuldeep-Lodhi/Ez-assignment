import { Link } from "react-router-dom"
import { useState } from "react"

function Header() {
    let [showMenu, setShowMenu] = useState(false)
    return (
        <div className="w-screen">
            <header className="bg-[#f1e1e159]  w-screen mt-1  p-2  flex justify-between ">

                <div className="w-[15%] xl:w-[10%]  flex items-center justify-center  text-white">
                    <img src="/VFilms Logo.png" alt="VFilms Logo" className=" w-full   " />
                </div>


                <nav onClick={() => setShowMenu(!showMenu)} className="  h-[50%]   ">

                    <ul className="flex \ cursor-pointer font-instrument  font-normal ">
                        {showMenu && (

                            <ul className="  cursor-pointer gap-12  text-l z-20 absolute w-full top-20 left-0   h-[20%] xl:text-xl  xl:top-1   xl:w-[40%]  xl:h-[8%]  xl:left-[50%]  font-instrument font-normal " >
                               
                               <ul className="flex flex-col items-center bg-white  justify-center w-full mt-2 xl:flex-row  xl:gap-4  ">
                                <Link to="/services" >Services</Link>
                                <Link to="/team"> Their stories</Link>
                                <Link to="/about">Our Story</Link> 
                                <Link to="/">Varnan</Link>
                                <Link to="/contact" className="flex rounded-[24px] bg-[#F15D2B] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.2)] ">
                                    <button className="m-2 pt-2 pb-2 text-[#FFFF] ">Let's Talk ✉️</button>

                                </Link>
                                </ul>
                            </ul>
                        )}
                        <li>

                            <img src={showMenu ? "Open.png" : "Menu.png"} alt="menu icons  " className=" " />


                        </li>







                    </ul>





                </nav>

            </header>

        </div>
    )
}

export default Header


function Portfolio(){
    return(
        <div className="w-screen h-screen flex flex-col items-center text-center ">
            <div className="absolute left-[4%] top-[20%] hidden xl:block ">
                <img src="/Cam Group.png" alt="Cam Group"/>
            </div>

            <div className="absolute bottom-0 right-0 hidden xl:block ">
                <img src="/cir.png" alt="circle"/>
            </div>



            <div className="   w-[90%] h-[20%] m-[2%]  ">           
                <p className="  font-['Halant'] font-normal text-[40px]  ">
                    The Highlight Reel
                </p>

                <p className="font-['Instrument_Sans'] font-normal text-[24px] ">
                    Watch the magic we’ve captured.
                </p>
            </div>


            <div className="  w-[60%] h-[50%]  ">
                <img src="Group 11.png" alt="video portfolio" className="w-full h-full"/>

            </div>

        </div>
    )
}
export default Portfolio 
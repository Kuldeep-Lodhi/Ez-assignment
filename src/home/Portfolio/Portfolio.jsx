function Portfolio(){
    return(
        <div className="w-screen h-screen">
            <div className="absolute top-[240px] left-[120px] w-[224px] h-[510px] opacity-100 rotate-0">
                <img src="/Cam Group.png" alt="Cam Group"/>
            </div>



            <div className="absolute top-[120px] left-[778px] w-[364px] h-[104px] opacity-100 rotate-0 gap-[12px]">           
                <p className="w-[364px] h-[63px] opacity-100 rotate-0 font-['Halant'] font-normal text-[40px] leading-[100%] tracking-[0] text-center">
                    The Highlight Reel
                </p>

                <p className="font-['Instrument_Sans'] font-normal text-[24px] leading-[100%] tracking-[0] text-center">
                    Watch the magic we’ve captured.
                </p>
            </div>

        </div>
    )
}
export default Portfolio 
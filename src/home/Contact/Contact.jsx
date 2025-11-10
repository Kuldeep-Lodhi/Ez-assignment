import { useState } from "react"
import axios from "axios"


function Contact() {
    let [formDetails, setFormDetails] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })

    let [formMsg, setfromMsg] = useState("")

    let [typing, setTyping] = useState(false)

   

    async function handleSubmit(e) {
        e.preventDefault();

        if (!formDetails.name || !formDetails.email || !formDetails.phone || !formDetails.message) {
           
            setfromMsg("All fields are required")
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formDetails.email)) {
           
            setfromMsg("Invalid email")
            return;
        }

        if(!formDetails.phone.length>9){
            
            setfromMsg("invalid PhoneNo ")
            return;
        }



        try {
            let formRequest = await axios.post("https://vernanbackend.ezlab.in/api/contact-us/", {
                name: formDetails.name.trim(),
                email: formDetails.email.trim(),
                phone: formDetails.phone.trim(),
                message: formDetails.message.trim()
            })


            if (formRequest.status === 201) {
                alert(formRequest.data.message)
                setfromMsg("Send Successfully")
             
                setFormDetails({ name: "", email: "", phone: "", message: "" });
            }

        } catch (error) {
            console.error(error)
           
            setfromMsg("Something went-wrong")

        }




    }

    function handleChange(e) {
        let { value, name } = e.target
        setFormDetails({ ...formDetails, [name]: value })
        setTyping(!typing)


    }


    return (
        <div className="w-screen h-screen  flex   gap-3    ">
             <img src="circle2.png" alt="circle2" className=" absolute hidden  xl:block w-[40%] h-[30%]  z-1 -right-4 mix-blend-darker xl:opacity-70  "/>

            <div className="    w-[40%]   opacity-100 rotate-0 flex items-center flex-col justify-center  text-center">
                <p className="font-['Instrument_Sans'] h-[80%] flex items-center  font-normal s ml-[10%]  leading-[100%] tracking-[0]">
                    Whether you have an idea, a question, or simply want to explore how V
                    can work together, V're just a message away.Let's catch up over coffee.Great
                    stories always begin with a good conversation
                </p>



                 <div className="  w-full flex justify-start  ">
                    <img src="circle.png" alt="circle" className="   w-[50%]  hidden xl:block  "/>

                 </div>

            </div>

           






            <div className="  w-[55%]  flex flex-col  m-4 justify-center  ">
               
                <div className="">
                    <p className="font-['Halant'] font-normal   xl:text-[40px]  text-center">
                        Join the Story
                    </p>

                    <p className="font-['Instrument_Sans'] font-normal sm:text-[24px] text-center pt-5 pb-8">
                        Ready to bring your vision to life? Let’s talk.
                    </p>

                </div>



                <form className="  w-[90%]  flex flex-col m-2.5 gap-2     " onSubmit={handleSubmit} >
                    <div className="flex flex-col m-2.5 gap-2  ">
                        <div onChange={handleChange} className=" h-20 bg-[#FFFFFF] pl-4.5 text-center  "  >
                            <p className="font-island text-xl xl:text-4xl font-bold sm:text-3xl">form status</p>
                            <p >
                                {formMsg?<p className="text-red-600  ">{formMsg}</p>:<p className="text-green-600 text-center">{typing ? "Typing..." : <p className="text-red-500">Waiting...</p>}</p>
}

                            </p>

                            
                        </div>

                        <input type="text" name="name" value={formDetails.name} onChange={handleChange} className=" placeholder:text-orange-500 h-12 outline-orange-400 pl-4.5 bg-[#FFFFFF]" required placeholder="your name" />

                        <input type="email" name="email" value={formDetails.email} onChange={handleChange} className=" placeholder:text-orange-500 h-12 outline-orange-400 pl-4.5 bg-[#FFFFFF]" required placeholder="your email" />

                        <input type="text" name="phone" value={formDetails.phone} onChange={handleChange} className=" placeholder:text-orange-500 h-12 outline-orange-400 pl-4.5 bg-[#FFFFFF]" required placeholder="phone" />

                        <textarea name="message" value={formDetails.message} onChange={handleChange} className="placeholder:text-orange-500 h-30 outline-orange-400 pl-4.5 bg-[#FFFFFF] rounded-xl overflow-auto resize-none" placeholder="your message">

                        </textarea>
                    </div>

                    <div className="flex items-center  justify-center">
                        <button className="  bg-[#F15D2B] p-1.5 text-[#FFFF]  rounded-xl ">
                            Submit
                        </button>
                    </div>



                    <div className="   text-center ">
                        <footer className=" font-bold  xl:flex justify-evenly text-[#F15D2B]   ">
                            <p>vernita@varnanfilms.co.in</p>
                            <p>+91 98736 84567</p>
                        </footer>
                    </div>

                </form>






            </div>









        </div>
    )
}
export default Contact
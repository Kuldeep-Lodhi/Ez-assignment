import { useState } from "react"
import axios from "axios"


function Contact() {
    let [formDetails, setFormDetails] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })

        

    async function handleSubmit(e) {
        e.preventDefault();

        if (!formDetails.name || !formDetails.email || !formDetails.phone || !formDetails.message) {
            alert("all fields are required");
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(formDetails.email)){
            alert(" invalid email")
            return;
        }




        try {
            let formRequest = await axios.post("https://vernanbackend.ezlab.in/api/contact-us/",{
          name: formDetails.name,
          email: formDetails.email,
          phone: formDetails.phone,
          message: formDetails.message
        })


        if(formRequest.status === 201){
            alert(formRequest.data.message)
            setFormDetails({ name: "", email: "", phone: "", message: "" });
        }
            
        } catch (error) {
            console.error(error)
            alert("something went wrong")
            
        }




    }

    function handleChange(e) {
        let { value, name } = e.target
        setFormDetails({ ...formDetails, [name]: value })


    }


    return (
        <div className="w-screen h-screen">

            <div className="absolute bg-amber-500 top-[200px] left-[1010px] w-[700px] h-[679px] opacity-100 rotate-0 gap-[80px]">
                <p className="font-['Halant'] font-normal text-[40px] leading-[100%] tracking-[0] text-center">
                    Join the Story
                </p>

                <p className="font-['Instrument_Sans'] font-normal text-[24px] leading-[100%] tracking-[0] text-center pt-5 pb-8">
                    Ready to bring your vision to life? Let’s talk.
                </p>





                <form className="w-[700px] h-[375px] opacity-100 rotate-0 gap-[20px] bg-green-600" onSubmit={handleSubmit}>


                    <input type="text" name="name" value={formDetails.name} onChange={handleChange} className="  w-[700px] max-w-[808px] h-[43px] min-h-[43px] opacity-100 rotate-0 px-[12px] py-[10px] border border-[#EAEAEA] rounded-[2px] mb-5 bg-[#FFFFFF]" required="true" placeholder="your name" />

                    <input type="email" name="email" value={formDetails.email} onChange={handleChange} className=" w-[700px] max-w-[808px] h-[43px] min-h-[43px] opacity-100 rotate-0 px-[12px] py-[10px] border border-[#EAEAEA] rounded-[2px] mb-5 bg-[#FFFFFF]" required="true" placeholder="your email" />

                    <input type="text" name="phone" value={formDetails.phone} onChange={handleChange} className=" w-[700px] max-w-[808px] h-[43px] min-h-[43px] opacity-100 rotate-0 px-[12px] py-[10px] border border-[#EAEAEA] rounded-[2px] mb-5 bg-[#FFFFFF]" required="true" placeholder="phone" />

                    <textarea name="message" value={formDetails.message} onChange={handleChange} className="w-[700px] h-[120px] opacity-100 rotate-0 border border-[1px] px-[12px] py-[12px] rounded-[2px]  border-[#EAEAEA] bg-[#FFFFFF] rounded-[2px] overflow-auto resize-none" placeholder="your message">

                    </textarea>


                    <div className="flex items-center bg-pink-400 justify-center">
                        <button className=" w-[93px] h-[46px]  bg-[#F15D2B]  text-[#FFFF] mt-2 rotate-0 px-4 py-[12px] gap-[8px] rounded-[24px]">
                            Button
                        </button>
                    </div>





                </form>




                <div className="flex justify-center bg-pink-200 w-full h-15 mt-3">
                    <footer className="w-[374px] h-full font-bold   bg-green-300 opacity-100 rotate-0 gap-[20px] flex justify-center items-center">
                        <p>vernita@varnanfilms.co.in</p>
                        <p>+91 98736 84567</p>
                    </footer>
                </div>

            </div>






            <div className="absolute top-[467px] left-[210px] w-[600px] h-[145px] opacity-100 rotate-0">
                <p className="font-['Instrument_Sans'] font-normal text-[24px] leading-[100%] tracking-[0]">
                    Whether you have an idea, a question, or simply want to explore how V can work together, V're just a message away.Let's catch up over coffee.Great stories always begin with a good conversation
                </p>

            </div>


        </div>
    )
}
export default Contact
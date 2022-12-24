import { motion } from "framer-motion";
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {SiWhatsapp} from "react-icons/si"
import "./contact.css";
const Contact = () => {
    return ( 
        <motion.section style={{"--clr":"#feb019"}}
        initial={{ x: "+100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ x: "-100vw" }}
        >
            <div className="title">
                <h1>Contact</h1>
                <h1>Contact</h1>
            </div>  
            <div className="container contact__container">
                <div className="contact__options" >
                    <article className="contact__option" style={{"--clr":"#ff4560"}}>
                        <MdOutlineEmail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>Hazem0Abdennadher@gmail.com</h5>
                        <a href="mailto:Hazem0Abdennadher@gmail.com">Send a message</a>
                    </article>
                    <article className="contact__option" style={{"--clr":"#008ffb"}}>
                        <RiMessengerLine className="contact__option-icon"/>
                        <h4>Messenger</h4>
                        <h5>Haz Em</h5>
                        <a href="https://m.me/Ha.Zem.A.07">Send a message</a>
                    </article>
                    <article className="contact__option"  style={{"--clr":"#00e396"}}>
                        <SiWhatsapp className="contact__option-icon"/>
                        <h4>WhatsApp</h4>
                        <h5>+216 56 36 46 47</h5>
                        <a href="https://api.whatsapp.com/send?phone=+21656364647">Send a message</a>
                    </article>
                </div>
                <form action="">
                    <input type="text" name="name" placeholder="Your Full Name" id="test" required style={{"--clr":"#ff4560"}}/>
                    <input type="email" name="email" placeholder="Your Email" required style={{"--clr":"#008ffb"}}/>
                    <textarea name="message" rows="7" placeholder="Your Message" required style={{"--clr":"#00e396"}}></textarea>
                    <button type="submit" className="btn btn-primary" style={{"--clr":"#feb019"}} >Send Message</button>
                </form>
            </div>
        </motion.section>
     );
}
 
export default Contact;
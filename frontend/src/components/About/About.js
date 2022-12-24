import "./about.css";
import {motion} from "framer-motion"
import {SplitText} from  "./SplitText"; 
const About = () => {
    return ( 
        <motion.section style={{"--clr":"#00e396"}}
        initial={{ x: "+100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ x: "-100vw" }}
        >
            <div className="title">
                <h1>About</h1>
                <h1>About</h1>
            </div>
            <div className="paragraph">
              <SplitText
                initial={{ y: '100%' }}
                animate="visible"
                variants={{
                  visible: i => ({
                    y: 0,
                    transition: {
                      delay: i * 0.1
                    }
                  })
                }}
              >
                Today, air pollution is the world's most serious environmental and public health problem. the climate, and ecosystems are all harmed by air pollution. The release of poisonous gases from industry, automobile emissions, and higher concentrations of harmful gases and particles in the atmosphere, particularly in laboratories, necessitates a real-time air quality monitoring and analysis system so relevant decisions may be made swiftly. thus we created this  MERN-Stack web application where we used our custom API to store the data we capture from different sensors attached to a raspberry pi on a cloud database so all the information can be accessed very easily, then we show real-time data alongside some statistics in our website.
                DISCLAIMER : currently we're using fake data to show the potential usage of our application in real life.</SplitText>
            </div>
            
        </motion.section>
    );

}
 
export default About;
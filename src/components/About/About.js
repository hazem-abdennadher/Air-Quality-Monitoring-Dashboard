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
                Air pollution is the world`s largest environmental and public health challenge today. Air pollution has a negative impact on human health, climate, and ecosystems. The air is polluted by the release of toxic gases from industry, emissions from vehicles, and increased concentrations of harmful gases and particles in the atmosphere, especially in laboratories. This requires measurements and analysis to monitor air quality in real-time so that appropriate decisions can be made quickly. This article introduces a real-time autonomous air quality monitoring system that includes various parameters such as carbon dioxide (CO2), temperature, humidity, and gas. The Internet of Things is now widely used in all industries and also plays an important role in air quality monitoring systems. The Internet of Things, integrated with cloud computing, provides a new way to better manage data from various sensors collected and transmitted by ARM-based Raspberry Pi single-board nanocomputers.
              </SplitText>
            </div>
            
        </motion.section>
    );

}
 
export default About;
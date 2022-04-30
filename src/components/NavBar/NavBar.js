import "./navbar.css"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const NavBar = () => {
    return (
            <motion.nav
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ x: "-100vw" }}
            > 
                <input type="checkbox" id="nav-check"/>
                    <div className="nav-header">
                        <h4 data-text="&nbsp;Air Quality">&nbsp;Air Quality&nbsp;</h4>
                    </div>
                    <div className="nav-btn">
                        <label htmlFor="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                        </label>
                    </div>
                <ul className="nav-links">
                    <li style={{"--clr":"#ff4560"}}>
                        <Link to={"/MERN-Air-Quality-Monitoring/"} href="#"  data-text="&nbsp;Monitoring" >
                            &nbsp;Monitoring&nbsp;
                        </Link>
                    </li>
                    <li style={{"--clr":"#008ffb"}}>
                        <Link to={"/MERN-Air-Quality-Monitoring/statistics"} href="/statistics"  data-text="&nbsp;Statistics">
                            &nbsp;Statistics&nbsp;
                        </Link>
                    </li>
                    <li style={{"--clr":"#00e396"}} >
                        <Link to={"/MERN-Air-Quality-Monitoring/about"} href="/about" data-text="&nbsp;About">
                            &nbsp;About&nbsp;
                        </Link>
                    </li>
                    <li style={{"--clr":"#feb019"}}>
                        <Link to={"/MERN-Air-Quality-Monitoring/contact"} href="/contact" data-text="&nbsp;Contact">
                           &nbsp;Contact&nbsp;
                        </Link>
                    </li>
                </ul>
            </motion.nav>
    );
}
export default NavBar;

/*
           
                <input type="checkbox" id="nav-check"/>
                <div className="nav-header">
                    <div className="nav-title">
                    Air Quality
                    </div>
                </div>
                <div className="nav-btn">
                    <label htmlFor="nav-check">
                    <span></span>
                    <span></span>
                    <span></span>
                    </label>
                </div>
                
                <div className="nav-links">
                    <Link to={"/"}><a  href="#Monitoring">Monitoring</a></Link>
                    <Link to={"/statistics"}><a href="#statistics" >Statistics</a></Link>
                
                </div>
            </nav>
*/
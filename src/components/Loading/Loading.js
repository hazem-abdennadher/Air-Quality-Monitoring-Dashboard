import "./loading.css";
const Loading = () => {
    return ( 
        <div className="loading" id="loading">
                <div className="dot" style={{"--clr":"#ff4560", "--delay":"0.1s"}  }></div>
                <div className="dot" style={{"--clr":"#008ffb", "--delay":"0.2s"}}></div>
                <div className="dot" style={{"--clr":"#00e396", "--delay":"0.3s"}}></div>
                <div className="dot" style={{"--clr":"#feb019", "--delay":"0.4s"}}></div>
        </div>
    );
}
 
export default Loading;
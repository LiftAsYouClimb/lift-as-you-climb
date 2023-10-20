import wordBubble from '../../assets/wordbubble.png'
import figure from '../../assets/2.png'
import logoTwo from '../../assets/logo2.png'
import figures from '../../assets/figures.png'

import { Link } from 'react-router-dom';


var wordBubbleStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  width: "60vw",
  height: "100%",
  textAlign: "center",
  position: "relative",
  backgroundImage: `url(${wordBubble})`,
  backgroundSize: "90%",
  backgroundRepeat: "no-repeat",
}

var loginButton = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "'Bebas Neue', sans-serif",
  fontSize: "1.2em",
  color: "white",
  background: "#007a7c ",
  borderRadius: "25px",
  border: "none",
  height: "2em",
  width: "13em",
  cursor: "pointer",
}

const AboutPage = () => {
    return (
      <>
      <div style={{ height: "100%", width: "100vw", alignItems: "flex-end", display: "flex"}}>
          <img style={{ width: "50em"}} src={figure} alt="" />
          <div style={{ height: "100%", width: "100vw", display: "flex", flexDirection: "column" }}>
            <div style={wordBubbleStyle}>
              <img style={{ width: "35em", height:"auto", marginTop:"10em", marginRight:"12em" }} src={logoTwo} alt="Lift As You Climb" />
              <div style={{ display: "flex", flexDirection: "column", width: "90%", alignItems:"center", paddingRight:"10em" }}>
                <p style={{ marginTop: "0", fontSize: "1.7em" }}>connects a widespread community of women in the tech industry or those aspiring to join it.</p>
                <p style={{ marginTop: "0", fontSize: "1.7em", fontFamily: "'Bebas Neue', sans-serif"}}>Have wisdom to share?</p>
                <Link to={`/login`} style={loginButton}>Start Lifting</Link>
              </div>
             
            </div>
        </div>
        </div>
        <div style={{ height: "60%", width: "100%", display: "flex", backgroundColor: "#0f283c", color: "white", marginTop:"2em"}}>
          <div style={{ width: "50%", height: "100%", display: "flex", flexDirection: "column", alignItems:"center", padding:"3em" }}>
            <h2 style={{fontFamily: "'Bebas Neue', sans-serif", textAlign:"center", fontSize:"2em"}}>Together, we climb!</h2>
            <p style={{fontFamily: "'Roboto', sans-serif", fontSize:"1.5em", lineHeight:"2em", textAlign: "center", marginTop:"0"}}> Whether it's negotiating salaries, breaking into a new field, or finding that work-life balance, Lift as You Climb facilitates a community who works to lift one another up.</p>
            <Link to={`/login`} style={loginButton}>Start Climbing</Link>
          </div>
          <div style={{ width: "50%", display:"flex", alignItems:"flex-end"}}>
            <img src={figures} alt="" />
          </div>
        </div>
      </>
    )
}

export default AboutPage;
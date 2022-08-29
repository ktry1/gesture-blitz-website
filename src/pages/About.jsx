import React from "react"
import img1 from "../images/img1.png"
import img2 from "../images/img2.png"
import img3 from "../images/img3.png"
import img4 from "../images/img4.png"
import img5 from "../images/img5.png"

export default function About(){
    let [images, setImages] = React.useState([img1,img2,img3,img4,img5]);
    let [activeSlide, setActiveSlide] = React.useState(0);
    let [activeTimeout, setActiveTimeout] = React.useState();

    function forward(){
        clearTimeout(activeTimeout);
        if (activeSlide < 4) {
            setActiveSlide(prevValue=>{ return prevValue+1});
        }
        else{
            setActiveSlide(0);
        }
    }

    function back(){
        clearTimeout(activeTimeout);
        if (activeSlide > 0) {
            setActiveSlide(prevValue=>{ return prevValue-1});
        }
        else{
            setActiveSlide(4);
        }
        
    }

    function turnSlide(){
        if (activeSlide < 4) {
            setActiveSlide(prevValue=>{ return prevValue+1});
        }
        else{
            setActiveSlide(0);
        }
    }

    React.useEffect(()=>{
        let newTimeout = setTimeout(turnSlide, 2500);
        setTimeout(newTimeout);
        return ()=>{
            clearTimeout(activeTimeout);
        }
    },[activeSlide])

    return(
        <div >
            <p style={{fontFamily: "'Playfair Display', serif", fontSize:"2rem", fontFamily: "'Noto Serif', serif", backgroundColor:"white"}}>Gesture Blitz is a fun little app to sharpen your gesture drawing skills and do so with style.</p>
            
            <h2 style={{lineHeight:"3rem", backgroundColor:"#D2D0FE", color:"black",fontFamily: "'Playfair Display', serif", fontSize:"2rem" }}>Features:</h2>
            
            <ul style={{textAlign:"left", backgroundColor:"#FDECFF", paddingLeft:"20px", fontFamily: "'Open Sans', sans-serif", fontWeight:"300", fontSize:"1.5rem", listStyle:"inside"}}>
                <li>Completely free, now and forever 💰</li>
                <li>Select a whole folder of your images 📁</li>
                <li>Set minutes and seconds for each pic ⏱️</li>
                <li>Select the number of pics from folder that you would like to use 🖼️</li>
                <li>Simplistic and unobstructive interface ⚙️</li>
                <li>Pause and resume the timer if you need a break ⏯️</li>
                <li>Freely switch between the pictures 🔀</li>
                <li>Instantly rewind to start a new session 🔄</li>
                <li>Open source and ready for modifications 💻</li>
            </ul>
            
            <h2 style={{backgroundColor:"#D2D0FE", lineHeight:"3rem", color:"black",fontFamily: "'Playfair Display', serif" , fontSize:"2rem"}}>Keyboard Controls:</h2>
            
            <ul style={{textAlign:"left", backgroundColor:"#FDECFF", paddingLeft:"20px",fontFamily: "'Open Sans', sans-serif",fontWeight:"300", fontSize:"1.5rem"}}>
                <li>⬅️ ➡️ - switch pics</li>
                <li>Spacebar - pause/play timer</li>
                <li>Backspace - get back to beginning</li>
            </ul>
           
            <h2 style={{backgroundColor:"#D2D0FE", lineHeight:"3rem", color:"black",fontFamily: "'Playfair Display', serif", fontSize:"2rem", fontWeight:"500"}}>Interface Gallery:</h2>
            <div style={{backgroundColor:"#FDECFF"}}>
            <div style={{ width:"70%", margin:"auto"}}>
            <img src={images[activeSlide]}/>
            </div>
            </div>

            <h2 style={{lineHeight:"3rem", backgroundColor:"#D2D0FE",fontFamily: "'Playfair Display', serif", fontSize:"2rem"}}>Wanna contribute? 💪😎 ➡️➡️ <a target="_blank" href="https://github.com/ktry1/Gesture-Blitz">Github</a></h2>
            
        </div>
    )
}
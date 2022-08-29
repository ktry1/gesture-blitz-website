import React from "react"
import { Link } from "react-router-dom"
import logo from '../icon.ico'

export default function Header(){
    return(
    <div style={{backgroundColor:"#9399FF", height:"45px", fontSize:"1.2rem", position:"sticky", width:"100%", display:"block", fontFamily: "'Playfair Display', serif", color:"white"}} >
  
    <p style={{lineHeight:"45px", display:"inline"}} className="ml-3">Gesture Blitz</p>
  
 
  <img style={{height:"100%", display:"inline"}} className="ml-3" src={logo}></img>
  
      <div style={{float:"right"}}>
    <Link style={{lineHeight:"45px", }} to="/" className="mr-3">About</Link>
  
        
    <Link style={{lineHeight:"45px"}} className="mr-3" to="/download">Download</Link>
  
  
    <Link style={{lineHeight:"45px"}} className="mr-3" to="/support">Support me</Link>
    </div>
</div>
    )
}
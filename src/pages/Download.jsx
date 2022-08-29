

export default function Download(){
    return(
        <div style={{display:"flex", backgroundColor:"#FDECFF"}}>
            
            <div style={{width:"50%"}}>
            <h1 style={{fontSize:"5rem", fontFamily: "'Playfair Display', serif"}}>Windows 🖥️</h1>
            <a className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" style={{fontSize:"4rem", display:"block-inline", width:"70%", margin:"auhref"}} href="https://www.dropbox.com/s/jg1nq0irblyvrxr/gesture_blitz%20Setup%200.1.0.exe?dl=0" target="_blank" >Installer version 🧙‍♂️</a>
            <br/>
            <br/>
            <a className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" style={{fontSize:"4rem",display:"block-inline", width:"40%", margin:"auhref"}} href="https://www.dropbox.com/s/oa660tmt9pwnjz7/Gesture%20Blitz%20Windows.zip?dl=0" target="_blank" >Folder version 📁</a>
            </div>
            <div style={{width:"50%"}}>
            <h1 style={{fontSize:"5rem", fontFamily: "'Playfair Display', serif"}}>Linux 🐧</h1>
            <a className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" style={{fontSize:"4rem"}} href="https://www.dropbox.com/s/8va5fu1z5p0909d/Gesture%20Blitz%20Linux.zip?dl=0" target="_blank" >folder version 📁</a>
            </div>
        </div>
    )
}
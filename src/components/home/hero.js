import { useState } from "react";
import { NavLink } from "react-router-dom";
import loveLogo from '../../assets/icon/love.png'

function Hero(props) {
  const [maniac,setManiac] = useState('')
  const [maxident,setMaxident] = useState('')

  const loopMaxi = (index) => {
    console.log("okay")
    let love = ['']
    let tampil = love
    for (let index = 0; index < 50; index++) {
      let size = Math.random() *  60;
      let totalSize = size+'px'
      let durasi = Math.random() *  60+'s'
      // let totacdurasi = Math.random() *  40
      let img = <img src={loveLogo} alt="love" style={{animationDuration : durasi}}  width={totalSize} height={totalSize}/>
      love.push(img)
    console.log("okay")

    }setMaxident(tampil)
  }
  const loop = (index) => {
    console.log("okay")
    let olla = ['']
    let tampil = olla
    
    for (let index = 0; index < 50; index++) {
      let size = Math.random() *  60;
      let totalSize = size+'px'
      let durasi = Math.random() *  60+'s'
      // let totacdurasi = Math.random() *  40
      let svg = <svg style={{animationDuration : durasi}}  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width={totalSize} height={totalSize}><path fill="#459E48" d="M12,31c-2.3,0-3.7-3.2-4-5c0.7-1.3,3.3-2,4-2c5.7-2.4,17.8-2.9,24,0c0.7,0,3.3,0.7,4,2c-0.3,1.8-1.7,5-4,5C33.6,32.8,14.7,34.2,12,31z"/><path fill="#388E3C" d="M40 8c-.6 0-1 .4-1 1 0 2.7-3.3 5-6 5-.6 0-1 .4-1 1s.4 1 1 1c3.7 0 8-3.1 8-7C41 8.4 40.6 8 40 8zM8 8c.6 0 1 .4 1 1 0 2.7 3.3 5 6 5 .6 0 1 .4 1 1s-.4 1-1 1c-3.7 0-8-3.1-8-7C7 8.4 7.4 8 8 8z"/><path fill="#4CAF50" d="M12,31v-7c0-9.2,5.3-16,12-16s12,6.8,12,16v7c-1.2,5.6-7,12-12,12S13.2,36.6,12,31z"/><path fill="#8BC34A" d="M8 6A3 3 0 1 0 8 12 3 3 0 1 0 8 6zM40 6A3 3 0 1 0 40 12 3 3 0 1 0 40 6z"/><path fill="#FFF9C4" d="M29 22A2 4 0 1 0 29 30 2 4 0 1 0 29 22zM19 22A2 4 0 1 0 19 30 2 4 0 1 0 19 22z"/><g><path fill="#263238" d="M29 26A1 1 0 1 0 29 28 1 1 0 1 0 29 26zM19 26A1 1 0 1 0 19 28 1 1 0 1 0 19 26z"/></g><path fill="#173027" d="M24,33c-4,0-5.8,3-5.8,3s2.6,0,5.8,0s5.8,0,5.8,0S28,33,24,33z"/></svg>
      olla.push(svg)
    console.log("okay")

    }setManiac(tampil)
  }
  const mouseLeave = () =>{
    setManiac("");
    setMaxident("");
  }
  return (
      <div className="d-flex col-8 m-auto justify-content-between tombol">
        <div className="maniac">
        {maniac}
        </div>
        <div className="maxidentLogo">
        {maxident}
        </div>
        <div className="link-Test ">
        <NavLink onMouseEnter={loop} onMouseLeave={mouseLeave} className="btn active" to="/oddenary/">
          <h1>Od<span className="green">dinary</span></h1>
        </NavLink>
        <NavLink onMouseEnter={loopMaxi} onMouseLeave={mouseLeave} className="btn active"  to="/maxident/">
          <h1>Max<span className="pink">ident</span></h1>
        </NavLink>
        </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#459E48" d="M12,31c-2.3,0-3.7-3.2-4-5c0.7-1.3,3.3-2,4-2c5.7-2.4,17.8-2.9,24,0c0.7,0,3.3,0.7,4,2c-0.3,1.8-1.7,5-4,5C33.6,32.8,14.7,34.2,12,31z"/><path fill="#388E3C" d="M40 8c-.6 0-1 .4-1 1 0 2.7-3.3 5-6 5-.6 0-1 .4-1 1s.4 1 1 1c3.7 0 8-3.1 8-7C41 8.4 40.6 8 40 8zM8 8c.6 0 1 .4 1 1 0 2.7 3.3 5 6 5 .6 0 1 .4 1 1s-.4 1-1 1c-3.7 0-8-3.1-8-7C7 8.4 7.4 8 8 8z"/><path fill="#4CAF50" d="M12,31v-7c0-9.2,5.3-16,12-16s12,6.8,12,16v7c-1.2,5.6-7,12-12,12S13.2,36.6,12,31z"/><path fill="#8BC34A" d="M8 6A3 3 0 1 0 8 12 3 3 0 1 0 8 6zM40 6A3 3 0 1 0 40 12 3 3 0 1 0 40 6z"/><path fill="#FFF9C4" d="M29 22A2 4 0 1 0 29 30 2 4 0 1 0 29 22zM19 22A2 4 0 1 0 19 30 2 4 0 1 0 19 22z"/><g><path fill="#263238" d="M29 26A1 1 0 1 0 29 28 1 1 0 1 0 29 26zM19 26A1 1 0 1 0 19 28 1 1 0 1 0 19 26z"/></g><path fill="#173027" d="M24,33c-4,0-5.8,3-5.8,3s2.6,0,5.8,0s5.8,0,5.8,0S28,33,24,33z"/></svg> */}
         
      </div>
  );
}

export default Hero;

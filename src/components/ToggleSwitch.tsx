import React, { useContext, useState } from 'react'
import '../assets/switch.css';
import { ToggleContext } from '../context/ToggleContext';

const ToggleSwitch:React.FC = () => {
  const {toggle,setToggle} = useContext(ToggleContext);

  const handleChange = ()=>{
    setToggle(!toggle);
  }
  return (
    <div>
      <label className='switch'>
        <input type="checkbox" checked={toggle} onChange={handleChange}/>
        <span className='slider'></span>
      </label>
    </div>
  )
}

export default ToggleSwitch
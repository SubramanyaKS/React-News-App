import React, { useContext, useState } from 'react'
import '../assets/switch.css';
import { ToggleContext } from '../context/ToggleContext';

// interface ToggleSwitchProps {
//   checked: boolean;
//   onChange: (checked: boolean) => void;
// }

const ToggleSwitch:React.FC = () => {
  // const [isToggle,setIsToggled] = useState<boolean>(false);
  const {toggle,setToggle} = useContext(ToggleContext);

  const handleChange = ()=>{
    setToggle(!toggle);
    console.log(toggle);
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
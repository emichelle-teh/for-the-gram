import React from 'react';
import App from '../App';
import {motion} from 'framer-motion';

const Modal = ({ selectedImg, setSelectedImg }) => {
const handleClick = (e) => {
    if (e.target.classList.contains('background')){
        setSelectedImg(null);
    }
    
}

    return (
    <motion.div className="background" onClick={handleClick}
    initial = {{opacity:0}}
    animate ={{opacity:1}}
    >
        <motion.img src={selectedImg} alt="zoomed in picture" 
        initial = {{ y: "-100vh"}}
        animate = {{ y: "0"}}
        />
    </motion.div>

    )
}

export default Modal;
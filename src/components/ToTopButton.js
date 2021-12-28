import React, {useState} from 'react';
import './ToTopButton.css';

function ToTopButton() {
    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.querySelector.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
    };
    
    window.addEventListener('scroll', toggleVisible);

    return (
        <div className="button-space">
            <button onClick={scrollToTop} className="top-button" style={{display: visible ? 'inline' : 'none'}}>UP</button>
        </div>
    )
}

export default ToTopButton;

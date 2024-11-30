import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from './W2Or1oKawZ.json';

function Menu(){
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <section className='main'>
            <div className='vdo-btn'>
                <Lottie className="me-auto"
                options={defaultOptions}         
                />       
        </div>
      </section>
    );
}
export default Menu;
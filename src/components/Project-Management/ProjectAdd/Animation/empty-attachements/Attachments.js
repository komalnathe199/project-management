import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from './empty.json';


const Attachments = () => {
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
                <Lottie className="me-auto" height={200} width={200}
                    options={defaultOptions}
                />
            </div>
        </section>
    );
}

export default Attachments
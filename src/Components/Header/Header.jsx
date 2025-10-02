    import React from "react";
    import Hyperspeed from "../Hyperspeed/Hyperspeed";
    import './Header.css'

    const Hero = () => {
    return (
        <div className="relative w-full h-screen">
        {/* Hyperspeed Background */}
        <Hyperspeed className="absolute inset-0 w-full h-full" />

        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
            

        { /* Heading */}
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl
            font-semibold pt-20'>Creative Designs That Speak</h2>

    {/* Subheading */}
    <p className="mt-6 text-[clamp(1rem,2vw,1.25rem)] max-w-2xl">
    Visual storytelling that connects with people.
    </p>

            {/* Buttons */}
            <div className="mt-8 flex gap-6">
            
            <button id="magic-btn">
  <span className="span-mother">
    <span>C</span>
    <span>o</span>
    <span>n</span>
    <span>t</span>
    <span>a</span>
    <span>c</span>
    <span>t</span>
  </span>
  <span className="span-mother2">
    <span>C</span>
    <span>o</span>
    <span>n</span>
    <span>t</span>
    <span>a</span>
    <span>c</span>
    <span>t</span>
  </span>
</button>


<button id="glitch-btn">Services</button>

            </div>
        </div>
        </div>
    );
    };

    export default Hero;

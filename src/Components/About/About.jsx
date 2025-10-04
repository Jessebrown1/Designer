import React, { useRef, useEffect } from "react";
import "./About.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import about from "../../assets/about.jpg"

// Register GSAP
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Animate text
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      }
    );

    // Animate image
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text" ref={textRef}>
          <h2>About Me</h2>
          <p>
I am a passionate graphics designer, constantly exploring the intersection of art and technology to craft visually compelling experiences. From a young age, I was fascinated by colors, shapes, and digital storytelling, which naturally led me to the world of graphic design. Over the years, I have honed my skills in digital illustration, branding, UI/UX design, and interactive media, allowing me to bring ideas to life in both digital and print formats.  
</p>

<p>
My work is driven by curiosity and creativity — I enjoy experimenting with new tools, styles, and techniques to create designs that are not only aesthetically pleasing but also meaningful. Whether it’s designing a logo that captures a brand’s essence, creating illustrations that tell a story, or developing layouts that enhance user experiences, I focus on details and strive for perfection in every project.  
</p>

<p>
Beyond just visuals, I see design as a form of communication. I aim to convey messages, evoke emotions, and engage audiences through every piece I create. Collaboration is also at the heart of my process — working closely with clients, developers, and fellow designers helps me understand different perspectives and craft designs that resonate.  
</p>

<p>
In addition to client projects, I enjoy exploring personal creative experiments, from motion graphics to 3D design, constantly pushing the boundaries of my craft. My ultimate goal is to merge creativity with functionality, creating designs that leave a lasting impression while serving a purpose. Every project is an opportunity to learn, innovate, and tell a unique story through design.
</p>

        </div>
        <div className="about-image" ref={imageRef}>
          <img
            src={about}
            alt="About"
          />
        </div>
      </div>
    </section>
  );
};


export default About;

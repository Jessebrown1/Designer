import React, { useEffect, useRef } from "react";
import "./Myart.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

import design from "../../assets/design.jpeg";
import design2 from "../../assets/design2.jpg";
import design3 from "../../assets/design3.jpg";
import design4 from "../../assets/design4.jpg";
import design5 from "../../assets/design5.jpg";
import design6 from "../../assets/design6.jpg";
import design7 from "../../assets/design7.jpg";
import design8 from "../../assets/design8.jpg";

const products = [
  { id: 1, name: "Abstract Painting", description: "Acrylic on canvas – vibrant colors for modern spaces.", image: design },
  { id: 2, name: "Digital Illustration", description: "High-resolution art print ready for framing.",  image: design2 },
  { id: 3, name: "Custom Portrait", description: "Personalized digital portrait in unique style.", image: design3 },
  { id: 4, name: "Landscape Artwork", description: "Oil on canvas – natural scenery in detail.", image: design4 },
  { id: 5, name: "Street Pop Art", description: "Bright urban designs full of life.", image: design5 },
  { id: 6, name: "Street Pop Art", description: "Bright urban designs full of life.",image: design6 },
  { id: 7, name: "Street Pop Art", description: "Bright urban designs full of life.",image: design7 },
  { id: 8, name: "Street Pop Art", description: "Bright urban designs full of life.", image: design8 },
];

const Myart = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Create a timeline for staggered animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".myart-cards", // the whole cards container
        start: "top 90%",        // earlier trigger for mobile
        end: "bottom 60%",
        toggleActions: "play none none none",
      },
    });
  
    // Animate each card with stagger
    tl.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.3, // delay between each card
      }
    );
  
    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
  

  return (
    <div className="myart-section full-height">
      {/* Section Heading */}
      <h1 className="myart-title">
        My <span>Artwork</span>
      </h1>

      {/* Cards */}
      <div className="myart-cards">
        {products.map((product, index) => (
          <div
            key={product.id}
            ref={(el) => (cardsRef.current[index] = el)} // store ref for animation
            className="myart-card"
          >
            {/* Image */}
            <img src={product.image} alt={product.name} className="myart-img" />

            {/* Content */}
            <div className="myart-content">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <div className="price">{product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myart;
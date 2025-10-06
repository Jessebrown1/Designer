import React, { useRef, useEffect } from "react";
import "./Services.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ear from "../../assets/ear.jpg"
import wireless from "../../assets/wireless.jpg"
import protect from "../../assets/protect.jpg"
import case2 from "../../assets/case2.jpg"


// Register GSAP
gsap.registerPlugin(ScrollTrigger);

// Design services
const servicesList = [
  { id: 1, title: "Web Design", description: "Creating modern, responsive, and visually stunning websites." },
  { id: 2, title: "Graphic Design", description: "Designing logos, banners, and visuals that communicate your message." },
  { id: 3, title: "UI/UX Design", description: "Improving user experience with intuitive interfaces." },
  { id: 4, title: "Digital Illustration", description: "Crafting custom illustrations and artworks tailored to your project needs." },
];

// Phone accessories with images
const accessoriesList = [
  { id: 1, name: "Phone Case", image: case2 },
  { id: 2, name: "Wireless Charger",  image: wireless },
  { id: 3, name: "Screen Protector",image: protect },
  { id: 4, name: "Earphones", image: ear},
];

const Services = () => {
  const serviceRefs = useRef([]);
  const accessoryRefs = useRef([]);

  useEffect(() => {
    // Animate design services
    gsap.fromTo(
      serviceRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: serviceRefs.current[0],
          start: "top 80%",
        },
      }
    );

    // Animate phone accessories
    gsap.fromTo(
      accessoryRefs.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: accessoryRefs.current[0],
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-container">
        {servicesList.map((service, index) => (
          <div
            key={service.id}
            ref={(el) => (serviceRefs.current[index] = el)}
            className="service-card"
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      {/* Phone Accessories */}
      <h2 className="services-title">Phone Accessories</h2>
      <div className="services-container">
        {accessoriesList.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (accessoryRefs.current[index] = el)}
            className="service-card accessory-card"
          >
            <img src={item.image} alt={item.name} className="accessory-img" />
            <h3>{item.name}</h3>
            <div className="price">{item.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

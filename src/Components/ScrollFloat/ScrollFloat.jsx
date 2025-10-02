import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollFloatCard = ({ children, duration = 1, stagger = 0.2 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 100,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "bottom 70%",
          toggleActions: "play none none reverse",
        },
        stagger,
      }
    );
  }, [duration, stagger]);

  return (
    <div ref={containerRef} className="scroll-float-card">
      {children}
    </div>
  );
};

export default ScrollFloatCard;

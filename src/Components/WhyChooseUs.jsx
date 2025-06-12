import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Styles/Whychoose.css';

gsap.registerPlugin(ScrollTrigger);

function WhyChooseUs() {
  const sectionRef = useRef();
  const headingRef = useRef();
  const subHeadingRef = useRef();
  const linesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section fade-in
      gsap.from(sectionRef.current, {
        opacity: 1,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      });

      // Clip-path Reveal for heading and subheading
      gsap.from(headingRef.current, {
        clipPath: "inset(0 0 100% 0)",
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        }
      });

      gsap.from(subHeadingRef.current, {
        clipPath: "inset(0 0 100% 0)",
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: subHeadingRef.current,
          start: "top 80%",
        }
      });

      // Paragraph lines animation
      linesRef.current.forEach((line, i) => {
        gsap.from(line, {
          x: -50,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.2,
          scrollTrigger: {
            trigger: line,
            start: "top 90%",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div className="why-choose-us" ref={sectionRef}>
        <div className="card whychoose-card">
          <div className="blur-circle circle1 whychoose-circle1"></div>
          <div className="blur-circle circle2 whychoose-circle2"></div>
          <div className="blur-circle circle3 whychoose-circle3"></div>
        </div>
        <div className='whychoose-content'>
          <h1 className='heading' ref={headingRef}>Why Choose Us?</h1>
          <h3 className='sub-heading' ref={subHeadingRef}>Out Commitment, Your Protection</h3>
          <div className='para-content'>
            {[
              "1. Our experience in delivering innovative cybersecurity solutions set us apart.",
              "2. We turn challenges into opportunities that drive impactful outcomes.",
              "3. With a focus on trust and excellence, we continue to secure what matters most."
            ].map((text, index) => (
              <p key={index} ref={el => linesRef.current[index] = el}>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;

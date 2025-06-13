import React, { useEffect, useRef } from 'react';
import { CustomEase } from "gsap/CustomEase";
import gsap from "gsap";
import "../Styles/Circle.css";
gsap.registerPlugin(CustomEase);

function Circle() {
       const bubbleRef = useRef(null);
    
        useEffect(() => {
            let curX = 0;
            let curY = 0;
            let tgX = 0;
            let tgY = 0;
    
            const move = () => {
                curX += (tgX - curX) / 20;
                curY += (tgY - curY) / 20;
                if (bubbleRef.current) {
                    bubbleRef.current.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
                }
                requestAnimationFrame(move);
            };
    
            const handleMouseMove = (event) => {
                tgX = event.clientX;
                tgY = event.clientY;
            };
    
            window.addEventListener('mousemove', handleMouseMove);
            move();
    
            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };
        }, []);
         useEffect(()=>{
    let ctxs = gsap.context(() => {
      CustomEase.create("hop", "0.3, 0, 0.3, 1");
      const tc = gsap.timeline({ delay: 7.5 });
      tc.from(".gradient-bgs",{
            y:0,
            opacity: 0,
            duration: 1.5,
            ease: "hop",
        })

    });
    return () => ctxs.revert();
     
  },[])
  return (
    <div>
        <div className="gradient-bgs">
                        <svg xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                            {/* <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" /> */}
                            <feBlend in="SourceGraphic" in2="goo" />
                            </filter>
                        </defs>
                        </svg>
                        <div className="gradients-containers">
                        <div className="g1"></div>
                        <div className="g2"></div>
                        <div className="interactive"  ref={bubbleRef}></div>

                        </div>
        </div>
    </div>
  )
}

export default Circle
// SmoothScroll.jsx
import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = () => {
  useEffect(() => {
    const scrollContainer = document.querySelector("#scroll-container");

    const scrollbar = Scrollbar.init(scrollContainer, {
      damping: 0.07,
    });

    // 👇 Sync GSAP with Smooth Scrollbar
    ScrollTrigger.scrollerProxy(scrollContainer, {
      scrollTop(value) {
        if (arguments.length) {
          scrollbar.scrollTop = value;
        }
        return scrollbar.scrollTop;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
      pinType: scrollContainer.style.transform ? "transform" : "fixed",
    });

    // 👇 Update ScrollTrigger on scrollbar scroll
    scrollbar.addListener(ScrollTrigger.update);
    ScrollTrigger.defaults({ scroller: scrollContainer });
    ScrollTrigger.refresh();

    return () => {
      // ScrollTrigger.kill(); // ✅ Clean up
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      scrollbar.destroy();
    };
  }, []);

  return null;
};

export default SmoothScroll;


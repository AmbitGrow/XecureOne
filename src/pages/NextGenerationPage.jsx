import React from "react";
import "../Styles/Servicepage.css";
import {useEffect,useLayoutEffect} from "react";

import { gsap } from "gsap";
import GetSecured from "../Components/GetSecured";
import Footer from "../Components/Footer";
import Transition from "./Transition";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { CustomEase } from "gsap/CustomEase";
const benefits = [
  {
    title: "Comprehensive Security Evaluation",
    description: `Provides a detailed view of all potential security flaws and their real-world impact.`,
  },
  {
    title: "Early Threat Detection",
    description: `Identifies and prioritizes vulnerabilities before attackers can exploit them, enabling proactive defense.`,
  },
  {
    title: "Stronger Incident Response",
    description: `Helps security teams detect and contain threats quickly, minimizing damage and downtime.`,
  },
  {
    title: "Regulatory Compliance",
    description: `Supports adherence to industry standards and legal requirements such as GDPR, ISO 27001, and PCI-DSS.`,
  },
  {
    title: "Cost Savings",
    description: `Reduces the risk of costly data breaches by addressing security gaps before they are exploited.`,
  },
  {
    title: "Enhanced Risk Management",
    description: ` Enables organizations to prioritize and remediate the most critical vulnerabilities first.`,
  },
];
const needs = [
  {
    title: "confidential information",
    description:
      "Protect data from unauthorized access and leakage.",
  },
  {
    title: "Face evolving cyber threats",
    description:
      "Defend against advanced attacks targeting networks, applications, and cloud environments.",

  },
  {
    title: "Require regulatory compliance",
    description:"Meet data protection laws and industry standards."
  },
  {
    title: "Want real-time visibility",
    description:" Monitor for suspicious activities and respond to incidents quickly."
  },
  {
    title: "Support incident management",
    description:"Investigate and remediate security incidents with confidence."
  },
  // {
  //   title: "Patch Management",
  //   description:
  //     "Are your devices updated with the latest security patches? Our meticulous patch management procedures ensure risks are fixed promptly to reduce cyber-attacks. By prioritizing timely updates, we safeguard your data and enhance overall system resilience against emerging threats.",
  // },
  // {
  //   title: "Threat Detection and Response",
  //   description:
  //     "Do you have real-time visibility into endpoint activities to identify and respond to security incidents effectively? Our continuous monitoring and incident response capabilities are the perfect answer to the impact of data breaches, ensuring proactive threat management and comprehensive protection.",
  // },
  // {
  //   title: "Device Encryption",
  //   description:
  //     "Are you concerned about the loss or theft of devices containing sensitive information? Our advanced endpoint security solutions effectively protect critical data on all devices, ensuring that even if lost or stolen, the data remains cryptographically inaccessible to unauthorized users.",
  // },
];
const steps = [
   {
    title: "Reconnaissance and Planning",
    description:"Identify the scope of the assessment, gather information about the target systems, and plan the testing approach.",
  },
  {
    title: "Vulnerability Assessment",
    description:'Use automated tools to scan and identify security weaknesses across networks, applications, and systems.'
  },
  {
    title: "Penetration Testing",
    description:"Simulate real-world attacks to exploit identified vulnerabilities and assess their severity and impact."
  },
  {
    title: "Risk Assessment and Prioritization",
    description:"Classify and prioritize vulnerabilities based on their potential impact and likelihood of exploitation."
  },
  {
    title: "Reporting and Remediation",
    description:"Provide detailed reports outlining vulnerabilities, their risks, and actionable recommendations for remediation."
      
  },
 
];

const reasons = [
  {
    title: "Expertise and Experience",
    description:
      "Our team is composed of seasoned cybersecurity professionals with years of experience in endpoint protection.",
  },
  {
    title: "Comprehensive Protection",
    description:
      "We provide end-to-end security coverage for all your devices—desktops, laptops, mobile phones, and servers.",
  },
  {
    title: "Tailored to Your Needs",
    description:
      "We customize our services to fit your infrastructure, compliance needs, and workflow.",
  },
  {
    title: "24/7 Support and Monitoring",
    description:
      "Our dedicated support team is available around the clock to monitor your systems and respond to incidents.",
  },
  {
    title: "Proactive Threat Management",
    description:
      "We proactively hunt for vulnerabilities and suspicious activities to keep you ahead of cybercriminals.",
  },
  {
    title: "Easy Integration and Management",
    description:
      "Manage all your endpoints from a single, intuitive dashboard, reducing complexity and IT workload.",
  },
];

gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollTrigger);

 
function NextGenerationPage() {
    // / HomePage animate
  useEffect(() => {
    let ctxs = gsap.context(() => {
      CustomEase.create("hop", "0.6, 0, 0.3, 1");
      const tla = gsap.timeline();
      // HomePage animate

      tla
        .to(".about-page-fixed", {
          opacity: 0,
          duration: 0.5,
          display: "none",
          ease: "ease",
        })
        .from(".ap-first-section .about-title-tag", {
          y: 80,
          opacity: 0,
          duration: 0.5,
          ease: "hop",
        })
        .from(
          ".ap-first-section h1",
          {
            y: 80,
            opacity: 0,
            duration: 0.7,
            ease: "hop",
          },
          0.4
        )
        .from(
          ".ap-first-section h1 span",
          {
            y: 80,
            opacity: 0,
            duration: 0.8,
            ease: "hop",
          },
          1
        )
        .from(
          ".ap-first-section p",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          1.5
        )
        .from(
          ".ap-first-section .btn",
          {
            y: 30,
            opacity: 0,
            stagger: 0.2,
            duration: 1,
            ease: "power2.out",
          },
          2
        );
    });
    return () => ctxs.revert();
  }, []);

  // scroll trigger 
  useEffect(() => {
  const ctx = gsap.context(() => {
  
    // About Section
     gsap.from(".sp-second-section", {
            scale: 1.15,
            scrollTrigger: {
              trigger: ".sp-second-section",
              start: "top bottom",
              scrub: 1,
            },
      });
       const splith = new SplitType(".sp-second-section .sub-heading", {
            types: "words, chars",
          });
          gsap.from(splith.chars, {
            y: 50,
            opacity: 0,
            stagger: 0.05,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".sp-second-section",
              start: "top 80%",
            },
          });
          gsap.from(".aboutservice-content .para-content", {
            scrollTrigger: {
              trigger: ".sp-second-section",
              start: "top 85%",
            },
            x: -50,

            opacity: 0,
            duration: 1,
            ease: "power2.out",
          });

    // Benefits Cards
     gsap.from(".sp-third-section", {
            opacity: 1,
            y: 70,
            duration: 1,
            scrollTrigger: {
              trigger: ".sp-third-section",
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
    });
       const splitb = new SplitType(".sp-third-section h2 span", {
            types: "words, chars",
          });
          gsap.from(splitb.chars, {
            y: 50,
            opacity: 0,
            stagger: 0.05,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".sp-third-section",
              start: "top 80%",
            },
      });
        gsap.from(".benefit-card", {
          scrollTrigger: {
            trigger: ".sp-third-section",
            start: "top 80%",
          },
          scale: 0.8,
          opacity: 0,
          stagger: 0.25,
          duration: 0.8,
          ease: "back.out(1.7)",

        },0.2);
          gsap.from([".benefit-card h3",".benefit-card p"], {
          scrollTrigger: {
            trigger: ".sp-third-section",
            start: "top 80%",
          },
          y:20,
          opacity: 0,
          stagger: 0.05,
          duration: 0.8,
          ease: "power2.out",

        },0.25);

        // fourth section
          gsap.from(".sp-fourth-section", {
            opacity: 1,
            y: 70,
            duration: 1,
            scrollTrigger: {
              trigger: ".sp-fourth-section",
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
        });


         const splite = new SplitType(".sp-fourth-section h2 span", {
            types: "words, chars",
          });
          gsap.from(splite.chars, {
            y: 50,
            opacity: 0,
            stagger: 0.05,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".sp-fourth-section",
              start: "top 80%",
            },
          });
            gsap.from(".emn-card", {
          scrollTrigger: {
            trigger: ".sp-fourth-section",
            start: "top 80%",
          },
          scale: 0.8,
          opacity: 0,
          stagger: 0.25,
          duration: 0.8,
          ease: "back.out(1.7)",

        },0.2);
         gsap.from([".emn-card h3",".emn-card p"], {
          scrollTrigger: {
            trigger: ".sp-third-section",
            start: "top 80%",
          },
          y:20,
          opacity: 0,
          stagger: 0.05,
          duration: 0.8,
          ease: "power2.out",

        },0.25);
       // 5-Step Process: alternate left/right
         gsap.from(".sp-fiveth-section", {
            opacity: 1,
            y: 70,
            duration: 1,
            scrollTrigger: {
              trigger: ".sp-fiveth-section",
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
        });  
       gsap.from(".sp-fifth-section .five-step-title p",{
          scrollTrigger: {
            trigger: ".sp-fifth-section",
            start: "top 80%",
          },
          y:40,
          opacity: 0,
          duration: 1,
          ease: "power2.out",

        });
          gsap.from(".sp-fifth-section .five-step-title h2",{
          scrollTrigger: {
            trigger: ".sp-fifth-section",
            start: "top 80%",
          },
          y:40,
          opacity: 0,
          duration: 1.8,
          ease: "power2.out",

        },2);

        gsap.utils.toArray(".five-step-card-wrapper").forEach((el, i) => {
          gsap.from(el, {
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            },
            // x: i % 2 === 0 ? -100 : 100,
            y:-20,
            opacity: 0,
            duration: 0.8,
            delay:0.5,
            ease: "power2.out",
          });
        });
      
       


        // Why Us Section
          gsap.from(".sp-sixth-section", {
            opacity: 1,
            y: 70,
            duration: 1,
            scrollTrigger: {
              trigger: ".sp-sixth-section",
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
       });
     const splitw = new SplitType(".sp-sixth-section h2", {
            types: "words, chars",
          });
          gsap.from(splitw.chars, {
            y: 50,
            opacity: 0,
            stagger: 0.05,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".sp-sixth-section",
              start: "top 80%",
            },
          });
            gsap.from(".why-us-card", {
          scrollTrigger: {
            trigger: ".sp-sixth-section",
            start: "top 80%",
          },
          // scale: 0.8,
          opacity: 0,
          stagger: 0.25,
          duration: 0.8,
         ease: "power2.out",

        },0.2);
         gsap.from([".why-us-card h3",".why-us-card p"], {
          scrollTrigger: {
            trigger: ".sp-sixth-section",
            start: "top 80%",
          },
          y:20,
          opacity: 0,
          stagger: 0.05,
          duration: 0.8,
          ease: "power2.out",

        },0.25);
       
          
    
 
  });

  return () => ctx.revert();
}, []);
    useLayoutEffect(() => {
      gsap.utils.toArray(".progress-line").forEach((line) => {
        gsap.to(line, {
          scaleX: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: line.parentElement,
            start: "top 80%",
            toggleActions: "play none none none", // Only play once
          },
        });
      });

      return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }, []);
  return (
    <div>
      <div className="content-endpoint-service">
        <div className="about-page-fixed"></div>

        <div className="servicepage-overall-container">
          <div className="ap-first-section sp-first-section ">
            <div>
              <button className="service-title-tag about-title-tag">
                About VSPT
              </button>
              <h1>
                VSPT
                <br />
                <span>Let`s Secure Deep!</span>
              </h1>
              <p>
                XecureOne is your trusted cybersecurity partner — ideal for
                businesses seeking top-tier protection without an in-house
                security team. We specialize in safeguarding your digital
                landscape with cutting-edge solutions.{" "}
              </p>
            </div>
            <div className="btn">
              <div className="let-connect-btn">Let's Connect</div>
              {/* <div className="ourservice-btn">Book An Appoinment</div> */}
            </div>
          </div>
          <div className="sp-second-section service-second-section">
            <div className="about-service">
              <div className="card about-service-card">
                <div className="blur-circle circle1 whoweare-circle1"></div>
                {/* <div className="blur-circle circle2 whoweare-circle2"></div> */}
                <div className="blur-circle circle3 whoweare-circle3"></div>
              </div>
              <div className="aboutservice-content">
                <h3 className="sub-heading">What is VSPT?</h3>
                <div className="para-content">
                  <p>
                   Vulnerability Assessment: Systematic identification, classification, and prioritization of security weaknesses in your IT infrastructure, networks, and applications. This process uses automated tools to scan for known vulnerabilities but does not attempt to exploit them.

Penetration Testing: Simulates real-world cyberattacks to exploit identified vulnerabilities, assess their severity, and determine the potential impact if exploited by malicious actors. Penetration testing provides actionable insights into how an attacker could compromise your systems.

Together, VAPT offers a comprehensive evaluation of your security posture, helping you understand not just where vulnerabilities exist, but also how they could be exploited and what damage they might cause.

                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="sp-third-section">
            <h2>
              Benefits Of <span>VSPT</span>
            </h2>
            <div className="benefits-container">
              {benefits.map((benefit, index) => (
                <div className="benefit-card" key={index}>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="service-fourth-container">
          <div className="sp-fourth-section">
            <div className="emn-section">

              <h2>
                Determining The Need For Our <span>VSPT
                Management Services</span>
              </h2>

              <div className="emn-grid">
                {needs.map((need, idx) => (
                  <div className="emn-card" key={idx}>
                    <h3>{need.title}</h3>
                    <p>{need.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>  
        </div>
        <div className="servicepage-overall-container">
          <div className="sp-fifth-section">
            <div className="five-step-section">
              <div className="five-step-title">
                <p>5-Step Process for</p>
                <h2>Effective Endpoint Security</h2>
              </div>
              <div className="five-step-container">
                {steps.map((step, idx) => (
                  <div
                    className={`five-step-card-wrapper ${
                      idx % 2 === 1 ? "right" : "left"
                    }`}
                    key={idx}
                  >
                    <div className="five-step-card-all">
                      <div className="five-step-card">
                        <div className="five-step-card-desc">
                          <h3>{step.title}</h3>
                          <p>{step.description}</p>
                        </div>
                        <div className="five-step-number">
                          <span>{idx + 1}</span>
                        </div>
                      </div>
                    </div>
                    {idx < steps.length - 1 && (
                      <div
                        className={`five-step-connector ${
                          idx % 2 === 0 ? "to-right" : "to-left"
                        }`}
                      >
                        <div className="progress-line"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="sp-sixth-section">
          <div className="why-us-section">
              <h2 className="why-us-title">Why Our Service is Best ?</h2>
            <div className="why-us-grid">
              {reasons.map((reason, idx) => (
                <div className="why-us-card" key={idx}>
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="servicepage-overall-container">
          <div className="sp-seventh-section get-secured-now">
            <GetSecured />
          </div>
        </div>
        <div className="last-section footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Transition(NextGenerationPage);

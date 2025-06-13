import React from "react";
import "../Styles/Servicepage.css";
import { useEffect, useLayoutEffect } from "react";
import { CustomEase } from "gsap/CustomEase";
import { gsap } from "gsap";
import GetSecured from "../Components/GetSecured";
import Footer from "../Components/Footer";
import Transition from "./Transition";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

const benefits = [
  {
    title: "Threat Prevention",
    description: `Block malware, ransomware, and advanced cyber threats before they reach your devices.
Protect your business from both known and emerging attacks.
Stay ahead of cybercriminals with proactive defense mechanisms.`,
  },
  {
    title: "Data Protection",
    description: `Safeguard sensitive business data across all endpoints, both onsite and remote.
Prevent unauthorized access and data leaks with strong encryption.
Maintain customer trust by keeping confidential information secure.`,
  },
  {
    title: "Centralized Management",
    description: `Monitor and manage all endpoint devices from a single, intuitive dashboard.
Easily deploy updates and enforce security policies across your organization.
Reduce IT workload with automated alerts and streamlined controls.`,
  },
  {
    title: "Regulatory Compliance",
    description: `Meet industry standards and legal requirements with comprehensive security controls.
Generate detailed reports to simplify audits and compliance checks.
Reduce the risk of costly fines and reputational damage.`,
  },
  {
    title: "Reduced Downtime",
    description: `Quickly detect and respond to threats, minimizing business disruption.
Automated incident response helps isolate and remediate compromised devices.
Keep your operations running smoothly and efficiently.`,
  },
  {
    title: "Scalable Security",
    description: `Easily expand protection as your business grows and adds new devices.
Adapt to changing security needs without major infrastructure changes.
Ensure every endpoint is covered, no matter where your team works.`,
  },
];
const needs = [
  {
    title: "Remote Work Security",
    description:
      "Are your employees working remotely accessing company data from various locations? Our endpoint security solutions ensure that remote access is secure and in adherence to your organization's regulations, safeguarding against threats in remote environments.",
  },
  {
    title: "Mobile Device Protection",
    description:
      "Are employees using tablets or smartphones for work tasks effectively and efficiently in today's environment? We shield these mobile devices against unauthorized malware access, ensuring that your business data remains secure even on personal devices.",
  },
  {
    title: "BYOD Policy Enforcement",
    description:
      "Does your organization enable employees to utilize personal devices for work? Our expert team aids in enforcing security protocols on these devices, like encryption and remote wipe capabilities, to safeguard sensitive confidential data effectively.",
  },
  {
    title: "Cyber Threat Defense",
    description:
      "Are you worried about malware, phishing attacks, or ransomware targeting your organization? We fight back against the threat hard. With robust antivirus software and insightful detection tools, we spot, analyze, and tackle threats swiftly and efficiently.",
  },
  {
    title: "Compliance and Data Privacy",
    description:
      "Is your organization conditional to data protection laws and industry regulations? Our expertise assists you to adhere to these critical requirements by deploying robust encryption, comprehensive security policies, and strict access controls to effectively shield confidential information.",
  },
  {
    title: "Patch Management",
    description:
      "Are your devices updated with the latest security patches? Our meticulous patch management procedures ensure risks are fixed promptly to reduce cyber-attacks. By prioritizing timely updates, we safeguard your data and enhance overall system resilience against emerging threats.",
  },
  {
    title: "Threat Detection and Response",
    description:
      "Do you have real-time visibility into endpoint activities to identify and respond to security incidents effectively? Our continuous monitoring and incident response capabilities are the perfect answer to the impact of data breaches, ensuring proactive threat management and comprehensive protection.",
  },
  {
    title: "Device Encryption",
    description:
      "Are you concerned about the loss or theft of devices containing sensitive information? Our advanced endpoint security solutions effectively protect critical data on all devices, ensuring that even if lost or stolen, the data remains cryptographically inaccessible to unauthorized users.",
  },
];
const steps = [
  {
    title: "Inventory and Discovery",
    description:
      "Begin by conducting an inventory of all endpoints (devices) connected to your network, including computers, laptops, mobile devices, servers, and IoT devices. Discover and catalog important information about each endpoint, such as hardware specifications, operating systems, installed software, and network configurations.",
  },
  {
    title: "Security Configuration and Compliance",
    description:
      "Implement standardized security configurations across all endpoints to ensure compliance with organizational policies and industry regulations. Configure firewalls, antivirus software, encryption settings, and intrusion detection/prevention systems (IDS/IPS) to protect against cyber threats and unauthorized access.",
  },
  {
    title: "Patch Management and Software Updates",
    description:
      "Establish a robust patch management process to regularly update endpoint software, operating systems, and applications. Deploy patches and updates promptly to address security vulnerabilities and enhance endpoint security posture.",
  },
  {
    title: "Endpoint Monitoring and Incident Response",
    description:
      "Continuously monitor endpoints for security events, suspicious activities, and potential threats. Set up real-time alerts and automated incident response mechanisms to quickly contain, investigate, and remediate security incidents, minimizing their impact on your organization.",
  },
  {
    title: "Reporting and Continuous Improvement",
    description:
      "Generate detailed reports on endpoint security status, compliance, and incidents. Use these insights to assess the effectiveness of your endpoint management strategy, identify areas for improvement, and implement ongoing enhancements to strengthen your security posture.",
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

function Endpointsecurity() {
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
      gsap.from(
        ".benefit-card",
        {
          scrollTrigger: {
            trigger: ".sp-third-section",
            start: "top 80%",
          },
          scale: 0.8,
          opacity: 0,
          stagger: 0.25,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        0.2
      );
      gsap.from(
        [".benefit-card h3", ".benefit-card p"],
        {
          scrollTrigger: {
            trigger: ".sp-third-section",
            start: "top 80%",
          },
          y: 20,
          opacity: 0,
          stagger: 0.05,
          duration: 0.8,
          ease: "power2.out",
        },
        0.25
      );

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
      gsap.from(
        ".emn-card",
        {
          scrollTrigger: {
            trigger: ".sp-fourth-section",
            start: "top 80%",
          },
          scale: 0.8,
          opacity: 0,
          stagger: 0.25,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        0.2
      );
      gsap.from(
        [".emn-card h3", ".emn-card p"],
        {
          scrollTrigger: {
            trigger: ".sp-third-section",
            start: "top 80%",
          },
          y: 20,
          opacity: 0,
          stagger: 0.05,
          duration: 0.8,
          ease: "power2.out",
        },
        0.25
      );
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
      gsap.from(".sp-fifth-section .five-step-title p", {
        scrollTrigger: {
          trigger: ".sp-fifth-section",
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
      gsap.from(
        ".sp-fifth-section .five-step-title h2",
        {
          scrollTrigger: {
            trigger: ".sp-fifth-section",
            start: "top 80%",
          },
          y: 40,
          opacity: 0,
          duration: 1.8,
          ease: "power2.out",
        },
        2
      );

      gsap.utils.toArray(".five-step-card-wrapper").forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
          // x: i % 2 === 0 ? -100 : 100,
          y: -20,
          opacity: 0,
          duration: 0.8,
          delay: 0.5,
          ease: "power2.out",
        });
      });

      // Why Us Section
      // gsap.from(".sp-sixth-section", {
      //   opacity: 1,
      //   y: 70,
      //   duration: 1,
      //   scrollTrigger: {
      //     trigger: ".sp-sixth-section",
      //     start: "top 80%",
      //     toggleActions: "play none none reverse",
      //   },
      // });
    //   const splitw = new SplitType(".sp-sixth-section h2", {
    //     types: "words, chars",
    //   });
    //   gsap.from(splitw.chars, {
    //     y: 50,
    //     opacity: 0,
    //     stagger: 0.05,
    //     duration: 0.6,
    //     ease: "power2.out",
    //     scrollTrigger: {
    //       trigger: ".sp-sixth-section",
    //       start: "top 80%",
    //     },
    //   });
    //   gsap.from(
    //     ".why-us-card",
    //     {
    //       scrollTrigger: {
    //         trigger: ".sp-sixth-section",
    //         start: "top 80%",
    //       },
    //       scale: 0.8,
    //       opacity: 0,
    //       stagger: 0.25,
    //       duration: 0.8,
    //       ease: "ease",
    //     },
    //     0.2
    //   );
    //   gsap.from(
    //     [".why-us-card h3", ".why-us-card p"],
    //     {
    //       scrollTrigger: {
    //         trigger: ".sp-sixth-section",
    //         start: "top 80%",
    //       },
    //       y: 20,
    //       opacity: 0,
    //       stagger: 0.05,
    //       duration: 0.8,
    //       ease: "power2.out",
    //     },
    //     0.25
    //   );
    });

    return () => ctx.revert();
  }, []);
   useEffect(() => {
    const ctx = gsap.context(() => {
    
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
      gsap.from(
        ".why-us-card",
        {
          scrollTrigger: {
            trigger: ".sp-sixth-section",
            start: "top 80%",
          },
          opacity: 0,
          stagger: 0.25,
          duration: 0.8,
          ease: "power2.out",
        },
        0.2
      );
      gsap.from(
        [".why-us-card h3", ".why-us-card p"],
        {
          scrollTrigger: {
            trigger: ".sp-sixth-section",
            start: "top 80%",
          },
          y: 20,
          opacity: 0,
          stagger: 0.05,
          duration: 0.8,
          ease: "power2.out",
        },
        0.25
      );
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
                About EndPoint Service
              </button>
              <h1>
                EndPoint Security
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
                <h3 className="sub-heading">What is endpoint security?</h3>
                <div className="para-content">
                  <p>
                    Endpoint security is the practice of protecting devices such
                    as desktops, laptops, tablets, and mobile phones that
                    connect to a network from cyber threats. It involves
                    monitoring, detecting, and blocking malicious activities
                    that could compromise these devices and the data they
                    access. Modern endpoint security solutions use advanced
                    technologies like threat intelligence, behavioral analysis,
                    and machine learning to defend against evolving threats. By
                    securing endpoints, organizations can reduce the risk of
                    data breaches and ensure compliance with security policies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="sp-third-section">
            <h2>
              Benefits Of <span>Endpoint Security</span>
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
                Determining The Need For Our{" "}
                <span>Endpoint Management Services</span>
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

export default Transition(Endpointsecurity);

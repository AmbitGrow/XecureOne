import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import "../Styles/Header.css";
import { RxCross2 } from "react-icons/rx";
import { IoCaretUp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GoPlus, GoX } from "react-icons/go";
import { FaUserLarge } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState(false);

  const toggleStep = () => {
    setExpandedIndex(!expandedIndex);
  };
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  let lastScrollY = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   const scrollbar = Scrollbar.get(document.querySelector('#scroll-container'));
  //   if (!scrollbar) return;

  //   const handleScroll = ({ offset }) => {
  //     const currentScrollY = offset.y;
  //     if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
  //       setIsScrollingDown(true);
  //     } else {
  //       setIsScrollingDown(false);
  //     }
  //     lastScrollY.current = currentScrollY;
  //   };

  //   scrollbar.addListener(handleScroll);

  //   return () => {
  //     scrollbar.removeListener(handleScroll);
  //   };
  // }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    if (menuOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { y: -50, opacity: 0, display: "block" },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        // onComplete: () => {
        //   mobileMenuRef.current.style.display = "none";
        // },
      });
    }
  }, [menuOpen]);
  useEffect(() => {
    let ctxs = gsap.context(() => {
      CustomEase.create("hop", "0.3, 0, 0.3, 1");
      const tl = gsap.timeline({ delay: 6.5 });
      tl.from(".header-container", {
        y: -80,
        opacity: 0,
        duration: 1.2,
        ease: "hop",
      })
        .from(
          ".header-container .header-left .circle-logo",
          {
            x: -100,
            opacity: 0,
            duration: 1.5,
            ease: "ease",
          },
          0.5
        )
        .from(
          ".header-container .header-left .title-text h1",
          {
            y: -10,
            opacity: 0,
            duration: 1.1,
            ease: "hop",
          },
          1
        )
        .from(
          ".header-container .header-right .navbar-about",
          {
            y: -10,
            opacity: 0,
            duration: 1,
            ease: "hop",
          },
          1.3
        )
        .from(
          ".header-container .header-right .navbar-services",
          {
            y: -10,
            opacity: 0,
            duration: 1,
            ease: "hop",
          },
          1.6
        )
        .from(
          ".header-container .header-right .navbar-contact",
          {
            y: -10,
            opacity: 0,
            duration: 1,
            ease: "hop",
          },
          1.9
        )
        .from(
          ".header-container .header-right .header-button",
          {
            y: -10,
            opacity: 0,
            duration: 1,
            ease: "hop",
          },
          2.3
        )
        .from(
          ".header-container .header-right .header-button p",
          {
            y: -7,
            opacity: 0,
            duration: 0.75,
            ease: "ease",
          },
          2.8
        );
    });
    return () => ctxs.revert();
  }, []);
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`header-container ${isScrollingDown ? "fixed-header" : ""}`}
      >
        <div className="header-desktop">
          <div className="header-left">
            <div className="title">
              <div className="circle-logo"></div>
              <div className="title-text">
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  <h1>
                    Xecure<span>One</span>
                  </h1>
                </Link>
              </div>
            </div>
          </div>
          <div className="header-right">
            <div className="list-navbar">
              <nav>
                <div className="navbar navbar-about">
                  <Link to="/about" className="list-name">
                    About
                  </Link>
                </div>
                <div className="navbar navbar-services">
                  <Link className="list-name">Services</Link>
                  <div className="hover-service">
                    <div className="top-color"></div>
                    <div className="hover-list-all">
                      <Link to="/vspt" style={{ textDecoration: "none" }}>
                        <div
                          className="hover-list"
                          style={{
                            borderTopLeftRadius: "10px",
                            borderTopRightRadius: "10px",
                          }}
                        >
                          <p className="ser-list-name">
                            Vulnerability Assessment Penetration Testing
                          </p>
                        </div>
                      </Link>

                      <Link
                        to="/EndpointSecurity"
                        style={{ textDecoration: "none" }}
                      >
                        <div className="hover-list">
                          <p className="ser-list-name">Endpoint Security</p>
                        </div>
                      </Link>
                      <Link
                        to="/NextGenerationFirewall"
                        style={{ textDecoration: "none" }}
                      >
                        <div className="hover-list">
                          <p className="ser-list-name">
                            Next Generation Firewall
                          </p>
                        </div>
                      </Link>
                      <Link
                        to="/EmailSecurity"
                        style={{ textDecoration: "none" }}
                      >
                        <div className="hover-list">
                          <p className="ser-list-name">Email Security</p>
                        </div>
                      </Link>
                      <Link
                        to="/MalwareAnalysis"
                        style={{ textDecoration: "none" }}
                      >
                        <div
                          className="hover-list"
                          style={{
                            borderBottomLeftRadius: "10px",
                            borderBottomRightRadius: "10px",
                          }}
                        >
                          <p className="ser-list-name">Malware Analysis</p>
                        </div>
                      </Link>
                    </div>
                    <div className="top-arrow">
                      <IoCaretUp className="up-arrow" />
                    </div>
                  </div>
                </div>
                <div className="navbar navbar-contact">
                  <Link to="/contact" className="list-name">
                    Contact
                  </Link>
                </div>
              </nav>
              <div className="header-button" onClick={() => navigate("/admin")}>
                <FaUserLarge />
              </div>
            </div>
          </div>
          <div
            className={
              menuOpen ? "mobile-toggle mobile-active" : "mobile-toggle"
            }
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <div className="menu-close">
                <RxCross2 className="cross-icon" />
              </div>
            ) : (
              <div className="menu-open">
                <div className="menu-circle"></div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile header */}
        <div
          className={`header-mobile ${menuOpen ? "open " : ""}`}
          style={{ display: "none", opacity: 0 }}
          ref={mobileMenuRef}
        >
          <div className="mobile-header-container">
            <div className="mobile-link link1">
              <Link
                to="/about"
                style={{ textDecoration: "none" }}
                onClick={toggleMenu}
              >
                <p>About</p>
              </Link>
            </div>
            <div
              className={`mobile-link link1 ${expandedIndex ? "expanded" : ""}`}
              onClick={toggleStep}
            >
              <div className="service-flex">
                <p>Service</p>
                <div className="down-arrow">
                  <GoPlus
                    className={`down-arrow-icon ${
                      expandedIndex ? "rotated" : ""
                    }`}
                  />
                </div>
              </div>
              <div
                className={`mobile-list-all ${expandedIndex ? "visible" : ""}`}
              >
                <div className="list-flex">
                  <Link
                    to="/vspt"
                    style={{ textDecoration: "none" }}
                    className="service-link"
                    onClick={toggleMenu}
                  >
                    Vulnerability Assessment Penetration Testing
                  </Link>
                  {/* <Link to="Vulnerability" style={{textDecoration:"none"}} className="service-link">Vulnerability Assessment</Link> */}
                  <Link
                    to="/EndpointSecurity"
                    style={{ textDecoration: "none" }}
                    className="service-link"
                    onClick={toggleMenu}
                  >
                    Endpoint Security
                  </Link>
                  <Link
                    to="/NextGenerationFirewall"
                    style={{ textDecoration: "none" }}
                    className="service-link"
                    onClick={toggleMenu}
                  >
                    Next Generation Firewall
                  </Link>
                  <Link
                    to="/EmailSecurity"
                    style={{ textDecoration: "none" }}
                    className="service-link"
                    onClick={toggleMenu}
                  >
                    Email Security
                  </Link>
                  <Link
                    to="/MalwareAnalysis"
                    style={{ textDecoration: "none" }}
                    className="service-link"
                    onClick={toggleMenu}
                  >
                    {" "}
                    Malware Analysis{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="mobile-link link3">
              <Link
                to="/contact"
                style={{ textDecoration: "none" }}
                onClick={toggleMenu}
              >
                <p>Contact</p>
              </Link>
            </div>
            <div className="get-in-touch" onClick={toggleMenu}>
              <p>Get In Touch</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

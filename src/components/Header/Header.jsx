import React, { useEffect, useRef } from "react";
import "./header.css";
import { Container } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
export default function Header() {
  const NAV_LINKS = [
    {
      display: "home",
      url: "/home",
    },
    {
      display: "Market",
      url: "/Market",
    },
    {
      display: "Create",
      url: "/Create",
    },
    {
      display: "Contact",
      url: "/Contact",
    },
  ];

  const menuRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }

      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);
  const ToggleMenu = ()=> menuRef.current.classList.toggle("active__menu");
  return (
    <>
      <header className="header" ref={headerRef}>
        <Container>
          <div className="navigation">
            <div className="logo">
              <h2 className="d-flex gap-2 align-items-center">
                <span>
                  <i className="ri-fire-fill"></i>
                </span>
                Nfts
              </h2>
            </div>
            <div className="nav__menu" ref={menuRef} onClick={ToggleMenu}>
              <ul className="nav__list">
                {NAV_LINKS.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.url}
                      className={(navClass) =>
                        navClass.isActive ? "active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__right d-flex align-items-center gap-5">
              <button className="btn d-flex gap-2 align-items-center">
                <span>
                  <i className="ri-wallet-line"></i>
                </span>
                <Link to="/wallet">Connect Wallet</Link>
              </button>
              <span className="mobile__menu">
                <i className="ri-menu-line" onClick={ToggleMenu} ></i>
              </span>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
}

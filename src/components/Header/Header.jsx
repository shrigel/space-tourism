import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/shared/logo.svg";
import hamburgerIcon from "../../assets/shared/icon-hamburger.svg";
import closeIcon from "../../assets/shared/icon-close.svg";

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavToggle = () => {
        setIsNavOpen(prev => !prev);
    };

    const navList = [
        { num: "00", page: "HOME", path: "/" },
        { num: "01", page: "DESTINATION", path: "/destination" },
        { num: "02", page: "CREW", path: "/crew" },
        { num: "03", page: "TECHNOLOGY", path: "/technology" }
    ];

    return (
        <header className="header">
            <Link to="/" className="header__logo">
                <img src={logo} alt="Space Tourism" />
            </Link>

            <div className="header__line" aria-hidden="true" />

            <button
                className="header__hamburger" onClick={handleNavToggle}
                aria-expanded={isNavOpen}
                aria-label="Toggle navigation menu"
            >
                <img src={isNavOpen ? closeIcon : hamburgerIcon} alt="" />
            </button>

            <nav className={`header__nav ${isNavOpen ? 'header__nav--open' : ''}`}>
                <ul>
                    {navList.map(item => (
                        <li key={item.num}>
                            <NavLink
                                to={item.path}
                                onClick={() => setIsNavOpen(false)}
                                className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
                            >
                                <span className="text-preset-8-bold nav-item__number">{item.num}</span>
                                <span className="text-preset-8">{item.page}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
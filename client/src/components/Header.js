import React from "react";
import HeaderCSS from './Header.module.css';
import { GiPineTree } from "react-icons/gi";

const Header = () => {
    return (
        <div>
            <div className={HeaderCSS.nav}>
                <span className={HeaderCSS.logo}><GiPineTree /></span>

                <nav className={HeaderCSS.navLinks}>
                    <a href="/">Home</a>
                    <a href="https://github.com/jasvin0513" target="_blank">Github</a>
                    <a href="https://www.linkedin.com/in/jasvinr/" target="_blank">LinkedIn</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;
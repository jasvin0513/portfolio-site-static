import React from "react";
import HomeCSS from './Home.module.css';

const Home = () => {
    return(
        <div>
            <div className={HomeCSS.text}>
                <h2 className={HomeCSS.intro}>Hello, my name is </h2>
                <div className={HomeCSS.main}>
                    <h1 className={HomeCSS.name}>Jasvin.</h1>
                </div>
                <p>I'm an aspiring <span className={HomeCSS.traits
                }> Software Developer </span> 
              with a passion for <span className={HomeCSS.traits}>building</span> new things and <span className={HomeCSS.traits}>exploring</span> nature.</p>
            </div>
        </div>
    );
};

export default Home;
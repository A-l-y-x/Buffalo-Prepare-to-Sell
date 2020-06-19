import React from "react";
import buffalo from "../pics/welcomeCovid.svg";

const WelcomeCovid = () => {
    return (
        <div className="page" id="welcomeCovid">
            <h2 className="page-title">How to sell in store</h2>
            <h3 className="page-subtitle">During COVID-19</h3>
            <img src={buffalo} className="buffalo-illu" id="welcome-covid" />
            <div className="over-pic">
                <p className="p1">
                    Some of our locations are now open and buying!
                </p>
                <p className="p2">
                    For safety, we've adjusted our in-store selling process
                </p>
            </div>
        </div>
    );
};

export default WelcomeCovid;

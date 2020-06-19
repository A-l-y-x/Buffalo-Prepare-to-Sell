import React, { Component, useState, createRef } from "react";
import "./App.css";
import drow from "./decorations/diamond-row.svg";
import arrowDown from "./decorations/arrow-down.svg";
import WelcomeCovid from "./pages/welcomeCovid";
import WeBuy from "./pages/weBuy";
import WeBuy2Covid from "./pages/weBuy2Covid";
import DontBuy from "./pages/dontBuy";
import Bags from "./pages/bags";
import AppointmentCovid from "./pages/appointmentCovid";
import DropOffCovid from "./pages/dropOffCovid";
import BuyingCovid from "./pages/buyingCovid";
import WePayCovid from "./pages/wePayCovid";
import LocationsCovid from "./pages/locationsCovid";
import "./fonts/CatalinaAnacapa/CatalinaAnacapa.ttf";

const sbmp = () => {
    return <p className="dummy-text">welcome</p>;
};
const sbmp2 = () => {
    return <p className="dummy-text">guide to sell-by-mail...</p>;
};
const isp = () => {
    return <p className="dummy-text">guide to selling in store after covid</p>;
};
const etc = () => {
    return <p className="dummy-text">...</p>;
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sequences: [
                {
                    name: "In-Store",
                    sequence: [
                        { name: "welcome", component: sbmp },
                        { name: "weBuy", component: isp },
                        { name: "brands", component: etc },
                        { name: "wePay", component: etc },
                        { name: "dontBuy", component: etc },
                        { name: "condition", component: etc },
                        { name: "bags", component: etc },
                        { name: "inStoreProcess", component: etc },
                        { name: "id", component: etc },
                    ],
                },
                {
                    name: "In-Store: Covid-19",
                    sequence: [
                        { name: "welcomeCovid", component: WelcomeCovid },
                        { name: "weBuy", component: WeBuy },
                        { name: "weBuy2Covid", component: WeBuy2Covid },
                        { name: "dontBuy", component: DontBuy },
                        { name: "bags", component: Bags },
                        {
                            name: "appointmentCovid",
                            component: AppointmentCovid,
                        },
                        { name: "dropOffCovid", component: DropOffCovid },
                        { name: "buyingCovid", component: BuyingCovid },
                        { name: "wePayCovid", component: WePayCovid },
                        { name: "LocationsCovid", component: LocationsCovid },
                    ],
                },
                {
                    name: "Sell-By-Mail",
                    sequence: [
                        { name: "welcome", component: sbmp },
                        { name: "sbmpage2", component: sbmp2 },
                        { name: "brands", component: etc },
                        { name: "wePay", component: etc },
                        { name: "dontBuy", component: etc },
                        { name: "condition", component: etc },
                        { name: "bags", component: etc },
                        { name: "inStoreProcess", component: etc },
                        { name: "id", component: etc },
                    ],
                },
            ],
            sequence: [
                { name: "welcomeCovid", component: WelcomeCovid },
                { name: "weBuy", component: WeBuy },
                { name: "weBuy2Covid", component: WeBuy2Covid },
                { name: "dontBuy", component: DontBuy },
                { name: "bags", component: Bags },
                {
                    name: "appointmentCovid",
                    component: AppointmentCovid,
                },
                { name: "dropOffCovid", component: DropOffCovid },
                { name: "buyingCovid", component: BuyingCovid },
                { name: "wePayCovid", component: WePayCovid },
                { name: "LocationsCovid", component: LocationsCovid },
            ],
            showGuide: "hide",
        };
    }
    guide = createRef();
    scrollToGuide = () => {
        this.guide.current.scrollIntoView({ behavior: "smooth" });
    };
    handleLaunchGuide = (seq, scroll) => {
        this.setState({ sequence: seq });
        this.setState({ showGuide: "show" });
        scroll();
    };
    render() {
        return (
            <div className="App">
                <header className="landing">
                    <div className="bg-img">
                        <div className="landingtext">
                            <h1 className="landing-title">Planning to Sell?</h1>
                            <h3 className="landing-subtitle">
                                Choose an option below to find out how
                            </h3>
                        </div>
                        <div className="launch-btns-cntnr">
                            {this.state.sequences.map((seq) => (
                                <button
                                    className="launch-btn"
                                    onClick={() => {
                                        this.handleLaunchGuide(
                                            seq.sequence,
                                            this.scrollToGuide
                                        );
                                    }}
                                >
                                    {seq.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </header>
                <div ref={this.guide}>
                    {this.state.sequence.map((page) => (
                        <div className="page-wrpr">
                            <div className="between-pages">
                                <img src={drow} className="next-page-d-row" />
                                <img
                                    src={arrowDown}
                                    className="next-page-arrow"
                                />
                                <img src={drow} className="next-page-d-row" />
                            </div>
                            <page.component />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
// background cacti for div with ref to activate space visually
export default App;
